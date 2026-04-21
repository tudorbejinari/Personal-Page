# Stop Letting AI Click Buttons — Make It Build Your Test Suite Instead

I'm a QA automation engineer working on a financial application — payments, disbursements, accounting workflows. The kind of app where "it looked fine when I clicked around" isn't a valid test strategy.

Recently I've seen a wave of articles about "AI QA engineers" — give Claude a browser via Playwright MCP, let it explore your app, find bugs, write reports. Great demo. Terrible at scale.

So I built something different. **AI doesn't run my tests. AI builds, debugs, and reviews them.** The tests themselves are pure Playwright — deterministic, repeatable, zero tokens at runtime.

This is what the system looks like after months of iteration.

---

## Why Black-Box AI Testing Breaks Down

| Problem | Why It Matters |
|---|---|
| **Non-deterministic** | Same prompt, different coverage — can't build a regression suite on that |
| **No memory** | Doesn't know your save button disables during calculations |
| **Expensive** | Every click is an LLM round-trip — daily token budget gone on one form |
| **False confidence** | "Nothing broke" ≠ the payment processed correctly |

For exploratory testing? It has a place. As your test foundation? No.

---

## The Architecture

```
┌─────────────────────────────────────────────────────┐
│                   AI Agent Layer                     │
│                                                      │
│  ┌────────────┐  ┌────────────┐  ┌──────────────┐  │
│  │ Senior QA  │  │  Debugger  │  │   Reviewer   │  │
│  │   Agent    │  │   Agent    │  │    Agent     │  │
│  │ (Builder)  │  │ (Diagnose) │  │ (Read-only)  │  │
│  └─────┬──────┘  └─────┬──────┘  └──────┬───────┘  │
├────────┼───────────────┼─────────────────┼──────────┤
│        ▼               ▼                 ▼          │
│          Deterministic Playwright Test Suite        │
│  ┌──────────────────────────────────────────────┐   │
│  │  Specs → Page Objects → Shared Wait Helpers  │   │
│  │  ES6 classes · data-testid locators          │   │
│  │  Tuned timeouts · zero waitForTimeout()      │   │
│  └──────────────────────────────────────────────┘   │
├─────────────────────────────────────────────────────┤
│  Skills (Slash Commands)                            │
│  /pw-run  /pw-flaky  /pw-codegen  /fix-ci          │
│  /create-bug  /pr-resolve  /tests-from-ticket       │
├─────────────────────────────────────────────────────┤
│  Persistent Memory  (grows smarter across sessions) │
└─────────────────────────────────────────────────────┘
```

AI agents produce **code** — page objects, specs, helpers. That code runs in CI without any AI involvement. The agents make me faster at writing and maintaining it.

---

## The Foundation: Page Objects AI Can Reason About

Every page gets a class with strict rules:

```javascript
class PayoutsPage {
  constructor(page) {
    this.page = page;

    // ALL locators here — single source of truth
    this.paymentTypeSelect = page.getByTestId('payment-type-select');
    this.saveButton        = page.getByTestId('payouts-save-btn');
    this.toast             = page.locator('[data-testid="toast-notification"]');
  }

  async selectPaymentType(type) {
    await playwrightHelpers.waitForEnabled(this.paymentTypeSelect);
    await this.paymentTypeSelect.click();
    await this.page.getByRole('option', { name: type }).click();
  }

  async save() {
    await playwrightHelpers.clickWhenEnabled(this.saveButton);
    await playwrightHelpers.waitForVisible(this.toast);
  }
}
```

**The rules:**
- Locators in constructor — never in methods or tests
- `getByTestId()` first, always
- Tests call methods only — never locators directly
- Shared helpers for all waits — no inline timeouts

This structure is what makes the AI agents effective. When something breaks, the agent knows exactly where to look.

---

## Shared Wait Helpers: Institutional Knowledge in Code

Our app has complex async behavior — buttons that disable during calculations, dropdowns that detach and re-render, save operations with variable timing. I extracted all of this into helpers:

```javascript
// Replaces dozens of flaky patterns with one reliable call
await playwrightHelpers.clickWhenEnabled(locator);  // waits for enabled, then clicks
await playwrightHelpers.waitForVisible(locator);     // element visible
await playwrightHelpers.waitForAttached(locator);    // in DOM (survives re-renders)
await playwrightHelpers.waitForDetached(locator);    // removed (dialog closed)
```

Every AI agent uses these helpers. They never write raw `waitFor()` or inline timeouts. The knowledge of "how this app behaves" lives in the helpers — not scattered across 200 test files.

---

## Four Specialized Agents

### Senior QA Agent — The Builder

Writes new tests and page objects. Has full file access. Its killer feature: converting raw Playwright Codegen recordings into production-quality code.

You record a browser session → paste the output → get back properly structured page objects with locators in the constructor, methods using shared helpers, and specs following all project conventions.

### API Test Creator — Backend Coverage

Builds API endpoint definitions and test specs. Knows the project's `Endpoint` class pattern, authentication setup, and the fluent assertion API:

```javascript
await request()
  .expectStatus(200)
  .getResponseData();
```

Give it an endpoint path and expected behavior — it generates both the endpoint file and a full test suite covering happy paths, error cases, and permission restrictions.

### Debugger Agent — The Investigator

Diagnoses and fixes failures. Follows a strict process:

```
Read the test → Read the page object → Classify the error
     → Search known patterns → Apply fix → Verify
```

It carries a diagnosis table built from real failures:

| Error | Root Cause | Fix |
|---|---|---|
| "element not found" after save | List not refreshed | `waitForVisible()` after save |
| "element detached from DOM" | Async re-render | `waitForAttached()` before click |
| "element not visible" after tab | Tab content loading | `waitForEnabled()` before interact |
| Timeout at 60s | Page object wait exceeds test timeout | `test.setTimeout()` |

A stateless AI rebuilds this knowledge from zero every session. My debugger has it from the start.

### Reviewer Agent — The Gatekeeper

**Read-only. Cannot modify files.**

Rates code 0–10 and outputs: `APPROVE` / `REQUEST CHANGES` / `REJECT`

Checks: locator placement, timeout values, wait patterns, test naming, race conditions, no `waitForTimeout`, no `force: true`.

Why read-only? A reviewer that can edit is tempted to "just fix it." Read-only forces clear, actionable feedback.

---

## Seven Skills That Connect Everything

### `/pw-run` — Run + Analyze
Runs a test with proper environment setup. If it fails, extracts the trace, reads the failing code, cross-references with known patterns, and suggests the fix. Not just "test failed" — it tells you *why*.

### `/pw-flaky` — Flakiness Detective
Runs a test N times (default 5), collects pass/fail stats, analyzes traces from each failure, classifies the flakiness — race condition? stale element? backend latency? — and recommends a specific fix with before/after code.

### `/pw-codegen` — Record to Production Code
Launches Playwright Codegen, you record interactions in the browser, then the skill converts the raw recording into project-pattern page objects and specs. Locators converted to `getByTestId()`, waits added via helpers, structure following all conventions.

### `/tests-from-ticket` — Jira to Tests (Full Pipeline)

```
Jira ticket
     ↓
Read ticket (summary + acceptance criteria + linked issues)
     ↓
Generate test scenarios with steps + expected results
     ↓
Create recording checklist for codegen sessions
     ↓
Launch Playwright Codegen
     ↓
Convert recordings to production tests
```

From ticket to running tests in one workflow.

### `/fix-ci` — CI Failure Triage
Fetches Playwright results from Argo CI, parses the JSON report, groups failures by spec file, and delegates each to a debugger agent running **in parallel**. Five failing spec files = five debugger agents working simultaneously.

### `/create-bug` — Test Failure to Jira Ticket
When a test failure reveals an actual product bug (not a test issue), this skill composes a structured Jira ticket — environment, reproduction steps, expected vs actual, traces — and creates it in the right project with proper priority.

### `/pr-resolve` — PR Comment Triage
Fetches all unresolved PR review threads via GitHub GraphQL, evaluates each (already fixed? incorrect? valid?), presents the triage for approval, fixes what you approve, and replies to what you dismiss. Bot comments get auto-resolved. Every AI reply is prefixed with `[Agent]` for transparency.

---

## Persistent Memory: The System Gets Smarter

This is the part that separates this from any stateless AI tool:

```markdown
## Key Patterns Learned

- Tab switch ≠ content loaded
  Always wait for elements after tab navigation

- Dialog close ≠ save complete
  Wait for API response, not dialog dismissal

- Dropdown detachment
  Wait for data indicator + attached state before click

- Checkbox scoping
  Scope to parent component when same checkbox appears in multiple tabs
```

When the debugger encounters a new failure, it checks memory first. If a similar pattern was solved last week, it applies that fix immediately. When it discovers something new, it records it.

**The result:** the system handles problems faster the longer you use it.

---

## Agent Teams: Parallel Work

For large tasks — 5 failing spec files, or building tests for a new feature — agents work as a coordinated team:

```
Lead Agent (coordinates)
├── Agent A → spec-file-1.spec.js
├── Agent B → spec-file-2.spec.js
├── Agent C → spec-file-3.spec.js
└── Reviewer Agent → gates all output before commit
```

**Rules:**
- Each agent owns **different files** — never two agents on the same file
- One agent per spec file is the sweet spot
- The reviewer gates quality before anything gets committed

For a single test fix? Skip the overhead, use one agent. The approach scales to the task.

---

## The Real Outcome

AI doesn't run my tests. It makes me dramatically faster at building and maintaining them.

The tests themselves are pure Playwright — deterministic, fast, zero tokens at runtime. The agents handle the cognitive overhead: writing boilerplate, diagnosing failures, reviewing PRs, triaging CI.

**That's the architecture worth building.**

> *"Use AI to 10x your impact — not to replace the engineering discipline that makes tests trustworthy."*

# How I Use AI to Generate Test Scenarios

Writing test scenarios manually is slow. Here's how I use Claude CLI to do it faster — without losing quality.

## The Problem

Every feature needs test scenarios. Writing them from scratch takes 30–60 minutes per feature. Most testers skip edge cases because there's no time.

## My Workflow

1. Paste the Jira ticket or feature description into Claude CLI
2. Ask: *"Generate 10 test scenarios for this feature, including happy path, edge cases, and error states"*
3. Review and trim to the best 6–8
4. Export directly into Jira or Playwright test stubs

## What I Prompt Claude With

```
Given this feature: [paste feature description]
Generate test scenarios including:
- Happy path
- Edge cases
- Error/failure states
- Boundary values
Format as: Scenario name | Input | Expected output
```

## Results

- Scenario writing time: 45 min → 10 min per feature
- Edge cases I would have missed appear consistently
- Bug reports write themselves from failed scenarios

## Key Takeaway

AI doesn't replace your testing judgement. It removes the blank-page problem and surfaces the cases you'd skip when you're in a hurry.

# Reducing Flaky Tests by 80%: What Actually Worked

Flaky tests are a trust problem. When your CI is red 30% of the time for no real reason, teams stop caring. Here's what I changed.

## The Before State

- Static `setTimeout` calls throughout the test suite
- Tests hitting real network endpoints with no retry logic
- Race conditions on dynamic content loading
- 1 in 3 CI runs failing with no code changes

## What Didn't Work

- Increasing timeouts (just made flakiness slower)
- Running tests in isolation (didn't reproduce the real failure)
- Ignoring them (morale killer)

## What Actually Fixed It

### 1. Replace static timeouts with Playwright's built-in wait helpers

```js
// Before
await page.click('#submit')
await new Promise(r => setTimeout(r, 2000))

// After
await page.click('#submit')
await page.waitForSelector('.success-message', { state: 'visible' })
```

### 2. Use `waitForResponse` for API-dependent assertions

```js
const [response] = await Promise.all([
  page.waitForResponse(res => res.url().includes('/api/submit')),
  page.click('#submit'),
])
expect(response.status()).toBe(200)
```

### 3. Retry only at the network layer, not the test layer

Don't wrap entire tests in retry loops. Fix the root cause instead.

### 4. Run tests in parallel with proper isolation

Each test gets its own browser context. No shared state, no bleed-through.

## Results

- Flakiness dropped from ~35% to under 7% after one sprint
- After full migration: less than 5% flakiness (80% reduction overall)
- CI runs 33% faster due to removed sleep calls

## The Real Lesson

Flaky tests are symptoms. The disease is usually an assumption that something is ready before it actually is. Fix the assumption, not the symptom.

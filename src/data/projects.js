export const projects = [
  {
    id: 1,
    title: "Test Suite Refactor (Mocha → Playwright)",
    problem: "Legacy test suite with static timeouts causing flakiness and slow CI runs.",
    automated: "Converted all Mocha tests to Playwright, replaced static timeouts with smart wait helpers.",
    tools: ["Playwright", "JavaScript", "Cursor", "Claude CLI", "CI/CD"],
    results: ["33% faster test runs", "80% reduction in flakiness"],
    github: "https://github.com/tudorbejinari",
  },
  {
    id: 2,
    title: "AI-Assisted Test Generation",
    problem: "Manual test scenario writing was slow and missed edge cases.",
    automated: "Used Claude CLI to generate test scenarios, bug reports, and Playwright test stubs.",
    tools: ["Claude CLI", "Playwright", "JavaScript", "Jira"],
    results: ["3x faster test coverage", "Edge cases discovered pre-release"],
    github: null,
  },
]

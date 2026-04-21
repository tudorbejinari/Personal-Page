export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24 space-y-10">
      <h1 className="text-4xl font-bold text-white">About Me</h1>
      <div className="space-y-6 text-gray-300 leading-relaxed">
        <p>
          I'm a Senior Software Tester who believes that quality isn't a phase — it's a mindset
          baked into the entire development cycle. My job is to make sure the software that ships
          actually works, and that the process of verifying it doesn't slow teams down.
        </p>
        <p>
          I specialize in test automation with Playwright and JavaScript, and I've spent the last
          few years migrating legacy test suites, eliminating flakiness, and finding ways to
          use AI tools to write better tests faster. I don't automate for the sake of it — I automate
          what matters and measure the results.
        </p>
        <p>
          My current focus is the intersection of AI and testing. I use tools like Claude CLI and
          Cursor daily to generate test scenarios, write Playwright stubs, and produce structured
          bug reports. It's changed how I work — and I write about it so other testers can do the same.
        </p>
        <p>
          Tools I genuinely enjoy: Playwright, Jira, Claude CLI, Cursor, GitHub Actions.
          I'm always learning, always iterating.
        </p>
      </div>
    </div>
  )
}

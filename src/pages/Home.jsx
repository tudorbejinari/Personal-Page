import { Link } from "react-router-dom"
import TechBadge from "../components/TechBadge"

const stack = [
  "Playwright", "Cypress", "TestComplete", "JavaScript", "Node.js",
  "Postman", "Karate", "CI/CD", "Cursor", "Claude CLI",
]

const achievements = [
  { metric: "80%", label: "Reduction in flaky tests" },
  { metric: "33%", label: "Faster test suite runs" },
  { metric: "10x", label: "Impact with AI-assisted testing" },
]

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-24 space-y-20">
      <section className="space-y-6 max-w-2xl">
        <div className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-green-900/40 text-green-300 border border-green-800">
          Open to opportunities
        </div>
        <h1 className="text-5xl font-bold text-white leading-tight">
          QA Automation Engineer
        </h1>
        <p className="text-xl text-gray-400 leading-relaxed">
          API & UI testing specialist. I build robust automated test systems
          using Playwright, Cypress, and JavaScript — and use AI to do it faster.
        </p>
        <p className="text-gray-400 leading-relaxed">
          Detail-obsessed engineer with experience across functional, integration, regression,
          and exploratory testing. I integrate automation into CI/CD pipelines, work closely
          with DevOps teams, and actively use tools like Cursor and Claude CLI to streamline
          test creation and boost efficiency. My goal: use AI to 10x my impact, not compete with it.
        </p>
        <div className="flex flex-wrap gap-2 pt-2">
          {stack.map((s) => <TechBadge key={s} label={s} />)}
        </div>
        <div className="flex flex-wrap gap-4 pt-2">
          <Link
            to="/articles"
            className="px-5 py-2.5 rounded-lg bg-white text-gray-900 font-medium text-sm hover:bg-gray-100 transition-colors"
          >
            Read My Articles
          </Link>
          <Link
            to="/experience"
            className="px-5 py-2.5 rounded-lg border border-gray-700 text-white font-medium text-sm hover:border-gray-500 transition-colors"
          >
            View Projects
          </Link>
          <Link
            to="/contact"
            className="px-5 py-2.5 rounded-lg border border-gray-700 text-white font-medium text-sm hover:border-gray-500 transition-colors"
          >
            Contact Me
          </Link>
        </div>
      </section>

      <section>
        <h2 className="text-sm text-gray-500 uppercase tracking-wider mb-6">Key Results</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {achievements.map(({ metric, label }) => (
            <div key={metric} className="rounded-xl border border-gray-800 bg-gray-900 p-6">
              <p className="text-4xl font-bold text-white mb-1">{metric}</p>
              <p className="text-gray-400 text-sm">{label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

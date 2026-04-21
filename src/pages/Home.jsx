import { Link } from "react-router-dom"
import TechBadge from "../components/TechBadge"

const stack = ["Playwright", "JavaScript", "Jira", "CI/CD", "AI tools", "Cursor"]
const achievements = [
  { metric: "80%", label: "Reduction in flaky tests" },
  { metric: "33%", label: "Faster test suite runs" },
  { metric: "3x", label: "Test coverage speed with AI" },
]

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-24 space-y-20">
      <section className="space-y-6 max-w-2xl">
        <div className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-green-900/40 text-green-300 border border-green-800">
          Available for opportunities
        </div>
        <h1 className="text-5xl font-bold text-white leading-tight">
          Senior Software Tester
        </h1>
        <p className="text-xl text-gray-400 leading-relaxed">
          Focused on automation, efficiency, and AI-assisted testing.
          I build reliable test systems that ship faster and break less.
        </p>
        <p className="text-gray-400 leading-relaxed">
          5+ years in QA with hands-on experience migrating legacy test suites to Playwright,
          reducing CI flakiness, and integrating AI tools into daily testing workflows.
          I care about test quality the same way developers care about code quality.
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

import { Link } from "react-router-dom"
import TechBadge from "./TechBadge"

export default function ProjectCard({ project }) {
  const { title, problem, automated, tools, results, github, article } = project
  return (
    <div className="rounded-xl border border-gray-800 bg-gray-900 p-6 flex flex-col gap-4">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <div>
        <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Problem</p>
        <p className="text-gray-300 text-sm">{problem}</p>
      </div>
      <div>
        <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">What I built</p>
        <p className="text-gray-300 text-sm">{automated}</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {tools.map((t) => <TechBadge key={t} label={t} />)}
      </div>
      <ul className="mt-auto space-y-1">
        {results.map((r) => (
          <li key={r} className="text-sm text-green-400 flex items-center gap-2">
            <span>✓</span> {r}
          </li>
        ))}
      </ul>
      <div className="flex gap-4 pt-1">
        {article && (
          <Link
            to={`/articles/${article}`}
            className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
          >
            Read full write-up →
          </Link>
        )}
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
          >
            View on GitHub →
          </a>
        )}
      </div>
    </div>
  )
}

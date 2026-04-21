import { Link } from "react-router-dom"
import TechBadge from "./TechBadge"

export default function ProjectCard({ project }) {
  const { title, problem, automated, tools, results, github, article } = project
  return (
    <div className="group rounded-xl border border-navy-700/80 bg-navy-900 p-6 flex flex-col gap-5 hover:border-sky-500/30 hover:shadow-card-hover transition-all duration-300">

      <h3 className="text-base font-semibold text-white leading-snug">{title}</h3>

      <div className="space-y-4 flex-1">
        <div>
          <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-widest mb-1.5">Problem</p>
          <p className="text-slate-300 text-sm leading-relaxed">{problem}</p>
        </div>
        <div>
          <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-widest mb-1.5">What I built</p>
          <p className="text-slate-300 text-sm leading-relaxed">{automated}</p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-1.5">
        {tools.map((t) => <TechBadge key={t} label={t} />)}
      </div>

      <ul className="space-y-1.5">
        {results.map((r) => (
          <li key={r} className="flex items-start gap-2 text-sm">
            <span className="text-emerald-400 mt-0.5 shrink-0">✓</span>
            <span className="text-slate-300">{r}</span>
          </li>
        ))}
      </ul>

      {(article || github) && (
        <div className="flex gap-4 pt-1 border-t border-navy-700/60">
          {article && (
            <Link
              to={`/articles/${article}`}
              className="text-sm text-sky-400 hover:text-sky-300 font-medium transition-colors duration-200"
            >
              Read full write-up →
            </Link>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-sky-400 hover:text-sky-300 font-medium transition-colors duration-200"
            >
              View on GitHub →
            </a>
          )}
        </div>
      )}
    </div>
  )
}

import { Link } from "react-router-dom"
import TechBadge from "./TechBadge"

export default function ProjectCard({ project }) {
  const { title, problem, automated, tools, results, github, article } = project
  return (
    <div className="group relative rounded-2xl glass glass-hover flex flex-col gap-5 p-6 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-blue/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <h3 className="text-sm font-semibold text-white leading-snug">{title}</h3>

      <div className="space-y-4 flex-1">
        <div>
          <p className="text-[10px] font-semibold text-slate-600 uppercase tracking-[0.15em] mb-1.5">Problem</p>
          <p className="text-slate-400 text-sm leading-relaxed">{problem}</p>
        </div>
        <div>
          <p className="text-[10px] font-semibold text-slate-600 uppercase tracking-[0.15em] mb-1.5">What I built</p>
          <p className="text-slate-400 text-sm leading-relaxed">{automated}</p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-1.5">
        {tools.map((t) => <TechBadge key={t} label={t} />)}
      </div>

      <ul className="space-y-2">
        {results.map((r) => (
          <li key={r} className="grid grid-cols-[14px_1fr] gap-2 text-sm">
            <span className="text-emerald-400 pt-0.5 text-xs">✓</span>
            <span className="text-slate-300 leading-relaxed">{r}</span>
          </li>
        ))}
      </ul>

      {(article || github) && (
        <div className="flex gap-4 pt-2 border-t border-white/[0.06]">
          {article && (
            <Link
              to={`/articles/${article}`}
              className="text-sm text-neon-blue hover:text-sky-300 font-medium transition-colors duration-200"
            >
              Read full write-up →
            </Link>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-neon-blue hover:text-sky-300 font-medium transition-colors duration-200"
            >
              View on GitHub →
            </a>
          )}
        </div>
      )}
    </div>
  )
}

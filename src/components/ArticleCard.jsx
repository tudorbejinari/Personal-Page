import { Link } from "react-router-dom"
import TechBadge from "./TechBadge"

export default function ArticleCard({ article }) {
  const { id, title, summary, date, tags, featured } = article
  return (
    <Link
      to={`/articles/${id}`}
      className={`group relative block rounded-2xl glass glass-hover p-6 overflow-hidden transition-all duration-300 ${
        featured ? "border border-neon-blue/20" : "border border-white/[0.06]"
      }`}
    >
      {featured && (
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-blue/50 to-transparent" />
      )}

      <div className="flex items-start justify-between gap-6">
        <div className="space-y-3 flex-1 min-w-0">
          {featured && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-semibold text-neon-blue bg-neon-blue/8 border border-neon-blue/20 uppercase tracking-wider">
              Featured
            </span>
          )}
          <h2 className="text-base font-semibold text-white group-hover:text-neon-blue transition-colors duration-200 leading-snug">
            {title}
          </h2>
          <p className="text-slate-500 text-sm leading-relaxed">{summary}</p>
          <div className="flex flex-wrap items-center gap-1.5 pt-1">
            {tags.map((t) => <TechBadge key={t} label={t} />)}
          </div>
        </div>
        <time className="text-[11px] text-slate-600 whitespace-nowrap mt-0.5 shrink-0">{date}</time>
      </div>
    </Link>
  )
}

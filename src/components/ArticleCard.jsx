import { Link } from "react-router-dom"

export default function ArticleCard({ article }) {
  const { id, title, summary, date, tags, featured } = article
  return (
    <Link
      to={`/articles/${id}`}
      className={`group block rounded-xl border p-6 transition-all duration-300 ${
        featured
          ? "border-sky-500/25 bg-navy-900 hover:border-sky-400/40 hover:shadow-card-hover"
          : "border-navy-700/80 bg-navy-900 hover:border-slate-600/60"
      }`}
    >
      <div className="flex items-start justify-between gap-6">
        <div className="space-y-3 flex-1 min-w-0">
          {featured && (
            <span className="inline-flex items-center text-[11px] font-semibold text-sky-400 uppercase tracking-widest">
              Featured
            </span>
          )}
          <h2 className="text-base font-semibold text-white group-hover:text-sky-300 transition-colors duration-200 leading-snug">
            {title}
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">{summary}</p>
          <div className="flex flex-wrap gap-1.5 pt-1">
            {tags.map((t) => (
              <span
                key={t}
                className="text-[11px] font-medium text-slate-500 bg-navy-800 border border-navy-700/60 px-2 py-0.5 rounded-md"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
        <time className="text-xs text-slate-600 whitespace-nowrap mt-0.5 shrink-0">{date}</time>
      </div>
    </Link>
  )
}

import { Link } from "react-router-dom"

export default function ArticleCard({ article }) {
  const { id, title, summary, date, tags, featured } = article
  return (
    <Link
      to={`/articles/${id}`}
      className={`block rounded-xl border p-6 hover:border-gray-600 transition-colors group ${
        featured
          ? "border-blue-900/60 bg-blue-950/20 hover:border-blue-700"
          : "border-gray-800 bg-gray-900"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-2 flex-1">
          {featured && (
            <span className="inline-block text-xs font-medium text-blue-400 bg-blue-900/30 border border-blue-800/50 px-2 py-0.5 rounded mb-1">
              Featured
            </span>
          )}
          <h2 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors leading-snug">
            {title}
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">{summary}</p>
          <div className="flex flex-wrap gap-2 pt-1">
            {tags.map((t) => (
              <span key={t} className="text-xs text-gray-500 bg-gray-800 px-2 py-0.5 rounded">
                {t}
              </span>
            ))}
          </div>
        </div>
        <p className="text-xs text-gray-600 whitespace-nowrap mt-1">{date}</p>
      </div>
    </Link>
  )
}

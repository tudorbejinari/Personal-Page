import { Link } from "react-router-dom"

export default function ArticleCard({ article }) {
  const { id, title, summary, date, tags } = article
  return (
    <Link
      to={`/articles/${id}`}
      className="block rounded-xl border border-gray-800 bg-gray-900 p-6 hover:border-gray-600 transition-colors group"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-2">
          <h2 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">
            {title}
          </h2>
          <p className="text-gray-400 text-sm">{summary}</p>
          <div className="flex flex-wrap gap-2 pt-1">
            {tags.map((t) => (
              <span key={t} className="text-xs text-gray-500 bg-gray-800 px-2 py-0.5 rounded">
                {t}
              </span>
            ))}
          </div>
        </div>
        <p className="text-xs text-gray-600 whitespace-nowrap">{date}</p>
      </div>
    </Link>
  )
}

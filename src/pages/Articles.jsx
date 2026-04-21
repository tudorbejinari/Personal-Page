import { articles } from "../data/articles"
import ArticleCard from "../components/ArticleCard"

export default function Articles() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-24 space-y-12">
      <div>
        <h1 className="text-4xl font-bold text-white mb-3">Articles</h1>
        <p className="text-gray-400 max-w-xl">
          Practical knowledge from real QA work. No theory. Just what works.
        </p>
      </div>
      <div className="space-y-4">
        {articles.map((a) => <ArticleCard key={a.id} article={a} />)}
      </div>
    </div>
  )
}

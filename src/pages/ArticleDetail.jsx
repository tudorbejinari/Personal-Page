import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { articles } from "../data/articles"

export default function ArticleDetail() {
  const { id } = useParams()
  const article = articles.find((a) => a.id === id)
  const [content, setContent] = useState("")

  useEffect(() => {
    if (!article) return
    fetch(`/articles/${article.file}`)
      .then((res) => res.text())
      .then(setContent)
      .catch(() => setContent("Article content not found."))
  }, [article])

  if (!article) return (
    <div className="max-w-3xl mx-auto px-6 py-24 text-gray-400">
      Article not found.{" "}
      <Link to="/articles" className="text-blue-400 hover:underline">
        Back to articles
      </Link>
    </div>
  )

  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      <Link
        to="/articles"
        className="text-sm text-gray-500 hover:text-gray-300 transition-colors mb-8 inline-block"
      >
        ← Back to Articles
      </Link>
      <article className="prose prose-invert prose-lg max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </article>
    </div>
  )
}

import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.05] mt-auto">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <span className="text-sm text-slate-600">Tudor Bejinari</span>
        <div className="flex items-center gap-6 text-sm text-slate-700">
          <Link to="/articles" className="hover:text-slate-400 transition-colors duration-200">Articles</Link>
          <Link to="/experience" className="hover:text-slate-400 transition-colors duration-200">Experience</Link>
          <Link to="/contact" className="hover:text-slate-400 transition-colors duration-200">Contact</Link>
          <span>{new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  )
}

import { Link } from "react-router-dom"
import TechBadge from "../components/TechBadge"

const stack = [
  { label: "Playwright", variant: "blue" },
  { label: "Cypress", variant: "blue" },
  { label: "TestComplete", variant: "blue" },
  { label: "JavaScript", variant: "gold" },
  { label: "Node.js", variant: "gold" },
  { label: "Postman", variant: "blue" },
  { label: "CI/CD", variant: "violet" },
  { label: "Claude API", variant: "violet" },
  { label: "Cursor", variant: "violet" },
]

const achievements = [
  { metric: "80%", label: "Reduction in flaky tests", color: "blue" },
  { metric: "33%", label: "Faster test suite runs", color: "gold" },
  { metric: "10x", label: "Impact with AI-assisted testing", color: "violet" },
]

const styleMap = {
  blue:   { border: "border-neon-blue/15 hover:border-neon-blue/35",     from: "from-neon-blue/5",   text: "text-neon-blue" },
  gold:   { border: "border-gold-500/15 hover:border-gold-500/35",       from: "from-gold-500/5",    text: "text-gold-400" },
  violet: { border: "border-neon-violet/15 hover:border-neon-violet/35", from: "from-neon-violet/5", text: "text-neon-violet" },
}

export default function Home() {
  return (
    <div className="relative min-h-[90vh] flex flex-col">

      {/* Space orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-neon-blue/8 blur-[120px]" />
        <div className="absolute top-10 right-0 w-[500px] h-[400px] rounded-full bg-neon-violet/6 blur-[100px]" />
        <div className="absolute bottom-20 left-1/2 w-[400px] h-[300px] -translate-x-1/2 rounded-full bg-neon-blue/5 blur-[90px]" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 pt-20 pb-28 sm:pt-32 sm:pb-36 flex-1 flex flex-col justify-center space-y-20 sm:space-y-28">

        {/* Hero */}
        <section className="space-y-8 sm:space-y-10 max-w-3xl">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs font-semibold bg-emerald-500/8 text-emerald-400 border border-emerald-500/20 tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-slow" />
            Open to opportunities
          </div>

          <div className="space-y-3">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight">
              QA Automation
              <span className="block text-gradient-blue">Engineer</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-400 leading-relaxed font-light max-w-xl pt-2">
              API & UI testing specialist. I build reliable automated test systems
              with Playwright and JavaScript — then use AI to build them faster.
            </p>
          </div>

          <p className="text-slate-500 leading-relaxed text-sm sm:text-base max-w-lg">
            I work at the intersection of QA engineering and AI — designing infrastructure
            that scales, integrating automation into CI/CD pipelines, and using the Claude API
            and Cursor to 10x engineering impact without sacrificing reliability.
          </p>

          <div className="flex flex-wrap gap-2">
            {stack.map(({ label, variant }) => (
              <TechBadge key={label} label={label} variant={variant} />
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Link
              to="/articles"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-neon-blue text-space-950 font-semibold text-sm hover:bg-sky-300 transition-all duration-200 shadow-glow-sm"
            >
              Read My Articles
            </Link>
            <Link
              to="/experience"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl glass glass-hover text-slate-300 font-medium text-sm"
            >
              View Projects
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl glass glass-hover text-slate-300 font-medium text-sm"
            >
              Contact Me
            </Link>
          </div>
        </section>

        {/* Key Results */}
        <section className="space-y-5">
          <p className="text-[11px] font-semibold text-slate-600 uppercase tracking-[0.15em]">Key Results</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {achievements.map(({ metric, label, color }) => {
              const s = styleMap[color]
              return (
                <div
                  key={metric}
                  className={`relative rounded-2xl border ${s.border} glass p-6 transition-all duration-300 overflow-hidden group`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${s.from} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  <p className={`relative text-4xl sm:text-5xl font-bold mb-2 ${s.text}`}>{metric}</p>
                  <p className="relative text-slate-500 text-sm leading-snug">{label}</p>
                </div>
              )
            })}
          </div>
        </section>

      </div>
    </div>
  )
}

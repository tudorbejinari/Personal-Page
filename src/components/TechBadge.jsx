export default function TechBadge({ label, variant = "blue" }) {
  const styles = {
    blue: "bg-sky-500/10 text-sky-300 border-sky-500/20 hover:border-sky-400/40 hover:bg-sky-500/15",
    gold: "bg-gold-500/10 text-gold-300 border-gold-500/20 hover:border-gold-400/40",
    violet: "bg-violet-500/10 text-violet-300 border-violet-500/20 hover:border-violet-400/40",
  }
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border transition-all duration-200 ${styles[variant]}`}>
      {label}
    </span>
  )
}

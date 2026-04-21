export default function TechBadge({ label, variant = "blue" }) {
  const styles = {
    blue:   "bg-neon-blue/8 text-neon-blue border-neon-blue/20 hover:border-neon-blue/40 hover:bg-neon-blue/12",
    gold:   "bg-gold-500/8 text-gold-400 border-gold-500/20 hover:border-gold-400/40",
    violet: "bg-neon-violet/8 text-neon-violet border-neon-violet/20 hover:border-neon-violet/40",
  }
  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium border transition-all duration-200 ${styles[variant]}`}>
      {label}
    </span>
  )
}

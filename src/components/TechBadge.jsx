export default function TechBadge({ label }) {
  return (
    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-blue-900/40 text-blue-300 border border-blue-800">
      {label}
    </span>
  )
}

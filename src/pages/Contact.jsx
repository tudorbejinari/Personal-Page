const links = [
  {
    label: "Email",
    value: "tudorwebsolutions@gmail.com",
    href: "mailto:tudorwebsolutions@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/tudor-bejinari",
    href: "https://linkedin.com/in/tudor-bejinari",
  },
  {
    label: "GitHub",
    value: "github.com/tudorbejinari",
    href: "https://github.com/tudorbejinari",
  },
]

export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24 space-y-10">
      <div>
        <h1 className="text-4xl font-bold text-white mb-3">Get In Touch</h1>
        <p className="text-gray-400">
          Open to QA roles, freelance projects, and conversations about testing + AI.
        </p>
      </div>
      <div className="space-y-4">
        {links.map(({ label, value, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-5 rounded-xl border border-gray-800 bg-gray-900 hover:border-gray-600 transition-colors group"
          >
            <span className="text-sm text-gray-500 w-16 shrink-0">{label}</span>
            <span className="text-white group-hover:text-blue-300 transition-colors">{value}</span>
          </a>
        ))}
      </div>
    </div>
  )
}

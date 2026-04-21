const career = [
  { stage: "Traditional QA", current: false },
  { stage: "AI-Augmented QA Engineer", current: true },
  { stage: "Quality / Test Architect", current: false },
  { stage: "AI-Quality Specialist", current: false },
]

const tools = [
  { category: "Test Frameworks", items: "Playwright · Cypress · TestComplete · Karate" },
  { category: "Languages", items: "JavaScript · Node.js · SQL" },
  { category: "API Testing", items: "Postman · Swagger · RESTful APIs" },
  { category: "CI/CD", items: "Codefresh · Argo · GitHub Actions" },
  { category: "AI Tools", items: "Cursor · Claude CLI · Devin.ai · GitHub Copilot" },
  { category: "Dev Tools", items: "IntelliJ IDEA · Visual Studio · GitHub · GitKraken" },
]

export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24 space-y-14">
      <h1 className="text-4xl font-bold text-white">About Me</h1>

      <div className="space-y-6 text-gray-300 leading-relaxed">
        <p>
          I'm a QA Automation Engineer with a detail-obsessed approach to quality. Whether it's
          functional, integration, regression, or exploratory testing — I've done it, automated it,
          and measured the results. I specialize in JavaScript and Node.js test automation and have
          deep experience with Cypress, Playwright, TestComplete, Postman, and the Karate Framework.
        </p>
        <p>
          I work shoulder-to-shoulder with DevOps teams, integrating automation into CI/CD pipelines
          using Codefresh and Argo. I have solid grounding in SQL, RESTful APIs, and RDBMS concepts,
          and I'm comfortable across both front-end and back-end testing scenarios.
        </p>
        <p>
          My current focus is AI-augmented testing. I actively use Cursor, Claude CLI, Devin.ai,
          and GitHub Copilot to streamline test creation, generate scenarios, and boost engineering
          efficiency. I believe quality is everyone's job — but I lead the charge on making it smarter.
        </p>
        <p>
          I thrive in fast-paced, iterative environments where collaboration and feedback fuel
          innovation. I'm constantly exploring new tools, frameworks, and ways to make testing
          smarter and more effective.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-sm text-gray-500 uppercase tracking-wider">Career Direction</h2>
        <div className="flex flex-wrap items-center gap-3">
          {career.map(({ stage, current }, i) => (
            <div key={stage} className="flex items-center gap-3">
              <span
                className={`px-4 py-2 rounded-lg text-sm font-medium border ${
                  current
                    ? "bg-blue-900/40 border-blue-700 text-blue-300"
                    : "bg-gray-900 border-gray-800 text-gray-400"
                }`}
              >
                {current && <span className="mr-1.5 text-blue-400">→</span>}
                {stage}
              </span>
              {i < career.length - 1 && (
                <span className="text-gray-700 text-lg">›</span>
              )}
            </div>
          ))}
        </div>
        <p className="text-gray-500 text-sm">
          Goal: use AI to 10x impact — not compete with it.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-sm text-gray-500 uppercase tracking-wider">Education</h2>
        <div className="space-y-3">
          {[
            {
              title: "A.S. Computer Science",
              institution: "Community College",
              note: null,
            },
            {
              title: "A.S. Business Administration",
              institution: "Community College",
              note: "Dual degree — technical + business perspective",
            },
            {
              title: "Coding Boot Camp",
              institution: "University of Denver",
              note: "240 contact hours · Center for Professional Development",
            },
            {
              title: "Junior Front-End Engineer Program",
              institution: "ReadyTrack · in association with Western Governors University",
              note: "React.js and Back-End Primers · March 2023",
            },
          ].map(({ title, institution, note }) => (
            <div key={title} className="flex gap-4 text-sm py-3 border-b border-gray-800 last:border-0">
              <div className="space-y-0.5">
                <p className="text-white font-medium">{title}</p>
                <p className="text-gray-400">{institution}</p>
                {note && <p className="text-gray-600 text-xs">{note}</p>}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-sm text-gray-500 uppercase tracking-wider">Tools & Stack</h2>
        <div className="space-y-3">
          {tools.map(({ category, items }) => (
            <div key={category} className="flex gap-4 text-sm">
              <span className="text-gray-500 w-36 shrink-0">{category}</span>
              <span className="text-gray-300">{items}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

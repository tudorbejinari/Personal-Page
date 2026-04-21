const tools = [
  { category: "Test Frameworks", items: "Playwright · Cypress · TestComplete · Karate" },
  { category: "Languages", items: "JavaScript · Node.js · SQL" },
  { category: "API Testing", items: "Postman · Swagger · RESTful APIs" },
  { category: "CI/CD", items: "Codefresh · Argo · GitHub Actions" },
  { category: "AI Tools", items: "Cursor · Claude CLI · Devin.ai · GitHub Copilot" },
  { category: "Dev Tools", items: "IntelliJ IDEA · Visual Studio · GitHub · GitKraken" },
]

const education = [
  {
    title: "A.S. Computer Science",
    institution: "Community College",
    note: null,
  },
  {
    title: "A.S. Business Administration",
    institution: "Community College",
    note: "Dual degree — technical and business perspective",
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
]

export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-14 sm:py-20 space-y-14 sm:space-y-16">

      <div className="space-y-3">
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">About</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">About Me</h1>
      </div>

      <div className="space-y-5 text-slate-300 leading-relaxed text-sm sm:text-base">
        <p>
          I'm a QA Automation Engineer and AI-augmented quality specialist. I build automated
          test systems that are fast, reliable, and designed to scale — then I use AI to make
          them faster to build and easier to maintain. Quality isn't a phase in my workflow.
          It's the foundation everything else is built on.
        </p>
        <p>
          I've worked across the full testing spectrum — functional, integration, regression,
          and exploratory — on everything from front-end Angular applications to complex
          back-end financial systems. I specialize in JavaScript and Node.js automation using
          Playwright, Cypress, and TestComplete, with deep API testing experience through
          Postman, Swagger, and the Karate Framework.
        </p>
        <p>
          On the infrastructure side, I integrate automation directly into CI/CD pipelines
          using Codefresh and Argo, working closely with DevOps teams to make quality gates
          part of every deployment — not an afterthought. I have solid grounding in SQL,
          RESTful APIs, and RDBMS concepts, and I'm equally comfortable testing front-end
          interfaces and back-end services.
        </p>
        <p>
          What sets my work apart is how I apply AI. I don't use it to click around an app
          and hope for the best — I use it to build better test infrastructure. I've built
          multi-agent systems where AI writes, debugs, and reviews Playwright tests, and
          tools where the Claude API performs visual regression analysis and suggests code
          fixes automatically. I use Cursor, Claude CLI, Devin.ai, and GitHub Copilot daily —
          not as shortcuts, but as force multipliers for engineering judgment.
        </p>
        <p>
          My goal is to operate at the intersection of QA, automation engineering, and AI —
          where 10x impact is achievable without sacrificing the determinism and reliability
          that make tests worth running.
        </p>
      </div>

      <section className="space-y-5">
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Education</p>
        <div className="divide-y divide-navy-700/60">
          {education.map(({ title, institution, note }) => (
            <div key={title} className="py-4 flex flex-col gap-0.5">
              <p className="text-sm font-semibold text-white">{title}</p>
              <p className="text-sm text-slate-400">{institution}</p>
              {note && <p className="text-xs text-slate-600 mt-0.5">{note}</p>}
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-5">
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Tools & Stack</p>
        <div className="divide-y divide-navy-700/60">
          {tools.map(({ category, items }) => (
            <div key={category} className="py-3.5 flex flex-col sm:flex-row sm:gap-6 gap-1 text-sm">
              <span className="text-slate-500 sm:w-32 sm:shrink-0 font-medium">{category}</span>
              <span className="text-slate-300">{items}</span>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}

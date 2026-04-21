import { projects } from "../data/projects"
import ProjectCard from "../components/ProjectCard"

export default function Experience() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-14 sm:py-20 space-y-10 sm:space-y-12">
      <div className="space-y-3 max-w-2xl">
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Work</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Experience & Projects</h1>
        <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
          Real problems. Real tools. Every project below is production work with measurable outcomes.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        {projects.map((p) => <ProjectCard key={p.id} project={p} />)}
      </div>
    </div>
  )
}

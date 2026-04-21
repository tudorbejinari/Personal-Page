import { projects } from "../data/projects"
import ProjectCard from "../components/ProjectCard"

export default function Experience() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-24 space-y-12">
      <div>
        <h1 className="text-4xl font-bold text-white mb-3">Experience & Projects</h1>
        <p className="text-gray-400 max-w-xl">
          Real work. Real results. Every card below represents a problem I solved with testing automation.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p) => <ProjectCard key={p.id} project={p} />)}
      </div>
    </div>
  )
}

import { projects } from "@/data/projects";
import { GlassCard } from "@/components/GlassCard";
import { SectionWrapper } from "@/components/SectionWrapper";

export function Projects() {
  return (
    <SectionWrapper id="projects" title="Projects">
      <ul className="grid gap-8 sm:grid-cols-2">
        {projects.map((project) => (
          <GlassCard key={project.id} as="li" className="flex flex-col p-7">
            <h3 className="mb-3 text-lg font-semibold text-white">
              {project.title}
            </h3>

            <p className="mb-5 flex-1 text-sm leading-relaxed text-slate-400">
              {project.description}
            </p>

            <ul className="mb-6 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <li key={`${project.id}-${tech}`} className="tag-glass">
                  {tech}
                </li>
              ))}
            </ul>

            {project.liveUrl && (
              <div className="flex flex-wrap gap-4">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-muted text-sm"
                >
                  Live
                </a>
              </div>
            )}
          </GlassCard>
        ))}
      </ul>
    </SectionWrapper>
  );
}
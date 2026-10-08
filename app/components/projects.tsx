import { ProjectCard } from 'app/components/cards';
import { getProjects } from 'app/projects/utils';

export function ProjectsList() {
  let allProjects = getProjects();

  return (
    <div className="space-y-4">
      {allProjects
        .sort((a, b) => {
          if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
            return -1;
          }
          return 1;
        })
        .map((project) => (
          <ProjectCard key={project.slug} project={project} href={`/projects/${project.slug}`} />
        ))}
    </div>
  );
}

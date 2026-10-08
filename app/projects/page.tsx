import { ProjectsList } from 'app/components/projects';

export const metadata = {
  title: 'Projects',
  description: 'Read about my projects and technical work.',
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My projects</h1>
      <p className="mb-8 text-neutral-700 dark:text-neutral-300 leading-relaxed">
        A collection of projects I've built, contributed to, and learned from, across work and my
        personal interests.
      </p>
      <ProjectsList />
    </section>
  );
}

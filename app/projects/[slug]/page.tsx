import { notFound } from 'next/navigation';
import { CustomMDX } from 'app/components/mdx';
import { formatDate, getProjects } from 'app/projects/utils';
import { baseUrl } from 'app/sitemap';
import Link from 'next/link';
import { getImageFullPath } from 'base-path';
import { ProjectCard } from 'app/components/cards';

// Import RoundedImage from the MDX components
function RoundedImage(props) {
  return <img alt={props.alt} className="rounded-lg" {...props} />;
}

export async function generateStaticParams() {
  let projects = getProjects();

  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata(props) {
  const params = await props.params;
  let project = getProjects().find((project) => project.slug === params.slug);
  if (!project) {
    return;
  }

  let { title, publishedAt: publishedTime, summary: description, image } = project.metadata;
  let ogImage = image ? image : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/projects/${project.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Project(props) {
  const params = await props.params;
  let project = getProjects().find((project) => project.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: project.metadata.title,
            datePublished: project.metadata.publishedAt,
            dateModified: project.metadata.publishedAt,
            description: project.metadata.summary,
            image: project.metadata.image
              ? getImageFullPath(project.metadata.image)
              : `/og?title=${encodeURIComponent(project.metadata.title)}`,
            url: `${baseUrl}/projects/${project.slug}`,
            author: {
              '@type': 'Person',
              name: 'My Portfolio',
            },
          }),
        }}
      />
      <ProjectCard
        project={project}
        showReadMore={false}
        backHref="/projects"
        href={`/projects/${project.slug}`}
      />
      <article className="prose max-w-none">
        <CustomMDX source={project.content} />
      </article>
    </section>
  );
}

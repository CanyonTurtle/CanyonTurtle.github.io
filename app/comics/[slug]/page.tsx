import { notFound } from 'next/navigation';
import { CustomMDX } from 'app/components/mdx';
import { formatDate, getComicPosts } from 'app/comics/utils';
import { baseUrl } from 'app/sitemap';
import { getImageFullPath } from 'base-path';
import { BlogCard } from 'app/components/cards';

export async function generateStaticParams() {
  let posts = getComicPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata(props) {
  const params = await props.params;
  let post = getComicPosts().find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  let { title, publishedAt: publishedTime, summary: description, image } = post.metadata;
  let ogImage = image ? image : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/blog/${post.slug}`,
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

export default async function Blog(props) {
  const params = await props.params;
  let post = getComicPosts().find((post) => post.slug === params.slug);

  if (!post) {
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
            '@type': 'BlogPosting',
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? getImageFullPath(post.metadata.image)
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/comics/${post.slug}`,
            author: {
              '@type': 'Person',
              name: 'My Portfolio',
            },
          }),
        }}
      />
      {post.metadata.image ? (
        <img
          src={getImageFullPath(post.metadata.image)}
          alt={post.metadata.title}
          className="w-full object-contain group-hover:scale-105 transition-transform duration-200 rounded-lg"
        />
      ) : (
        <div className="w-24 h-24 bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-700 flex items-center justify-center rounded-lg">
          <div className="text-neutral-400 dark:text-neutral-500 text-2xl font-bold">
            {post.metadata.title.charAt(0)}
          </div>
        </div>
      )}
      <article className="prose prose-neutral dark:prose-invert max-w-none">
        <CustomMDX source={post.content} />
      </article>
    </section>
  );
}

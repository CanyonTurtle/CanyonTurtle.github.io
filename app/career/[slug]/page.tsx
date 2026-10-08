import { notFound } from 'next/navigation'
import { CustomMDX } from 'app/components/mdx'
import { formatDate, getCareerPosts } from 'app/career/utils'
import { baseUrl } from 'app/sitemap'
import Link from 'next/link'
import { getImageFullPath } from 'base-path'
import { CareerCard } from 'app/components/cards'

// Import RoundedImage from the MDX components
function RoundedImage(props) {
  return <img alt={props.alt} className="rounded-lg" {...props} />
}

export async function generateStaticParams() {
  let posts = getCareerPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata(props) {
  const params = await props.params;
  let post = getCareerPosts().find((post) => post.slug === params.slug)
  if (!post) {
    return
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata
  let ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/career/${post.slug}`,
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
  }
}

export default async function CareerPost(props) {
  const params = await props.params;
  let post = getCareerPosts().find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
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
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? getImageFullPath(post.metadata.image)
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/career/${post.slug}`,
            author: {
              '@type': 'Person',
              name: 'My Portfolio',
            },
          }),
        }}
      />
      <CareerCard post={post} showReadMore={false} backHref="/career" href={`/career/${post.slug}`} />
      <article className="prose max-w-none">
        <CustomMDX source={post.content} />
      </article>
    </section>
  )
} 
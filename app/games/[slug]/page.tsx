import { notFound } from 'next/navigation';
import { CustomMDX } from 'app/components/mdx';
import { formatDate, getGames } from 'app/games/utils';
import { baseUrl } from 'app/sitemap';
import Link from 'next/link';
import { getImageFullPath } from 'base-path';
import { GameCard } from 'app/components/cards';

// Import RoundedImage from the MDX components
function RoundedImage(props) {
  return <img alt={props.alt} className="rounded-lg" {...props} />;
}

export async function generateStaticParams() {
  let games = getGames();

  return games.map((game) => ({
    slug: game.slug,
  }));
}

export async function generateMetadata(props) {
  const params = await props.params;
  let game = getGames().find((game) => game.slug === params.slug);
  if (!game) {
    return;
  }

  let { title, publishedAt: publishedTime, summary: description, image } = game.metadata;
  let ogImage = image ? image : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/games/${game.slug}`,
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

export default async function Game(props) {
  const params = await props.params;
  let game = getGames().find((game) => game.slug === params.slug);

  if (!game) {
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
            '@type': 'Review',
            itemReviewed: {
              '@type': 'Game',
              name: game.metadata.title,
            },
            headline: game.metadata.title,
            datePublished: game.metadata.publishedAt,
            dateModified: game.metadata.publishedAt,
            description: game.metadata.summary,
            image: game.metadata.image
              ? getImageFullPath(game.metadata.image)
              : `/og?title=${encodeURIComponent(game.metadata.title)}`,
            url: `${baseUrl}/games/${game.slug}`,
            author: {
              '@type': 'Person',
              name: 'My Portfolio',
            },
          }),
        }}
      />
      <GameCard game={game} showReadMore={false} backHref="/games" href={`/games/${game.slug}`} />
      <article className="prose max-w-none">
        <CustomMDX source={game.content} />
      </article>
    </section>
  );
}

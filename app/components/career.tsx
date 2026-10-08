import { CareerCard } from 'app/components/cards';
import { getCareerPosts } from 'app/career/utils';

export function CareerList() {
  let allCareerPosts = getCareerPosts();

  return (
    <div className="space-y-4">
      {allCareerPosts
        .sort((a, b) => {
          if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <CareerCard key={post.slug} post={post} href={`/career/${post.slug}`} />
        ))}
    </div>
  );
}

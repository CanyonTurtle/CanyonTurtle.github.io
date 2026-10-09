import { getComicPosts } from 'app/comics/utils';
import { BlogCard } from 'app/components/cards';

export const metadata = {
  title: 'Comics',
  description: 'Outlet for my sardonic remarks. Welcome.',
};

function Comics() {
  let allBlogs = getComicPosts();

  return (
    <div className="space-y-4">
      {allBlogs
        .sort((a, b) => {
          if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <BlogCard
            key={post.slug}
            post={post}
            href={`/comics/${post.slug}`}
          />
        ))}
    </div>
  );
}
export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Some comics for ya</h1>
      <Comics />
    </section>
  );
}

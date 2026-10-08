import { BlogPosts } from 'app/components/cards';

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My blog</h1>
      <p className="mb-8 text-neutral-700 dark:text-neutral-300 leading-relaxed">
        Jim: "Last year, Creed asked me how to setup a blog. Wanting to protect the world from being
        exposed to Creed's brain, I opened up a Word document on his computer and put an address at
        the top."
        <br />
        Creed: "www.creedthoughts.gov.www/creedthoughts"
        <br />- The Office
      </p>
      <BlogPosts />
    </section>
  );
}

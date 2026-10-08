import { CareerList } from 'app/components/career';
import Link from 'next/link';

export const metadata = {
  title: 'Career',
  description: 'My professional experience and career highlights.',
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My career</h1>
      <p className="mb-8 text-neutral-700 dark:text-neutral-300 leading-relaxed">
        For detailed resume information, see{' '}
        <Link
          href="https://www.linkedin.com/in/cannontuttle/#:~:text=Show%20all%20posts-,Experience,-Experience"
          className="hover:underline"
        >
          my LinkedIn profile
        </Link>
        . Here you'll find more details about my roles, responsibilities, and accomplishments.
      </p>
      <CareerList />
    </section>
  );
}

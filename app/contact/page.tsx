import Link from 'next/link';

export const metadata = {
  title: 'Contact',
  description: 'Get in touch with me.',
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Contact</h1>

      <div className="space-y-8">
        {/* Email */}
        <div>
          <h2 className="text-lg font-medium text-neutral-900 dark:text-neutral-100 mb-2">Email</h2>
          <a
            href="mailto:cannontuttlework@gmail.com"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            cannontuttlework@gmail.com
          </a>
        </div>

        {/* Social Profiles */}
        <div>
          <h2 className="text-lg font-medium text-neutral-900 dark:text-neutral-100 mb-4">
            Profiles
          </h2>
          <div className="space-y-2">
            <a
              href="https://github.com/canyonturtle"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-blue-600 dark:text-blue-400 hover:underline"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/cannontuttle"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-blue-600 dark:text-blue-400 hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Resume Information */}
        <div>
          <h2 className="text-lg font-medium text-neutral-900 dark:text-neutral-100 mb-2">
            Resume & references
          </h2>
          <p className="text-neutral-700 dark:text-neutral-300">
            Resume, CV, and references available upon request. Feel free to reach out to me at the
            email above or on LinkedIn.
          </p>
        </div>
      </div>
    </section>
  );
}

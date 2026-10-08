'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = {
  '/': {
    name: 'home',
  },
  '/career': {
    name: 'career',
  },
  '/games': {
    name: 'games',
  },
  '/projects': {
    name: 'projects',
  },
  '/blog': {
    name: 'blog',
  },
  '/contact': {
    name: 'contact',
  },
};

export function Navbar() {
  const pathname = usePathname();

  // Group nav items into chunks of 3
  const navEntries = Object.entries(navItems);
  const navGroups: Array<Array<[string, { name: string }]>> = [];
  for (let i = 0; i < navEntries.length; i += 3) {
    navGroups.push(navEntries.slice(i, i + 3));
  }

  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-wrap items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-wrap gap-2 pr-10">
            {navGroups.map((group, groupIndex) => (
              <div key={groupIndex} className="flex space-x-0">
                {group.map(([path, { name }]) => {
                  const isActive = pathname === path || (path !== '/' && pathname.startsWith(path));
                  return (
                    <Link
                      key={path}
                      href={path}
                      className={`transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1 ${
                        isActive
                          ? 'text-neutral-800 dark:text-neutral-200 border-b-2 border-neutral-800 dark:border-neutral-200'
                          : 'text-neutral-600 dark:text-neutral-400'
                      }`}
                    >
                      {name}
                    </Link>
                  );
                })}
              </div>
            ))}
          </div>
        </nav>
      </div>
    </aside>
  );
}

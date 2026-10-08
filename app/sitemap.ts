import { getBlogPosts } from 'app/blog/utils';
import { getGames } from 'app/games/utils';
import { getCareerPosts } from 'app/career/utils';
import { getProjects } from 'app/projects/utils';
import { baseUrl as baseUrlGlobal } from 'base-path';

export const baseUrl = baseUrlGlobal;

export const dynamic = 'force-static';

export default async function sitemap() {
  let blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  let games = getGames().map((game) => ({
    url: `${baseUrl}/games/${game.slug}`,
    lastModified: game.metadata.publishedAt,
  }));

  let careerPosts = getCareerPosts().map((post) => ({
    url: `${baseUrl}/career/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  let projects = getProjects().map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: project.metadata.publishedAt,
  }));

  let routes = ['', '/blog', '/games', '/career', '/projects'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes, ...blogs, ...games, ...careerPosts, ...projects];
}

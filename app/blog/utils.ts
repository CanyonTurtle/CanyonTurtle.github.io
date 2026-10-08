import path from 'path';
import { getMDXData, formatDate, BaseMetadata } from 'app/lib/mdx';

export type BlogMetadata = BaseMetadata & {
  externalLink?: string;
};

export function getBlogPosts() {
  return getMDXData<BlogMetadata>(path.join(process.cwd(), 'app', 'blog', 'posts'));
}

export { formatDate };

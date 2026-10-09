import path from 'path';
import { getMDXData, formatDate, BaseMetadata } from 'app/lib/mdx';

export type ComicMetadata = BaseMetadata & {};

export function getComicPosts() {
  return getMDXData<ComicMetadata>(path.join(process.cwd(), 'app', 'comics', 'posts'));
}

export { formatDate };

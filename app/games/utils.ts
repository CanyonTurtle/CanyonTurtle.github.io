import path from 'path';
import { getMDXData, formatDate, BaseMetadata } from 'app/lib/mdx';

export type GameMetadata = BaseMetadata & {
  genre?: string;
  platform?: string;
  externalLink?: string;
};

export function getGames() {
  return getMDXData<GameMetadata>(path.join(process.cwd(), 'app', 'games', 'posts'));
}

export { formatDate };

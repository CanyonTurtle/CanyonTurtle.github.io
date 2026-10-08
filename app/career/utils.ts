import path from 'path';
import { getMDXData, formatDate, BaseMetadata } from 'app/lib/mdx';

export type CareerMetadata = BaseMetadata & {
  company?: string;
  position?: string;
  location?: string;
  startDate?: string;
  endDate?: string;
  technologies?: string;
  externalLink?: string;
  source?: string;
};

export function getCareerPosts() {
  return getMDXData<CareerMetadata>(path.join(process.cwd(), 'app', 'career', 'posts'));
}

export { formatDate };

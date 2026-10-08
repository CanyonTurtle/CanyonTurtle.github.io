import path from 'path';
import { getMDXData, formatDate, BaseMetadata } from 'app/lib/mdx';

export type ProjectMetadata = BaseMetadata & {
  category?: string;
  technology?: string;
  externalLink?: string;
};

export function getProjects() {
  return getMDXData<ProjectMetadata>(path.join(process.cwd(), 'app', 'projects', 'posts'));
}

export { formatDate };

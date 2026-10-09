
const isProd = process.env.NODE_ENV === 'production';

export const baseUri = "https://canyonturtle.org";
export const basePath = isProd ? '' : '';
export const assetPrefix = undefined;

export const baseUrl = `${baseUri}${basePath}`;

/** https://www.reddit.com/r/nextjs/comments/1ixfypv/nextjs_on_github_pages/ */
export const getImageFullPath = (path: string) => {

  if (process.env.NODE_ENV === 'production') {
    return `${baseUri}${basePath}${path}`;
  }

  return path;
}
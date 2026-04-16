import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://destinationcafe.co.nz',
      lastModified: new Date(),
    },
    {
      url: 'https://destinationcafe.co.nz/menu',
      lastModified: new Date(),
    },
    {
      url: 'https://destinationcafe.co.nz/address',
      lastModified: new Date(),
    },
  ];
}

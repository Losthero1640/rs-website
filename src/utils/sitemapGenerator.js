const routes = [
  {
    path: '/',
    priority: 1.0,
    changefreq: 'daily'
  },
  {
    path: '/achievements',
    priority: 0.9,
    changefreq: 'weekly'
  },
  {
    path: '/projects',
    priority: 0.8,
    changefreq: 'weekly'
  },
  {
    path: '/team',
    priority: 0.7,
    changefreq: 'monthly'
  },
  {
    path: '/contact',
    priority: 0.6,
    changefreq: 'monthly'
  }
];

export const generateSitemap = (baseUrl) => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes.map(route => `
    <url>
      <loc>${baseUrl}${route.path}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>${route.changefreq}</changefreq>
      <priority>${route.priority}</priority>
    </url>
  `).join('')}
</urlset>`;

  return sitemap;
};

export const generateRobotsTxt = (baseUrl) => {
  return `User-agent: *
Allow: /
Sitemap: ${baseUrl}/sitemap.xml

# Disallow admin and private routes
Disallow: /admin/
Disallow: /private/
Disallow: /api/

# Crawl-delay
Crawl-delay: 10`;
}; 
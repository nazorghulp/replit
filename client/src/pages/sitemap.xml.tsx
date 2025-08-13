import { blogPosts } from "@/data/blog-posts";

// Generate sitemap XML for all blog posts
export function generateSitemap(): string {
  const baseUrl = "https://nazorghulp.nl";
  const currentDate = new Date().toISOString().split('T')[0];

  const staticPages = [
    { url: '', priority: '1.0', changefreq: 'daily' },
    { url: '/over-ons', priority: '0.8', changefreq: 'monthly' },
    { url: '/diensten', priority: '0.9', changefreq: 'monthly' },
    { url: '/kinderen', priority: '0.8', changefreq: 'monthly' },
    { url: '/blogs', priority: '0.9', changefreq: 'weekly' },
    { url: '/faq', priority: '0.7', changefreq: 'monthly' },
    { url: '/contact', priority: '0.8', changefreq: 'monthly' }
  ];

  const blogPages = blogPosts.map(blog => ({
    url: `/blogs/${blog.slug}`,
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: blog.publishedDate
  }));

  const allPages = [...staticPages, ...blogPages];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${(page as any).lastmod || currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;
}

// Export for use in build process
export default generateSitemap;
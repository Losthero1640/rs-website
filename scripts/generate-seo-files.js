import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { generateSitemap, generateRobotsTxt } from '../src/utils/sitemapGenerator.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseUrl = 'https://vssut-robotics-society.com';
const publicDir = path.join(__dirname, '../public');

// Generate sitemap.xml
const sitemap = generateSitemap(baseUrl);
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);

// Generate robots.txt
const robotsTxt = generateRobotsTxt(baseUrl);
fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsTxt);

console.log('SEO files generated successfully!'); 
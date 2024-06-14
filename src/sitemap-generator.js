const sitemap = require('sitemap');
const hostname = 'https://screentourseurope.com/';

const urls = [
  { url: '/', changefreq: 'daily', priority: 1 },
  { url: '/OurTeam', changefreq: 'daily', priority: 0.8 },
  { url: '/Tours', changefreq: 'daily', priority: 0.8 },
  { url: '/Contact', changefreq: 'daily', priority: 0.8 },
  { url: '/:id', changefreq: 'daily', priority: 0.8 }
];

const sitemapInstance = sitemap.createSitemap({
  hostname,
  urls,
});


const fs = require('fs');

// Write sitemap to public directory
fs.writeFileSync('./public/sitemap.xml', sitemapInstance.toString());
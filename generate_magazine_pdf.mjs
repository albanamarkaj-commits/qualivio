import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const htmlPath = path.join('C:\\Users\\user\\Desktop', 'pv_magazine_v4.html');
const outputPath = path.join('C:\\Users\\user\\Desktop\\QUALIVIO\\private', 'resources', 'Qualivio_PV_Made_Simple.pdf');

console.log('Launching browser...');
const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();

await page.setViewport({ width: 794, height: 1123 });
await page.goto(`file:///${htmlPath.replace(/\\/g, '/')}`, { waitUntil: 'networkidle0' });

// Wait for Google Fonts to load
await new Promise(r => setTimeout(r, 3000));

console.log('Generating PDF...');
await page.pdf({
  path: outputPath,
  width: '794px',
  height: '1123px',
  printBackground: true,
  margin: { top: 0, bottom: 0, left: 0, right: 0 },
});

await browser.close();
console.log('PDF saved to:', outputPath);

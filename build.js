const fs = require('fs');

const url = process.env.SUPABASE_URL;
const key = process.env.SUPABASE_ANON_KEY;

if (!url || !key) {
  console.error('ERROR: SUPABASE_URL and SUPABASE_ANON_KEY environment variables are required.');
  process.exit(1);
}

let html = fs.readFileSync('index.html', 'utf8');
html = html.replace('REPLACE_WITH_YOUR_SUPABASE_URL', url);
html = html.replace('REPLACE_WITH_YOUR_SUPABASE_ANON_KEY', key);

fs.mkdirSync('dist', { recursive: true });
fs.writeFileSync('dist/index.html', html);
console.log('Build complete → dist/index.html');

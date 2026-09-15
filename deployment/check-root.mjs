import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
const out=path.resolve('dist');
let pages=0;
function walk(dir){for(const e of fs.readdirSync(dir,{withFileTypes:true})){
 const file=path.join(dir,e.name);
 if(e.isDirectory()){walk(file);continue;}
 if(!e.name.endsWith('.html'))continue;
 const html=fs.readFileSync(file,'utf8');
 // Local navigation/resources must not accidentally point back to the old project site.
 assert(!/(?:href|src)=["']\/danyow\//i.test(html), 'LEGACY_BASE_PATH: '+file);
 const canonical=(html.match(/<link\b[^>]*\brel=["']canonical["'][^>]*>/i)||[])[0];
 if(canonical)assert(!/https:\/\/danyow\.cn\/danyow(?:\/|["'])/.test(canonical),'LEGACY_CANONICAL: '+file);
 pages++;
}}
walk(out);
const home=fs.readFileSync(path.join(out,'index.html'),'utf8');
assert(/<link\b[^>]*\brel=["']canonical["'][^>]*\bhref=["']https:\/\/danyow\.cn\/["']/i.test(home),'ROOT_CANONICAL_MISSING');
for(const p of ['ai-engine-watch/index.html','voice-agent-watch/index.html','note/index.html','docs/index.html','search/index.html','rss.xml'])assert(fs.existsSync(path.join(out,p)),'MISSING_ROOT_PAGE: '+p);
console.log(JSON.stringify({base:'/',rootCanonical:'https://danyow.cn/',htmlPages:pages,legacyBaseReferences:0}));

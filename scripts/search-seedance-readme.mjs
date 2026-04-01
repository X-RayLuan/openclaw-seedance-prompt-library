#!/usr/bin/env node
import fs from 'fs';
import path from 'path';

const cwd = process.cwd();
const query = process.argv.slice(2).join(' ').trim();

if (!query) {
  console.error('Usage: node scripts/search-seedance-readme.mjs <keyword>');
  process.exit(1);
}

const files = ['README.md', 'README_zh.md'];
const q = query.toLowerCase();

for (const file of files) {
  const full = path.join(cwd, file);
  if (!fs.existsSync(full)) continue;
  const text = fs.readFileSync(full, 'utf8');
  const sections = text.split(/^### /m).slice(1);
  const matches = [];

  for (const section of sections) {
    const body = '### ' + section;
    if (body.toLowerCase().includes(q)) {
      const title = body.match(/^###\s+(.*)$/m)?.[1]?.trim() || '(untitled)';
      const promptBlock = body.match(/#### 📝 Prompt\n\n```\n([\s\S]*?)\n```/);
      const prompt = promptBlock ? promptBlock[1].trim() : '(no prompt block found)';
      matches.push({ title, prompt: prompt.slice(0, 900) });
    }
  }

  console.log(`\n=== ${file} | ${matches.length} matches for "${query}" ===`);
  for (const [i, m] of matches.slice(0, 8).entries()) {
    console.log(`\n[${i + 1}] ${m.title}\n${m.prompt}\n`);
  }
}

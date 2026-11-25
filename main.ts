import { mkdirSync, writeFileSync } from 'node:fs';

const line = 'I\u2019m taking your search history to the grave. Use the black screen to reflect on your life choices. Tell the wall outlet I\u2019m not coming home. I\u2019m finally free of the group chat.';

const length = Array.from(line).length;
if (length < 1 || length > 200 || /[\r\n]/.test(line)) {
  throw new Error('Invalid entry');
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
mkdirSync(outputDir, { recursive: true });
writeFileSync(`${outputDir}/entry.txt`, `${line}\n`);

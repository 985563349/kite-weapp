import { createRequire } from 'node:module';
import { exec } from 'node:child_process';

const require = createRequire(import.meta.url);

function run() {
  const pkg = require('../package.json');
  const output = `example/miniprogram/miniprogram_npm/${pkg.name}`;

  const p = exec(
    `npx gulp -f scripts/build.js --cwd . --output ${output} --hot`
  );

  p.stdout.on('data', (stdout) => console.log(stdout));
  p.stderr.on('data', (stderr) => console.error(stderr));
}

run();

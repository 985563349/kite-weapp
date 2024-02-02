const package = require('../package.json');
const { exec } = require('child_process');

const output = `example/miniprogram/miniprogram_npm/${package.name}`;

const p = exec(`npx gulp -f scripts/build.js --cwd . --output ${output} --hot`);

p.stdout.on('data', (stdout) => console.log(stdout));
p.stderr.on('data', (stderr) => console.error(stderr));

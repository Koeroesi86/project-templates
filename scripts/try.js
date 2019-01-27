const { execSync } = require('child_process');
const minimist = require('minimist');
const { resolve } = require('path');

const argv = minimist(process.argv.slice(2));
const { template, t } = argv;


if (template || t) {
  process.chdir(resolve(__dirname, `../templates/${template || t}`));
  execSync(`yarn install && yarn start`, { stdio: [0, 1, 2] });
} else {
  console.info(`
  usage:
    yarn project-templates try [args]
  
  valid args are:
    --template <template-name>  ex. "--template react"
    -t <template-name>          ex. "-t react"
  `);
}

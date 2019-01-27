const { execSync } = require('child_process');
const minimist = require('minimist');
const { resolve } = require('path');
const { copySync } = require('fs-extra');

const argv = minimist(process.argv.slice(2));
const { template, t } = argv;

const templateName = template || t;
const templateDir = resolve(__dirname, `../templates/${templateName}`);

if (templateName && !/[\/\\.].+/.test(templateDir)) {
  copySync(
    templateDir,
    process.cwd(),
    { dereference: true, filter: src => !/node_modules/.test(src) }
  );

  console.log('Copied source files, now installing modules...');
  execSync(`yarn install`, { stdio: [0, 1, 2] });
  console.log('Setup complete.');
} else {
  console.info(`
  usage:
    yarn project-templates init [args]
  
  valid args are:
    --template <template-name>  ex. "--template react"
    -t <template-name>          ex. "-t react"
  `);
}

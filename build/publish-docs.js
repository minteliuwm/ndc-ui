#!/usr/bin/env node
const execSync = require('child_process').execSync;
const VERSION = require('../package.json').version;
const GIT_COMMIT = execSync('git rev-parse --short HEAD').toString().replace(/\n/, '');

const ghpages = require('gh-pages');
execSync('npm run build:docs');
ghpages.publish('dist', {
  user: {
    name: 'minteliuwm',
    email: 'minteliu.l@gmail.com'
  },
  repo: 'https://github.com/minteliuwm/ndc-ui.git',
  message: `[deploy] ${GIT_COMMIT} - [release] ${VERSION}`
});

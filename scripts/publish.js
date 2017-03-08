require('shelljs/global')

var argv = require('minimist')(process.argv.slice(2));

// Validate SCSS
exec('gulp lint:sass', exitCode => {
  if (exitCode > 0) exit(1)

  // Create npm credentials
  const npmToken = argv.NPM_TOKEN
  const npmrc = `//registry.npmjs.org/:_authToken=${npmToken}`
  echo(npmrc).to('.npmrc')

  // publish
  exec('npm publish source/styles')

  // delete .npmrc
  rm('.npmrc')
})

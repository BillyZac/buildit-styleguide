require('shelljs/global')

var argv = require('minimist')(process.argv.slice(2));

const npmToken = argv.NPM_TOKEN

// Create npm credentials
const npmrc = `//registry.npmjs.org/:_authToken=${npmToken}`
echo(npmrc).to('.npmrc')

// publish
exec('npm publish source/styles')

// delete .npmrc
rm('.npmrc')

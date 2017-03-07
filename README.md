# Buildit: Living Style Guide

A demonstration of [a living style guide](http://buildit-styleguide.surge.sh/) using Pattern Lab.

## Helpful Commands

These are some helpful commands you can use on the command line for working with Pattern Lab.

> Reminder: These commands assume a global installation of gulp 4.X, instead of a local installation. Depending on your preference, you may need to [upgrade your global version of gulp](https://github.com/pattern-lab/edition-node-gulp/wiki/Updating-to-Gulp-4) or [run with local gulp](https://github.com/pattern-lab/patternlab-node/wiki/Running-with-Local-Gulp-Instead-of-Global-Gulp).

### List all of the available commands

To list all available commands:
```
gulp patternlab:help
```

### Generate Pattern Lab

To generate the front-end for Pattern Lab:

```
gulp patternlab:build
```

or its alias:
```
npm run build
```

### Watch for changes and re-generate Pattern Lab

To watch for changes, re-generate the front-end, and server it via a BrowserSync server:

```
gulp patternlab:serve
```

BrowserSync should open [http://localhost:3000](http://localhost:3000) in your browser.

## Deploy and Continuous Integration
The style guide is deployed at http://buildit-styleguide.surge.sh/

All pushes to the master branch of the remote repo will trigger a build and deploy process. This process is run by Travis CI and defined by `.travis.yml`.

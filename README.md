# Buildit: Living Style Guide

A demonstration of [a living style guide](http://buildit-styleguide.surge.sh/) using Pattern Lab.

### Getting started 

First, install dependencies:

```
npm install
```

To watch for changes, re-generate the front-end, and server it via a BrowserSync server:

```
gulp patternlab:serve
```

BrowserSync should open [http://localhost:3000](http://localhost:3000) in your browser.

## Deploy and Continuous Integration
The style guide is deployed at http://buildit-styleguide.surge.sh/

All pushes to the master branch of the remote repo will trigger a build and deploy process. This process is run by Travis CI and defined by `.travis.yml`.

### Publishing the style package
The styles in `source/styles` are published to npm. When you are ready to publish a new version, do this:

Bump the version of the styles package:
```
cd source/styles
npm version minor -m "Make the button purple"
```

This is published on each push to the remote repo:
```
git cam "New version of styles"
git push
```

Travis will catch the new commit and attempt to publish to npm. See `.travis.yml` and `scripts/publish.js`.

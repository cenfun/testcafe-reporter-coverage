# testcafe-reporter-coverage
[![](https://img.shields.io/npm/v/testcafe-reporter-coverage)](https://www.npmjs.com/package/testcafe-reporter-coverage)
[![](https://badgen.net/npm/dw/testcafe-reporter-coverage)](https://www.npmjs.com/package/testcafe-reporter-coverage)
![](https://img.shields.io/github/license/cenfun/testcafe-reporter-coverage)


> A [TestCafe](https://github.com/DevExpress/testcafe) custom reporter for [monocart coverage reports](https://github.com/cenfun/monocart-coverage-reports)

## Install
```sh
npm i testcafe-reporter-coverage
```

## Usage
```sh
testcafe chrome:headless:cdpPort=9223 tests/*.test.js -r spec,coverage
```
### Note
- `cdpPort` defaults to `9223`, see also coverage config [mcr.config.js](mcr.config.js)
- The coverage data uses the native v8 coverage data, so it requires chromium-based browser like chrome, edge or chromium.
- Check [monocart coverage reports](https://github.com/cenfun/monocart-coverage-reports) for more coverage options.

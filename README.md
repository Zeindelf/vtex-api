# VTEX API

An isomorphic collection of VTEX APIs methods

[![NPM][npm-badge]][npm]
[![Build Status][build-badge]][build]
[![Code Coverage][coverage-badge]][coverage]
[![Bundle Size][bundle-size-badge]][bundle-size]
[![MIT License][license-badge]][license]

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [API](#api)

## Install

```bash
# Yarn
yarn add vtex-api

# NPM
npm install --save vtex-api
```

## Usage

### Imports

You can import each method individually

```js
import searchDocument from 'vtex-api/lib/searchDocument';
```

or use ES6 named import (tree shaking recommended)

```js
import { searchDocument } from 'vtex-api';
```

### Node

For node usage, you will need import [isomorphic-fetch](https://www.npmjs.com/package/isomorphic-fetch) (and [isomorphic-form-data](https://www.npmjs.com/package/isomorphic-form-data) if you will use `uploadFile()` method)

For authentication, each method exposes keys for this purpose:

```js
someMethod({
  auth: { appKey: '123', appToken: 'abc' }, // Your private keys (use it ONLY on backend)
  accountName: 'storename', // Account name (will build full URL request)
})
```

## API

### Masterdata

Name | Description | Docs
:--- | :--- | :---
searchDocument | Query a collection of documents | [📝](./docs/searchDocument.md)

## Built With

* [TypeScript](https://www.typescriptlang.org/) - JavaScript that scales
* [Jest](https://jestjs.io/) - Delightful JavaScript Testing
* [`ts-jest`](https://kulshekhar.github.io/ts-jest) - Jest processor for TypeScript

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

<!-- GIT Variables -->
[node]: https://nodejs.org

[npm]: https://www.npmjs.com/package/vtex-api
[npm-badge]: https://img.shields.io/npm/v/vtex-api.svg

[build]: https://travis-ci.org/zeindelf/vtex-api
[build-badge]: https://img.shields.io/travis/zeindelf/vtex-api.svg?style=flat-square

[coverage]: https://codecov.io/github/schettino/vtex-api
[coverage-badge]: https://img.shields.io/codecov/c/github/zeindelf/vtex-api.svg?style=flat-square

[bundle-size]: https://bundlephobia.com/result?p=vtex-api@canary
[bundle-size-badge]: https://badgen.net/bundlephobia/minzip/vtex-api@canary

[license]: https://github.com/zeindelf/vtex-api/blob/master/LICENSE
[license-badge]: https://img.shields.io/npm/l/vtex-api.svg?style=flat-square
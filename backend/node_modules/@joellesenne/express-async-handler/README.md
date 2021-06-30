<h1 align="center">Welcome to @joellesenne/express-async-handler 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/@joellesenne/express-async-handler" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/@joellesenne/express-async-handler.svg">
  </a>
  <img src="https://img.shields.io/badge/npm-%3E%3D7.13.0-blue.svg" />
  <img src="https://img.shields.io/badge/node-%3E%3D16.0.0-blue.svg" />
  <a href="https://github.com/joellesenne/express-async-handler#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/joellesenne/express-async-handler/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/joellesenne/express-async-handler/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/joellesenne/@joellesenne/express-async-handler" />
  </a>
  <a href="https://twitter.com/joellesenne" target="_blank">
    <img alt="Twitter: joellesenne" src="https://img.shields.io/twitter/follow/joellesenne.svg?style=social" />
  </a>
</p>

> Simple Middleware to manage exceptions within express routes in asynchronous

### 🏠 [Homepage](https://github.com/joellesenne/express-async-handler#readme)

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Prerequisites](#prerequisites)
- [Install](#install)
- [Usage](#usage)
- [Run tests](#run-tests)
- [Author](#author)
- [🤝 Contributing](#-contributing)
- [Show your support](#show-your-support)
- [📝 License](#-license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Prerequisites

- npm >=7.13.0
- node >=16.0.0

## Install

```sh
npm install --save @joellesenne/express-async-handler

# OR
yarn add @joellesenne/express-async-handler
```

## Usage

```sh
const asyncHandler = require('@joellesenne/express-async-handler')

express.get('/', asyncHandler(async (req, res, next) => {
  const bar = await foo.findAll();
  res.send(bar)
}))
```

## Run tests

```sh
mocha test/index.test.js
```

## Author

👤 **Joël Lesenne**

* Website: https://joellesenne.dev
* Twitter: [@joellesenne](https://twitter.com/joellesenne)
* Github: [@joellesenne](https://github.com/joellesenne)
* LinkedIn: [@joellesenne](https://linkedin.com/in/joellesenne)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/joellesenne/express-async-handler/issues). You can also take a look at the [contributing guide](https://github.com/joellesenne/express-async-handler/blob/master/CONTRIBUTING.md).

## Show your support

Give a ⭐️ if this project helped you!

<a href="https://www.patreon.com/joellesenne">
  <img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" width="160">
</a>

## 📝 License

Copyright © 2021 [Joël Lesenne](https://github.com/joellesenne).<br />
This project is [MIT](https://github.com/joellesenne/express-async-handler/blob/master/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_

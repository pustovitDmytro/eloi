![Logo](.docs/logo_256.png "Eloi time machine")

# eloi
A lightweight JavaScript library for shifting the global `Date` object forward or backward in time during runtime. Perfect for testing systems against future or past dates without manually manipulating your system clock.

[![Version][badge-vers]][npm]
[![Bundle size][npm-size-badge]][npm-size-url]
[![Downloads][npm-downloads-badge]][npm]

[![CodeFactor][codefactor-badge]][codefactor-url]
[![SonarCloud][sonarcloud-badge]][sonarcloud-url]
[![Codacy][codacy-badge]][codacy-url]
[![Scrutinizer][scrutinizer-badge]][scrutinizer-url]

[![Dependencies][badge-deps]][npm]
[![Security][snyk-badge]][snyk-url]
[![Build Status][tests-badge]][tests-url]
[![Coverage Status][badge-coverage]][url-coverage]

[![Commit activity][commit-activity-badge]][github]
[![FOSSA][fossa-badge]][fossa-url]
[![License][badge-lic]][github]
[![Made in Ukraine][ukr-badge]][ukr-link]


## Table of Contents
- [eloi](#eloi)
  - [Table of Contents](#table-of-contents)
  - [🇺🇦 Help Ukraine](#-help-ukraine)
  - [Motivation](#motivation)
  - [Requirements](#requirements)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Configuration](#configuration)
  - [Contribute](#contribute)


## 🇺🇦 Help Ukraine

I am based in Kyiv, Ukraine, and during these challenging times, it is more important than ever to support Ukraine in its fight for freedom and sovereignty. The war has had a profound impact on millions of lives, and every contribution can make a difference.

We fight for democratic values, freedom, for our future! Once again Ukrainians have to stand against evil, terror, against genocide. The outcome of this war will determine what path human history is taking from now on.

💛💙  If you find this library useful, consider helping Ukrainians by donating to reputable organizations providing aid or supporting the efforts of the Ukrainian people in [any way you can][ukr-link]. Together, we can make a meaningful impact.


## Motivation
**Eloi** was created to provide a convenient and reliable way to test how applications behave with different dates and times without requiring changes to the system clock. 

This can be particularly useful for simulating future expiration dates, verifying date-based logic, or ensuring long-running systems handle transitions correctly. 

By offering a runtime solution, Eloi eliminates the risks and complexities associated with altering system-wide settings, making it an invaluable tool for developers working on time-sensitive features.


## Requirements
[![Platform Status][node-ver-test-badge]][node-ver-test-url]

To use library you need to have [node](https://nodejs.org) and [npm](https://www.npmjs.com) installed in your machine:

* node `>=10`
* npm `>=6`

Package is [continuously tested][node-ver-test-url] on darwin, linux and win32 platforms. All active and maintenance [LTS](https://nodejs.org/en/about/releases/) node releases are supported.

## Installation

To install the library run the following command

```bash
  npm i --save eloi
```

## Usage

Basic Example: 

```javascript
import eloi from 'eloi';

// Shift time 1 year into the future
const year = 365 * 24 * 60 * 60 * 1000;

eloi.shift(year); // 1 year in milliseconds

console.log(new Date()); // Prints future date
console.log(Date.now());

eloi.reset(); // Reset to original Date
console.log(new Date()); // Prints the current date
```

Advanced Example: 

```javascript
import { Eloi } from 'eloi';

// Create a local Eloi instance
const eloi = new Eloi(Date, { global: false });
const CustomDate = eloi.shift(-24 * 60 * 60 * 1000); // 1 day back in time

console.log(new CustomDate()); // Prints Yesterday
console.log(new Date());       // Prints Today

// Reset not required since global Date is untouched
```

### Configuration

`constructor(OriginalDate = Date, options = {})`
    
  - `OriginalDate` (optional): The Date implementation to use as the base.
  - `options.global` (optional): Whether to replace the global Date. Default is true.

`shift(offsetMs)` 
  Shifts time by the specified offset (in milliseconds). Returns a modified Date class.
  * `offsetMs`: The number of milliseconds to shift. Positive for future, negative for past.

`reset()`
  Resets the global Date object to its original implementation.

## Contribute

Make the changes to the code and tests. Then commit to your branch. Be sure to follow the commit message conventions. Read [Contributing Guidelines](.github/CONTRIBUTING.md) for details.

[npm]: https://www.npmjs.com/package/eloi
[github]: https://github.com/pustovitDmytro/eloi
[coveralls]: https://coveralls.io/github/pustovitDmytro/eloi?branch=master
[badge-deps]: https://img.shields.io/librariesio/release/npm/eloi.svg
[badge-vers]: https://img.shields.io/npm/v/eloi.svg
[badge-lic]: https://img.shields.io/github/license/pustovitDmytro/eloi.svg
[badge-coverage]: https://coveralls.io/repos/github/pustovitDmytro/eloi/badge.svg?branch=master
[url-coverage]: https://coveralls.io/github/pustovitDmytro/eloi?branch=master

[snyk-badge]: https://snyk-widget.herokuapp.com/badge/npm/eloi/badge.svg
[snyk-url]: https://snyk.io/advisor/npm-package/eloi

[tests-badge]: https://img.shields.io/circleci/build/github/pustovitDmytro/eloi
[tests-url]: https://app.circleci.com/pipelines/github/pustovitDmytro/eloi

[codefactor-badge]: https://www.codefactor.io/repository/github/pustovitdmytro/eloi/badge
[codefactor-url]: https://www.codefactor.io/repository/github/pustovitdmytro/eloi

[commit-activity-badge]: https://img.shields.io/github/commit-activity/m/pustovitDmytro/eloi

[scrutinizer-badge]: https://scrutinizer-ci.com/g/pustovitDmytro/eloi/badges/quality-score.png?b=master
[scrutinizer-url]: https://scrutinizer-ci.com/g/pustovitDmytro/eloi/?branch=master

[codacy-badge]: https://app.codacy.com/project/badge/Grade/8f8ed4352d9048259d97cc0d1a838f51
[codacy-url]: https://www.codacy.com/gh/pustovitDmytro/eloi/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=pustovitDmytro/eloi&amp;utm_campaign=Badge_Grade

[sonarcloud-badge]: https://sonarcloud.io/api/project_badges/measure?project=pustovitDmytro_eloi&metric=alert_status
[sonarcloud-url]: https://sonarcloud.io/dashboard?id=pustovitDmytro_eloi

[npm-downloads-badge]: https://img.shields.io/npm/dw/eloi
[npm-size-badge]: https://img.shields.io/bundlephobia/min/eloi
[npm-size-url]: https://bundlephobia.com/result?p=eloi

[node-ver-test-badge]: https://github.com/pustovitDmytro/eloi/actions/workflows/npt.yml/badge.svg?branch=master
[node-ver-test-url]: https://github.com/pustovitDmytro/eloi/actions?query=workflow%3A%22Node.js+versions%22

[fossa-badge]: https://app.fossa.com/api/projects/custom%2B24828%2Feloi.svg?type=shield
[fossa-url]: https://app.fossa.com/projects/custom%2B24828%2Feloi?ref=badge_shield

[ukr-badge]: https://img.shields.io/badge/made_in-ukraine-ffd700.svg?labelColor=0057b7
[ukr-link]: https://war.ukraine.ua
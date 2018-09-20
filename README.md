# browl-npm

[![Build Status](https://travis-ci.org/killmenot/browl-npm.svg?branch=master)](https://travis-ci.org/killmenot/browl-npm) [![Coverage Status](https://coveralls.io/repos/github/killmenot/browl-plugin-yaml/badge.svg?branch=master)](https://coveralls.io/github/killmenot/browl-npm?branch=master) [![Dependency Status](https://david-dm.org/killmenot/browl-npm.svg)](hhttps://david-dm.org/killmenot/browl-npm) [![npm version](https://img.shields.io/npm/v/browl-npm.svg)](https://www.npmjs.com/package/browl-npm)

Browl npm strategy allows browl to deploy an instance that is managed by npm in package.json

## Usage

npm package.json must have defined the following scripts:
 - **install** - install dependencies
 - **start** - start the application
 - **stop** - stop the application
 - **restart** - restart the application

## LICENSE

    The MIT License (MIT)

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.

# Welcome

A simple and minimal personal website.

**Quick Links:**

* [Prerequisites](#prerequisites)
* [Getting Started](#getting-started)
* [License](#license)

## Prerequisites

The following software must exist on the target machine to install and run this site:

* [Git](http://git-scm.com/) -- [install instructions](http://book.git-scm.com/2_installing_git.html)
* [Node.js v0.10.x + NPM](http://nodejs.org/) -- [install instructions](http://nodejs.org/)

## Getting Started

Assuming the above prerequisites have been met, the following steps may be used to set up a local
development environment:

**Clone the repository**:

    $ cd ~/<projects-directory>
    $ git clone git@github.com:bobwilliams/bobwilliams.me.git

**Install node module dependencies**:

    $ cd bobwilliams.me/
    $ npm install

**Start the App server**:

    $ node app.js

***Optional***:

[Nodemon](https://github.com/remy/nodemon) monitors changes in the source and automatically restarts node.

    $ npm install -g nodemon

Once installed, simply start the server with `nodemon` instead of `node`:

    $ nodemon app.js

## License 

The MIT License (MIT)

Copyright (c) 2014 Bob Williams

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
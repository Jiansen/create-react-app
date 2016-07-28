/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

var path = require('path');

function resolve(relativePath) {
  return path.resolve(__dirname, relativePath);
}

module.exports = {
  appBuild: resolve('../build'),
  appHtml: resolve('../index.html'),
  appFavicon: resolve('../favicon.ico'),
  appPackageJson: resolve('../package.json'),
  appSrc: resolve('../src'),
  appNodeModules: resolve('../node_modules'),
  ownNodeModules: resolve('../node_modules')
};

// Dead code on eject: start
// before eject: we're in ./node_modules/react-scripts/config/
module.exports = {
  appBuild: resolve('../../../build'),
  appHtml: resolve('../../../index.html'),
  appFavicon: resolve('../../../favicon.ico'),
  appPackageJson: resolve('../../../package.json'),
  appSrc: resolve('../../../src'),
  appNodeModules: resolve('../..'),
  // this is empty with npm3 but node resolution searches higher anyway:
  ownNodeModules: resolve('../node_modules')
};
// Dead code on eject: end

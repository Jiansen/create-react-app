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

// create-react-app development: we're in ./config/
module.exports = {
  appBuild: resolve('../build'),
  appHtml: resolve('../template/index.html'),
  appFavicon: resolve('../template/favicon.ico'),
  appPackageJson: resolve('../package.json'),
  appSrc: resolve('../template/src'),
  appNodeModules: resolve('../node_modules'),
  ownNodeModules: resolve('../node_modules')
};

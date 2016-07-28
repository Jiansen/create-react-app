/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

module.exports = function(name, stage) {
  if(stage){
    return require('./'+name+'.'+stage);
  }

  var isInCreateReactAppSource = (
    process.argv.some(arg => arg.indexOf('--debug-template') > -1)
  );
  if (isInCreateReactAppSource) {
    return require('./'+name+'.dev');
  }else {
    return require('./'+name+'.prod');
  }
}

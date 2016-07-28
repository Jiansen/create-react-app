#!/bin/bash
# Create a local package some as the released one,
#   which only contains prod-only configurations

# TODO: in the future, we can create stage specific package for e2e test
#   i.e. prod  dev  test  alpha  etc.
mv ./config/index.prod.js ./config/index.js

cp $PWD/config/index.prod.js $PWD/config/index.js 2>/dev/null
packname=`npm pack`

# Discard changes to config
git checkout -- .

echo $packname

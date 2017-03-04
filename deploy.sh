#!/bin/bash

## basic define:
GH_REPO="github.com/afeiship/next-decimal.git"
FULL_REPO="https://$GH_TOKEN@$GH_REPO"

echo "$FULL_REPO";


## commit to github:
cd ~/build/afeiship/next-decimal
ls -alh
npm run build
git config --global user.email "travis@travis-ci.org"
git config --global user.name "Travis CI"
git add --all
git commit --message "Travis build: $TRAVIS_BUILD_NUMBER"
git remote add master $FULL_REPO > /dev/null 2>&1
git push --quiet --set-upstream master master


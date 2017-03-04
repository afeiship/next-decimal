#!/bin/bash

## basic define:
GH_REPO="github.com/afeiship/next-decimal.git"
FULL_REPO="https://$GH_TOKEN@$GH_REPO"

echo "$FULL_REPO";


## commit to github:
cd ~/build/afeiship/next-decimal
ls -alh
npm run build
git config user.name "afeiship"
git config user.email "1290657123@qq.com"
git add --all
git commit -m "Deployed to github by travis-ci"
git push --force "$FULL_REPO" master:master

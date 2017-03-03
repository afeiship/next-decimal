#!/bin/bash

## basic define:
GH_REPO="@github.com/afeiship/next-decimal.git"
FULL_REPO="https://$GH_TOKEN$GH_REPO"

echo "$FULL_REPO";


## commit to github:
npm run build
git config user.name "afeiship-ci"
git config user.email "1290657123@qq.com"
git add .
git commit -m "deployed to github by travis-ci"
git push --force --quiet $FULL_REPO master:master

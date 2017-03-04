#!/bin/bash

## basic define:
GH_REPO="github.com/afeiship/next-decimal.git"
FULL_REPO="https://$REPO_TOKEN@$GH_REPO"

echo "$FULL_REPO";


## commit to github:
git init
git config --global push.default simple
git config user.name "feizheng-ci"
git config user.email "1290657123@qq.com"
git status
ls -alh
git add dist
git commit -m "deployed to github by travis-ci"
git push --force $FULL_REPO master:master

echo 'DONEONEONOENEOE!'

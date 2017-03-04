#!/bin/bash

## basic define:
REPO_TOKEN="4a6932953b7a065834aff8cb82a66dcab7d6ee8f"
GH_REPO="github.com/afeiship/next-decimal.git"
FULL_REPO="https://$REPO_TOKEN@$GH_REPO"

echo "$FULL_REPO";


## commit to github:
git config --global push.default simple
git config user.name "feizheng-ci"
git config user.email "1290657123@qq.com"
git status
ls -alh
git add .
git commit -m "deployed to github by travis-ci"

echo "Start to push ...."
git push --force $FULL_REPO master:master
echo "End to push ci..."

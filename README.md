# next-decimal
> An arbitrary-precision decimal lib based on next toolkit.

![mahua](https://api.travis-ci.org/afeiship/next-decimal.svg?branch=master)

## installation
```shell
npm install -S afeiship/next-decimal --registry=https://registry.npm.taobao.org
```

## usage
```javascript
import NxDecimal from 'next-decimal';

// usage:
NxDecimal.add(0.1,0.2,0.3);
NxDecimal.sub(0.3,0.1);
NxDecimal.mul(0.3,0.1,0.2);
NxDecimal.div(0.3,0.1);
```

## bug
```js
// BUG:
20.01*100 = 2001.0000000000002
0.1 * 10  = 1

// so:
20.01 * 1000 
```

## resources
+ http://mochajs.org/
+ http://www.cnblogs.com/slowsoul/archive/2013/06/12/3132821.html
+ http://ourjs.com/detail/54695381bc3f9b154e000046
+ https://github.com/blog/1270-easier-builds-and-deployments-using-git-over-https-and-oauth
+ http://blog.csdn.net/woblog/article/details/51319364
+ https://gist.github.com/domenic/ec8b0fc8ab45f39403dd
+ http://blog.tgrrtt.com/exploring-the-travisci-configuration-file
+ https://rmflight.github.io/posts/2014/11/travis_ci_gh_pages.html
+ https://medium.com/@nthgergo/publishing-gh-pages-with-travis-ci-53a8270e87db#.8oafn2vhv
+ https://segmentfault.com/a/1190000004714256
+ http://lotabout.me/2016/Hexo-Auto-Deploy-to-Github/

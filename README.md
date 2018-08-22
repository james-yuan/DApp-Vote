### install plugins
truffle unbox webpack

npm install -g truffle 
truffle unbox webpack

### start ganache-cli
ganache-cli

将geth连接到ganache-cli
新开窗口，geth attach http://localhost:8545


### run
truffle compile 
当出现找不到对象，将./truffle.js 改为 truffle-config.js

truffle migrate 
运行报错：Error: No network specified. Cannot determine current network

npm run dev


### 编码规范--Eslint
https://www.cnblogs.com/yoable/p/5788198.html
https://github.com/standard/standard/blob/master/docs/RULES-zhcn.md


### 附注
webpack输出目录没有生成
为了路由方便将index放到项目根路径下


    // "dev": "webpack-dev-server"
    "lint": "eslint ./",
//    "prepare": "truffle compile && npm test && npm run lint && webpack-cli --config ./webpack.config.js",
//    "build": "npm install",

### truffle与webpack



### 链式部署

var a, b;
deployer.then(function() {
  // Create a new version of A
  return A.new();
}).then(function(instance) {
  a = instance;
  // Get the deployed instance of B
  return B.deployed();
}).then(function(instance) {
  b = instance;
  // Set the new instance of A's address on B via B's setA() function.
  return b.setA(a.address);
});


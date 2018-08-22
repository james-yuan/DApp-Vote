// artifacts对象为truffle框架提供artifacts.require()方法，与Node中的require()方法类似编译合约代码。
// 自动调用solc编译器来编译合约代码并返回编译结果对象
var ConvertLib = artifacts.require('./ConvertLib.sol')
var MetaCoin = artifacts.require('./MetaCoin.sol')

module.exports = function (deployer) {
  deployer.deploy(ConvertLib)
  // 将已部署的strings合约类库连接到Hello合约
  deployer.link(ConvertLib, MetaCoin)
  deployer.deploy(MetaCoin)
}

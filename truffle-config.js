// Allows us to use ES6 in our migrations and tests.
// 使用truffle init生成，networks子节点为ganache，导致
// Error: No network specified. Cannot determine current network.
require('babel-register')

module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*' // Match any network id
    }
  }
}

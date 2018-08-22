import Vue from 'vue'
//import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import { default as Web3 } from 'web3'
import { default as contract } from 'truffle-contract'

import voteArtifact from '../../build/contracts/DAppVote.json'
const VoteContract = contract(voteArtifact)

const RPC_HOST = '127.0.0.1'
const RPC_PORT = '8545'

// Vue.use(VueRouter)
Vue.use(VueResource)

// 构建选项 https://router.vuejs.org/zh/api/#routes
const DApp = {
  account: null,
  provider: null,
  instance: null,
  createProvider: function() {
    if (typeof web3 !== 'undefined') {
      window.web3 = new Web3(web3.currentProvider)
    } else {
      window.web3 = new Web3(new Web3.providers.HttpProvider('http://' + RPC_HOST + ':' + RPC_PORT))
    }
    VoteContract.setProvider(web3.currentProvider)
    DApp.start()
  },
  start: function () {
    const self = this
    web3.eth.getAccounts(function (err, accounts) {
      if (err != null) {
        alert('There was an error fetching your accounts.' + err)
        return
      }
      if (accounts.length === 0) {
        alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.")
        return
      }
      DApp.account = accounts[0]
      console.log('DApp start, account 0 : ' + DApp.account)
      //DApp.refreshBalance()
      DApp.initInstance()
    })
  },

  initInstance: function(){
    VoteContract.deployed().then(function (instance) {
      DApp.instance = instance
      // TODO 风险
      //return DApp.instance.getApps()
      //return DApp.instance.dAppsMap.call(0);
      console.log('get instance ')
      DApp.getApps()
    }).then(function (result) {
      /*result.map((v, i) => {
        console.log(v.valueOf());
      });
      console.log("call getApps result: " + result)*/
    }).catch(function (e) {
      console.log(e)
      DApp.showMsg('Error getting balance; see log.')
    })
  },

  commitApp: function (vote) {
    VoteContract.commitApp(vote.deployUrl, vote.name, vote.introduce, vote.requestUrl, vote.abiInterface, vote.logoUrl)
  },

  voteApp: function (appAdrr, dappIndex) {
    VoteContract.voteApp(appAdrr, dappIndex)
  },

  getApps: function () {
    //TODO
    //  dAppArray.length  >>  遍历dAppArray  >>  由地址从dAppsMap中取 dappIndex及dapp
    // or 获取dAppsMap 遍历取值  https://blog.csdn.net/qq_33829547/article/details/81385653
    // or 修改合约，使用
    /*let length = VoteContract.getApps
    console.log('length: ' + length + ', contractOwner: ' + VoteContract.contractOwner)*/
    // TODO 异步执行  DApp.instance 不为空
    DApp.instance.getApps().then(function (result) {
      /*result.map((v, i) => {
        console.log(v.valueOf());
      });*/
      console.log('getApps result: ' + result)
    }).catch(function (err) {
      console.log(err.message);
    });

    // TODO 不考虑修改，dappIndex编号忽略
    /*let studentFactory;
    StudentFactory.at(address).then((instance) => {
      studentFactory = instance;
      return studentFactory.idToUndergraduate.call(id);
    }).then((result) => {
      result.map((v, i) => {
        console.log(v.valueOf());
      });
    }).catch((e) => {
      console.warn(e);
    })*/
  },

  // show message
  showMsg: function (message) {
    // TODO common
    console.log('showMsg: ' + message)
  },

  transferTo: function () {
    const self = this

    // TODO user set value
    const amount = 1000000
    const receiver = 0x00

    DApp.showMsg('Initiating transaction... (please wait)')

    //let voteContr
    VoteContract.deployed().then(function (instance) {
      voteContr = instance
      return voteContr.trans(receiver, amount)
    }).then(function () {
      DApp.showMsg('Transaction complete!')
      DApp.refreshBalance()
    }).catch(function (e) {
      console.log(e)
      DApp.showMsg('Error sending coin; see log.')
    })
  }
}

export default DApp

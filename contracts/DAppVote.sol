pragma solidity ^0.4.24;
contract DAppVote {
  struct dApp {
    address owner;
    address dAppAddr;
    string name;
    string desc;
    string url;
    string abi;
    string logoUrl;
    uint voteCount;
    uint createTime;
    uint value;
  }
  struct voter {
    address voterAddress;
    uint dAppIndex;//投票位置
    uint hasVote;
    uint voteValue;//赞赏数
  }

  mapping(address => voter) public voters;
  mapping(address => dApp) public dAppsMap;
  //dApp[] public dApps;
  address[] public dAppArray;
  address public contractOwner;

  //事件第一个参数默认address
  event voteEvent(address from_addr, address to_addr , uint getVoteCount,uint voteValue);
  event sinUpEvent(address from_addr);
  event modifyEvent(address from_addr, address old_addr, address new_addr);
  event transEvent(address from_addr, address to_addr, bool success);

  function DAppVote() {
    contractOwner = msg.sender;
  }

  function() payable { }

  function commitApp(address appAddr,string nameAdd ,string descAdd,
    string urlAdd,string abiAdd,string logoAdd) public {
    require(!validDApp(appAddr));//是否上传过
    dAppsMap[appAddr] = dApp(msg.sender, appAddr, nameAdd, descAdd, urlAdd,
      abiAdd, logoAdd, 0, now, 0);
    dAppArray.push(appAddr);
    emit sinUpEvent(msg.sender);
  }

  //unusage
  // dAppIndex记录旧地址（合约deploy后地址变更）
  function modifyAppInfo(address newAppAddr,
    string nameAdd,string descAdd,string urlAdd,string abiAdd,
    string logoAdd,uint dAppIndex) public {
    require(validOwner(dAppArray[dAppIndex]));
    if(dAppArray[dAppIndex]==newAppAddr){
      dAppsMap[dAppArray[dAppIndex]].name = nameAdd;
      dAppsMap[dAppArray[dAppIndex]].desc = descAdd;
      dAppsMap[dAppArray[dAppIndex]].url = urlAdd;
      dAppsMap[dAppArray[dAppIndex]].abi = abiAdd;
      dAppsMap[dAppArray[dAppIndex]].logoUrl = logoAdd;
    }else{
      dAppsMap[newAppAddr] = dApp(dAppsMap[dAppArray[dAppIndex]].owner,
        newAppAddr,nameAdd,descAdd,urlAdd,abiAdd,logoAdd,
        dAppsMap[dAppArray[dAppIndex]].voteCount,dAppsMap[dAppArray[dAppIndex]].createTime,
        dAppsMap[dAppArray[dAppIndex]].value);
      dAppArray[dAppIndex] = newAppAddr;
      delete dAppsMap[dAppArray[dAppIndex]];
    }
    emit modifyEvent(msg.sender, dAppArray[dAppIndex],newAppAddr);
  }

  function vote(address appAddr,uint dAppIndex) payable public {
    require(msg.sender!=0&&!validVoter());
    voters[msg.sender] = voter(msg.sender, dAppIndex ,1, msg.value) ;
    dAppsMap[appAddr].voteCount +=1;
    dAppsMap[appAddr].value += msg.value;
    //转到了当前合约的地址上
    emit voteEvent(msg.sender,appAddr, dAppsMap[appAddr].voteCount, dAppsMap[appAddr].value);
  }

  function getApps() constant public returns (uint) {
    return dAppArray.length;
  }

  function validDApp(address appAddr) constant public returns (bool) {
    if (appAddr!=0&&dAppsMap[appAddr].dAppAddr == appAddr) {
      return true;
    }else{
      return false;
    }
  }

  function validVoter() constant public returns (bool)  {
    if (voters[msg.sender].hasVote == 1) {
      return true;
    }else{
      return false;
    }
  }

  function validOwner(address appAddr) constant public returns (bool) {
    if(dAppsMap[appAddr].owner==msg.sender){
      return true;
    }else{
      return false;
    }
  }

  function trans(address toAddr,uint num) payable {
    //require(toAddr!=0&&msg.sender==contractOwner&&num<=this.balance);
    require(toAddr!=0&&msg.sender==contractOwner&&num<=msg.sender.balance);
    toAddr.transfer(num);
    emit transEvent(msg.sender, toAddr, true);
  }

  // 调用？？
  function getBalance() constant public returns (uint) {
    require(msg.sender==contractOwner);
    //return this.balance;
    return msg.sender.balance;
  }
}

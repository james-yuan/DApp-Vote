<template>
  <div data-v-44d513f6="" data-v-dea6bc68="" class="RankingList">
      <ul data-v-44d513f6="" class="RankingNav clearfix">
          <li data-v-44d513f6="" @click="sortByCount" :class="{active: countSele}">最高投票</li>
          <li data-v-44d513f6="" @click="sortByPubtime" :class="{active: pubTimeSele}">最新发布</li>
          <li data-v-44d513f6="" @click="sortByTrans" :class="{active: tranSele}">最高转账</li>
      </ul>

      <div data-v-44d513f6="" id="RankingContent">
          <div data-v-44d513f6="" class="RankingContent" v-for="item in dataList">
              <div data-v-44d513f6="" class="TitleLogo clearfix">
                  <div data-v-44d513f6="" class="RankingTitle" v-html="item.appName"></div>
                  <div data-v-44d513f6="" class="RankingLogo" style="background-image: url(&quot;http://renrenshuo.oss-cn-beijing.aliyuncs.com/app/user-avatar/90ee19078233ad419d50df60c4ca653f387bc405.jpg&quot;); background-repeat: no-repeat; background-position: center center; background-size: cover;"></div>
              </div>

              <div data-v-44d513f6="" class="RankingIntro clearfix RankingContentList">
                  <div data-v-44d513f6="" class="RankingIntroTitle RankingContentListTitle">
                      简&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;介:
                  </div>
                  <p data-v-44d513f6="" class="RankingIntroContent RankingContentListContent" v-html="item.introduce"></p>
              </div>

              <div data-v-44d513f6="" class="RankingIntro clearfix RankingContentList">
                 <div data-v-44d513f6="" class="RankingIntroTitle RankingContentListTitle">
                  访问地址:
                 </div>
                 <p data-v-44d513f6="" class="RankingIntroContent RankingContentListContent" v-html="item.requestUrl"></p>
              </div>

              <div data-v-44d513f6="" class="RankingIntro clearfix RankingContentList">
                 <div data-v-44d513f6="" class="RankingIntroTitle RankingContentListTitle">
                  部署地址:
                 </div>
                 <p data-v-44d513f6="" class="RankingIntroContent RankingContentListContent" v-html="item.deployUrl"></p>
               </div>

              <div data-v-44d513f6="" class="RankingIntro clearfix RankingContentList">
                 <div data-v-44d513f6="" class="RankingIntroTitle RankingContentListTitle">
                  获得票数:
                 </div>
                 <p data-v-44d513f6="" class="RankingIntroContent RankingContentListContent" v-html="item.voteCount"></p>
              </div>

              <div data-v-44d513f6="" class="RankingIntro clearfix RankingContentList">
                 <div data-v-44d513f6="" class="RankingIntroTitle RankingContentListTitle">
                  转账额度:
                 </div>
                 <p data-v-44d513f6="" class="RankingIntroContent RankingContentListContent" v-html="item.fee"></p>
              </div>

              <div data-v-44d513f6="" class="RankingIntro clearfix RankingContentList">
                 <div data-v-44d513f6="" class="RankingIntroTitle RankingContentListTitle">
                  提交时间:
                 </div>
                 <p data-v-44d513f6="" class="RankingIntroContent RankingContentListContent" v-html="item.commitTime"></p>
              </div>

              <div data-v-44d513f6="" class="RankingVote" @click="voteApp">
                 投票
              </div>

          </div>
      </div>
  </div>
</template>

<script>

import '../styles/app.css'
import DApp from '../scripts/DApp.js'

let sort_count = 1
let sort_pubtime = 2
let sort_trans = 3

export default {
  data () {
    return {
        countSele: true,
        pubTimeSele: false,
        tranSele: false,
        dataList: []
    }
  },
  created() {

  },
  mounted:function(){
    this.getVoteDatas(sort_count)
  },
  methods: {
    sortByCount : function() {
        this.setSortState(true, false, false)
        this.getVoteDatas(sort_count);
    },
    sortByPubtime: function() {
        this.setSortState(false, true, false)
        this.getVoteDatas(sort_pubtime);
    },
    sortByTrans: function() {
        this.setSortState(false, false, true)
        this.getVoteDatas(sort_trans);
    },
    setSortState: function(st1, st2, st3){
        this.countSele = st1;
        this.pubTimeSele = st2;
        this.tranSele = st3;
    },
    getVoteDatas: function(sortBy) {
        //TODO 异步执行
        // DApp.getApps();
        if(sortBy == 1 ){

        }
        if(sortBy == 2 ){

        }

        if(sortBy == 3 ){

        }
    },
    voteApp: function(){
        let appAdrr = ""
        let dappIndex = ""
        DApp.vote(appAdrr, dappIndex)
    }
  }
}
</script>


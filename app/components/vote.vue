<template>
  <div data-v-dea6bc68="" class="dAppNav">
  	<div data-v-dea6bc68="" class="navApp clearfix">
  		<div data-v-dea6bc68="" class="logo"></div>
  		<div data-v-dea6bc68="" class="rankingList ss" @click="changeTab(0)"><router-link to="/"><span class="pTitle">排行榜</span></router-link>
  		    <span data-v-dea6bc68="" :class="{bottomLine: isTab1}"></span></div>
  		<div data-v-dea6bc68="" class="createApp ss" @click="changeTab(1)"><router-link to="/createApp"><span class="pTitle">添加应用</span></router-link>
  		    <span data-v-dea6bc68="" :class="{bottomLine: !isTab1}"></span></div>

  	</div>

  	<router-view></router-view>

  </div>
</template>

<script>

import '../styles/app.css'

export default {
  name: 'vote',
  data () {
    return {
        isTab1: true,
        openStatus: false
    }
  },
  created() {

  },
  methods: {
    changeTab: function(index) {
        this.isTab1 = index == 0 ? true : false;
    }
  }
}
</script>


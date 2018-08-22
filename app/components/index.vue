<template>
  <div id="index">
    <h1>{{ msg }}</h1>
    <img src="../img/logo.png">
    <input type="text" v-model="msg">

    <h3>导航</h3>
    <header>
        <!-- router-link 定义点击后导航到哪个路径下 -->
        <router-link to="/first">First</router-link>
        <router-link to="/second">Second</router-link>
        <router-link to="/json">Jsonp</router-link>
    </header>

    <!-- 对应的组件内容渲染到router-view中 -->
    <router-view></router-view>

  </div>
</template>

<script>

import '../styles/common.scss';

import getData from '../js/util';

export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js'
    }
  },
  created() {
    this.fetchData();
  },
  methods: {
     async fetchData() {
      const data = await getData();
      this.msg = data;
    }
  }
}
</script>

<style lang="scss">
#index {
  font-family: "Avenir", Helvetica, Arial, sans-serif;

  h1 {
    color: green;
  }
}
</style>

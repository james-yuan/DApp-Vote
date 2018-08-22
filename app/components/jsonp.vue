<template>
  <div id="jsonpComponent">
    <h1>I am another page</h1>
    <a> written by {{ author }} </a>
    <p> 感谢 <a href="https://github.com/showonne">showonne</a>大神的技术指导</p>
    <ul>
      <li v-for="article in articles">
        {{article.title}}
      </li>
    </ul>
  </div>
</template>

<script>
const url = 'https://api.douban.com/v2/movie/top250?count=10'
export default {
  data() {
    return {
        author: "微信公众号 jinkey-love",
        articles: [],
    }
  },
  mounted:function(){
    this.$http.jsonp(url,{},{
      headers:{

      },
      emulateJSON:true
    }).then(function(res){
      // 这里处理正确的回调
      console.log(res)
      this.articles = res.data["subjects"]
    },function(err){
      // 这里处理错误的回调
      console.log("err")
    })
  }
}

</script>

<style>
</style>
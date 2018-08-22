<template>
  <div data-v-3a24810c="" data-v-dea6bc68="" class="box">
     <div data-v-3a24810c="" class="intro">
      <div data-v-3a24810c="" class="introTitle">提交一个&ETH;App</div>
      <div data-v-3a24810c="" class="introContent">
       使用此表单提交新的以太坊分散式应用程序。
       <br data-v-3a24810c="" />如果想要更新现有的&ETH;App，可以通过相应的应用程序详情
       <br data-v-3a24810c="" />页面上的编辑选项去操作。
      </div>
     </div>
     <div data-v-3a24810c="" class="inputList">
      <div data-v-3a24810c="" class="appName inputListBox ">
       <div data-v-3a24810c="" class="clearfix childHeight">
        <span data-v-3a24810c="" class="appNameTitle inputListTitle">&ETH;应用程序名称 <span data-v-3a24810c="" class="important">（必填）</span></span>
        <span data-v-3a24810c="" class="inputLength" v-html="name_remaind"></span>
       </div>
       <textarea data-v-3a24810c="" type="text" maxlength="25" class="appNameInput contentInput" @input="watchRemaid(25, 'name')" v-model="formData.name"></textarea>
      </div>
      <div data-v-3a24810c="" class="introduce inputListBox ">
       <div data-v-3a24810c="" class="clearfix childHeight">
        <span data-v-3a24810c="" class="introduceTitle inputListTitle">简介 <span data-v-3a24810c="" class="important">（必填）</span></span>
        <span data-v-3a24810c="" class="inputLength" v-html="introduce_remaind"></span>
       </div>
       <textarea data-v-3a24810c="" maxlength="30" class="introduceInput contentInput" @input="watchRemaid(50, 'introduce')" v-model="formData.introduce"></textarea>
       <div data-v-3a24810c="" class="describe">
        用一句话描述你的&ETH;应用程序。请勿包含自我推销或明显的词语如“区块链”，“分布式”或“以太坊”。
       </div>
      </div>
      <div data-v-3a24810c="" class="accessUrl inputListBox ">
       <div data-v-3a24810c="" class="clearfix childHeight">
        <span data-v-3a24810c="" class="introduceTitle inputListTitle">访问地址 <span data-v-3a24810c="" class="important">（必填）</span></span>
        <span data-v-3a24810c="" class="inputLength" v-html="requestUrl_remaind"></span>
       </div>
       <textarea data-v-3a24810c="" maxlength="500" class="accessUrlInput contentInput" @input="watchRemaid(500, 'requestUrl')" v-model="formData.requestUrl"></textarea>
       <div data-v-3a24810c="" class="describe">
        此应用的访问地址
       </div>
      </div>
      <div data-v-3a24810c="" class="thisLogo inputListBox ">
       <div data-v-3a24810c="" class="clearfix childHeight">
        <span data-v-3a24810c="" class="introduceTitle inputListTitle">logo <span data-v-3a24810c="" class="important">（必填）</span></span>
        <span data-v-3a24810c="" class="inputLength" v-html="logoUrl_remaind"></span>
       </div>
       <textarea data-v-3a24810c="" maxlength="255" class="thisLogoInput contentInput" @input="watchRemaid(255, 'logoUrl')" v-model="formData.logoUrl"></textarea>
       <div data-v-3a24810c="" class="describe">
        提供一个logo的URL地址
       </div>
      </div>
      <div data-v-3a24810c="" class="thisAbi inputListBox ">
       <div data-v-3a24810c="" class="clearfix childHeight">
        <span data-v-3a24810c="" class="introduceTitle inputListTitle">abi <span data-v-3a24810c="" class="important">（必填）</span></span>
        <span data-v-3a24810c="" class="inputLength" v-html="abiInterface_remaind"></span>
       </div>
       <textarea data-v-3a24810c="" maxlength="50000" class="thisAbiInput contentInput" @input="watchRemaid(50000, 'abiInterface')" v-model="formData.abiInterface"></textarea>
       <div data-v-3a24810c="" class="describe">
        提供一个应用程序二进制接口
       </div>
      </div>
      <div data-v-3a24810c="" class="deployment inputListBox ">
       <div data-v-3a24810c="" class="clearfix childHeight">
        <span data-v-3a24810c="" class="introduceTitle inputListTitle">部署地址 <span data-v-3a24810c="" class="important">（必填）</span></span>
        <span data-v-3a24810c="" class="inputLength" v-html="deployUrl_remaind">42</span>
       </div>
       <textarea data-v-3a24810c="" maxlength="42" class="deploymentInput contentInput" @input="watchRemaid(42, 'deployUrl')" v-model="formData.deployUrl"></textarea>
       <div data-v-3a24810c="" class="describe">
        提供一个部署地址
       </div>
      </div>
     </div>
     <div data-v-3a24810c="" class="submitAPP" @click="submitApp">
      提交此应用
     </div>

    <!--<importKeystore></importKeystore>-->
  </div>

</template>

<script>

import '../styles/app.css'
import importKeystore from './importKeystore.vue'
import DApp from '../scripts/DApp.js'

export default {
    data () {
        return {
            formData: {},
            name_remaind: 25,
            introduce_remaind: 50,
            requestUrl_remaind: 500,
            logoUrl_remaind: 255,
            abiInterface_remaind: 50000,
            deployUrl_remaind: 42
        }
    },
    components: {
        // 逗号分隔
        importKeystore
    },
    methods: {
        watchRemaid: function(total, target) {
            let prop = target + '_remaind'
            this[prop] = total - String(this.formData[target]).length
        },
        submitApp: function() {
            DApp.commitApp(this.formData)
        }
    }
}
</script>


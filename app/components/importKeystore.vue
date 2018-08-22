<template>
    <div data-v-6ba36837="" data-v-3a24810c="" class="alertG" v-show="openStatus">
      <div data-v-6ba36837="" class="alertBg"></div>
      <div data-v-6ba36837="" class="alertBox">
       <div data-v-6ba36837="" class="alertBoxTop">
        <div data-v-6ba36837="" class="alertTitle">
         keyStore File
        </div>
        <input data-v-6ba36837="" type="file" class="alertInput alertInputFile" @change="handleFile($event)"/>
       </div>
       <div data-v-6ba36837="" class="alertBoxTop">
        <div data-v-6ba36837="" class="alertTitle">
         密码
        </div>
        <input data-v-6ba36837="" type="password" autofocus="autofocus" class="alertInput alertInputPass" v-model="accountPass"/>
       </div>
       <div data-v-6ba36837="" class="promVote" @click="unLockAccount">
        立即解锁
       </div>
      </div>
    </div>
</template>


<script>

    import '../styles/app.css'

    export default {
        data () {
            return {
                accountPass: null,
                openStatus: true
            }
        },
        methods: {
            handleFile: function(ele){
                var files = ele.target.files;
                if (files.length) {
                    var file = files[0];
                    var reader = new FileReader();
                    reader.onload = function () {
                        //document.getElementById("filecontent").innerHTML = this.result;
                        //App.keystore = this.result;
                        console.log("file context: " + this.result)
                    };
                    reader.readAsText(file);
                }
            },
            unLockAccount(){
                this.openStatus = false;
            }
        }
    }
</script>


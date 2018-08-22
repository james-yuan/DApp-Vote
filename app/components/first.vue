<template>
    <div id="firstComponent">
        <h1>it's a title</h1>
        <a class="msgc">written by {{author}}</a>
    </div>
</template>
<script type="text/javascript">
    export default{
        data(){
            return{
                author:'first-component'
            }
        }
    }
</script>
<style>
    .msgc{color:green;}
</style>
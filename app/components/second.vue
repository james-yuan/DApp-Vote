<template>
    <div id="secondComponent">
        <h2>second component</h2>
        <ul v-for="x in newarr">
            <li>{{ x }}</li>
        </ul>
        <ul v-for="x in carr">
            <li>{{ x }}</li>
        </ul>
    </div>
</template>
<script type="text/javascript">
    export default{
        data (){
            return {
                carr:[11,22,33]
            }
        },
        props:["newarr"]
    }
</script>

<style>
    #secondcomponent{
        background: #ccc;
    }
</style>
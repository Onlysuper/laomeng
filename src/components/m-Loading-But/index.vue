<template>
<div class="m-full-but">
    <Button long size="large" :loading="loading" @click="handle">
        <span v-if="!loading">加载更多</span>
        <span v-else>加载中</span>
    </Button>
</div>
  
</template>
<style>
.m-full-but{
    width: 100%;
    margin-bottom:20px;
}
</style>

<script>
export default {
    props:{
        loading:{
            type:Boolean,
            default:false
        }
    },
    data(){
        return {
            list:[],
        }
    },
    methods:{
       handle(){
           this.$emit("handle")
       }
    }
}
</script>

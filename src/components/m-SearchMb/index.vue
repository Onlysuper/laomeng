<template>
   <div class="search-mb">
       <!-- <div class="logoback">
           logo
       </div> -->
       <div class="m-input-box">
           <Input :placeholder="$t('searchPlaceholder')" type="text"></Input>
       </div>
       <span class="search-button" @click="searchClick" href="search-button">
           <Icon type="ios-search" />
       </span>
   </div>
</template>
<style lang="scss">
.search-mb{
    background:#fff;
    flex:1;
    height: 100%;
    display: flex;
    .logoback{
        flex: 1;
        text-align: center;
    }
    .search-button{
        flex: 0 0 30px;
        text-align: right;
        font-size: 20px;
    }
    .m-input-box{
        line-height: 0%;
        flex:1;
        font-size: 14px;
        display: flex;
        justify-content: flex-end;
        flex-direction: column;
        justify-content: center;
        input{
           
        }
    }
    
}
</style>
<script>
export default {
    methods:{
        searchClick(){
            alert('aa');
        }
    }
}
</script>



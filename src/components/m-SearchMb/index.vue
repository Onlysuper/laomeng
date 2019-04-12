<template>
   <div class="search-mb">
       <!-- <div class="logoback">
           logo
       </div> -->
        <input  :placeholder="$t('searchPlaceholder')" type="text">
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
        flex: 0 0 50px;
        text-align: right;
    }
    input{
        line-height: 0%;
        flex:1;
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



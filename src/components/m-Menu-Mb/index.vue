<template>
<Menu theme="light" active-name="1" :mode='mode'>
        <MenuItem @click.native="goUrl" name="1">
            <!-- <Icon type="md-document" /> -->
            首页
        </MenuItem>
        <MenuItem name="2">
            <!-- <Icon type="md-chatbubbles" /> -->
            技术咖
        </MenuItem>
        <MenuItem name="3">
            <!-- <Icon type="md-heart" /> -->
            生活家
        </MenuItem>
        <MenuItem name="4">
            <!-- <Icon type="md-leaf" /> -->
            关于我
        </MenuItem>
</Menu> 
   
</template>
<style lang="scss">
@import "../../assets/scss/global.scss";
.ivu-menu-dark.ivu-menu-horizontal .ivu-menu-item-active, .ivu-menu-dark.ivu-menu-horizontal .ivu-menu-item:hover, .ivu-menu-dark.ivu-menu-horizontal .ivu-menu-submenu-active, .ivu-menu-dark.ivu-menu-horizontal .ivu-menu-submenu:hover{
    color:$main-color;
    border:0px !important;
}
.ivu-menu-light.ivu-menu-horizontal .ivu-menu-item, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu{
     color:#515a6e !important;
      border:0px !important;
}
.ivu-menu-dark.ivu-menu-horizontal .ivu-menu-item-active{
    color: $main-color !important;
}
.ivu-menu-horizontal.ivu-menu-light:after{
    display: none !important;
}
</style>
<script>
export default {
    props:['mode'],
    data(){
        return {
        }
    },
    methods:{
        goUrl(){
            this.$router.push({path:"./"})
        }
    }
}
</script>



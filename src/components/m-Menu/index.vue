<template>
<Menu theme="light" active-name="1" :mode='mode'>
        <MenuItem @click.native="goUrl('./')" name="1">
             {{ $t("home") }}
        </MenuItem>
        <MenuItem @click.native="goUrl('./')" name="2">
             {{ $t("technology") }}
        </MenuItem>
        <MenuItem @click.native="goUrl('./')" name="3">
            {{ $t("life") }}
        </MenuItem>
        <MenuItem @click.native="goUrl('./about')" name="4">
           {{ $t("about") }}
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
        goUrl(path){
            this.$router.push({path:path})
        }
    }
}
</script>



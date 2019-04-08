<template>
<Menu theme="light" active-name="1" :mode='mode'>
        <MenuItem name="1">
            <Icon type="md-document" />
            文章管理
        </MenuItem>
        <MenuItem name="2">
            <Icon type="md-chatbubbles" />
            评论管理
        </MenuItem>
        <MenuItem name="3">
            <Icon type="md-heart" />
            用户留存
        </MenuItem>
        <MenuItem name="4">
            <Icon type="md-leaf" />
            流失用户
        </MenuItem>
</Menu> 
   
</template>
<style lang="scss">
.ivu-menu-dark.ivu-menu-horizontal .ivu-menu-item-active, .ivu-menu-dark.ivu-menu-horizontal .ivu-menu-item:hover, .ivu-menu-dark.ivu-menu-horizontal .ivu-menu-submenu-active, .ivu-menu-dark.ivu-menu-horizontal .ivu-menu-submenu:hover{
    color:#515a6e !important
}
.ivu-menu-light.ivu-menu-horizontal .ivu-menu-item, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu{
     color:#515a6e !important
}
</style>
<script>
export default {
    props:['mode'],
    data(){
        return {
        }
    }
}
</script>



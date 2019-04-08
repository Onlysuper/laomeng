<template>
 <Menu mode="horizontal" theme="light" active-name="1">
    <MenuItem name="1">
        <Icon type="ios-paper" />
        内容管理
    </MenuItem>
    <MenuItem name="2">
        <Icon type="ios-people" />
        用户管理
    </MenuItem>
    <Submenu name="3">
        <template slot="title">
            <Icon type="ios-stats" />
            统计分析
        </template>
        <MenuGroup title="使用">
            <MenuItem name="3-1">新增和启动</MenuItem>
            <MenuItem name="3-2">活跃分析</MenuItem>
            <MenuItem name="3-3">时段分析</MenuItem>
        </MenuGroup>
        <MenuGroup title="留存">
            <MenuItem name="3-4">用户留存</MenuItem>
            <MenuItem name="3-5">流失用户</MenuItem>
        </MenuGroup>
    </Submenu>
    <MenuItem name="4">
        <Icon type="ios-construct" />
        综合设置
    </MenuItem>
</Menu>
   
</template>
<style lang="scss">
// .ivu-menu-dark.ivu-menu-horizontal .ivu-menu-item-active, .ivu-menu-dark.ivu-menu-horizontal .ivu-menu-item:hover, .ivu-menu-dark.ivu-menu-horizontal .ivu-menu-submenu-active, .ivu-menu-dark.ivu-menu-horizontal .ivu-menu-submenu:hover{
//     color:#515a6e !important
// }
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



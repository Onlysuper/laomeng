<template>
<div class="menu-container">
    <div class="pc-menu">
        <Menu  mode="horizontal" theme="dark" active-name="1">
                <div class="logo-box">
                    <div class="layout-logo"></div>
                </div>
                <div class="layout-nav">
                     <m-menu mode="horizontal"></m-menu>
                </div>
                <div class="header-right">
                    <slot name="search"></slot>
                    <m-language></m-language>
                </div>
        </Menu>
    </div>
    <div class="mobile-menu">
        <div class="munu-but-mb">
         <Icon @click="value1 = true" type="ios-menu" />
        </div>
        <slot name="searchmb"></slot>
        <Drawer  title="xxx"  placement="left" :closable="true" v-model="value1">
            <!-- <MmenuMb mode="vertical"></MmenuMb> -->
             <m-menu mode="vertical"></m-menu>
        </Drawer>
    </div>
        
</div>
   
</template>
<style lang="scss">
@import "../../assets/scss/global.scss";
.menu-container{
    height: 100%;
    width: 90%;
    margin: 0 auto;
    .ivu-menu-horizontal{
        display: flex;
        flex-direction: row;
        justify-content: space-between
    }
    .ivu-menu-dark{
        background: transparent;
    }
    .pc-menu{
        .logo-box{
            flex: 0 1 120px;
            display: flex;
            .layout-logo{
                background: url('../../assets/img/logo.png');
                background-size: 100%;
                flex: 0 1 100px;
                height: 42px;
                line-height: 42px;
                text-align: center;
                font-weight: bold;
                font-size: 32px;
                border-radius: 3px;
                float: left;
                position: relative;
                top: 6px;
            }
        }
        .header-right{
            flex: 1;
            text-align: right;
            display: flex;
            flex-direction: row;
            justify-content: flex-end
        }
        .layout-nav{
            margin: 0 auto;
            margin-right: 20px;
        }
    }
    .mobile-menu{
        height: 100%;
        display: none;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;  
        .munu-but-mb{
            flex:0 0  50px;
        }
    }
    
}
@media only screen and (max-width: 750px) {
    .pc-menu {
        display: none;
    }
    .mobile-menu {
        display: flex !important;
    }
}
@media only screen and (min-width: 750px) {
    .mobile-menu {
        display: none;
    }
     .pc-menu {
        display: block !important;
    }
}
</style>
<script>
// import Mmenu from  "@/components/m-Menu/index.vue";
import mMenu from  "@/components/m-Menu/index.vue";
import mLanguage from  "@/components/m-Language/index.vue";
export default {
    data(){
        return {
            value1:false
        }
    },
    components:{
        mMenu,
        mLanguage
    }
}
</script>



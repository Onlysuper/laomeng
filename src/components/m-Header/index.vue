<template>
<div class="menu-container">
    <div class="pc-menu">
        <Menu  mode="horizontal" theme="dark" active-name="1">
                <div class="logo-search">
                    <div class="layout-logo">logo</div>
                    <!-- <div class="layout-search">
                        <slot name="search"></slot>
                    </div> -->
                </div>
                <div class="layout-nav">
                     <MmenuMb mode="horizontal"></MmenuMb>
                </div>
        </Menu>
    </div>
    <div class="mobile-menu">
        <div class="munu-but-mb">
         <Icon @click="value1 = true" type="ios-menu" />
        </div>
        <slot name="searchmb"></slot>
        <Drawer  title="xxx"  placement="left" :closable="true" v-model="value1">
            <MmenuMb mode="vertical"></MmenuMb>
        </Drawer>
    </div>
        
</div>
   
</template>
<style lang="scss">
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
        .logo-search{
            flex: 1;
            display: flex;
            .layout-logo{
                flex: 0 1 100px;
                height: 30px;
                // background: #5b6270;
                border-radius: 3px;
                float: left;
                position: relative;
                top: 15px;
            }
            .layout-search{
                flex: 1;
            }
        }
    
        .layout-nav{
            // flex: 0 1 420px;
            // flex:1;
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
import Mmenu from  "@/components/m-Menu/index.vue";
import MmenuMb from  "@/components/m-Menu-Mb/index.vue";
export default {
    data(){
        return {
            value1:false
        }
    },
    components:{
        Mmenu,
        MmenuMb
    }
}
</script>



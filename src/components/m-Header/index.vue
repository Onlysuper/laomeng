<template>
<div class="menu-container">
    <div class="pc-menu">
        <Menu  mode="horizontal" theme="dark" active-name="1">
                <div class="logo-search">
                    <div class="layout-logo"></div>
                    <div class="layout-search">
                        <slot name="search"></slot>
                        <!-- <search></search>  -->
                    </div>
                </div>
                <div class="layout-nav">
                    <MenuItem name="1">
                        <Icon type="ios-navigate"></Icon>
                        Item 1
                    </MenuItem>
                    <MenuItem name="2">
                        <Icon type="ios-keypad"></Icon>
                        Item 2
                    </MenuItem>
                    <MenuItem name="3">
                        <Icon type="ios-analytics"></Icon>
                        Item 3
                    </MenuItem>
                    <MenuItem name="4">
                        <Icon type="ios-paper"></Icon>
                        Item 4
                    </MenuItem>
                
                </div>
        </Menu>
    </div>
    <div class="mobile-menu">
       <div class="logo-search">
            <Button @click="value1 = true" type="primary">菜单</Button>
            <div class="layout-logo"></div>
       </div>
        <Drawer  title="Basic Drawer"  placement="left" :closable="true" v-model="value1">
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </Drawer>
    </div>
        
</div>
   
</template>
<style lang="scss">
.menu-container{
    height: 100%;
    .ivu-menu-horizontal{
        display: flex;
        flex-direction: row;
        justify-content: space-between
    }
    .pc-menu{
        .logo-search{
            flex: 1;
            display: flex;
            .layout-logo{
                flex: 0 1 100px;
                height: 30px;
                background: #5b6270;
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
            flex:1;
            margin: 0 auto;
            margin-right: 20px;
        }
    }
    .mobile-menu{
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        .logo-search{
            flex: 1;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            .layout-logo{
                flex: 0 1 100px;
                height: 30px;
                background: #5b6270;
                border-radius: 3px;
                position: relative;
            }

        }
       
    }
    
}

@media screen and (max-width: 750px) {
    .pc-menu {
        display: none;
    }
}
@media screen and (min-width: 750px) {
    .mobile-menu {
        display: none;
    }
}
</style>
<script>
export default {
    data(){
        return {
            value1:false
        }
    }
}
</script>



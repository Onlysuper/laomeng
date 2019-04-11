<template>
    <Dropdown  @on-click="handleClick" class="language-box">
        <a href="javascript:void(0)">
            {{lang}}
            <Icon type="ios-arrow-down"></Icon>
        </a>
        <DropdownMenu slot="list">
            <DropdownItem name="chinese">
                <span class="icon-box">
                    <Icon :type="lang=='中文简体'?'ios-radio-button-on':'ios-radio-button-off'" />
                </span>
                 <span class="img-box">
                    <img style="width:100%" :src="require('@/assets/img/chinese.png')" alt="">
                </span>
            </DropdownItem>
            <DropdownItem name="english">
                <span class="icon-box">
                    <Icon :type="lang=='English'?'ios-radio-button-on':'ios-radio-button-off'"  />
                </span>
                 <span class="img-box">
                    <img style="width:100%" :src="require('@/assets/img/english.png')" alt="">
                </span>
            </DropdownItem>
            
        </DropdownMenu>
    </Dropdown>
</template>
<style lang="scss">
@import "../../assets/scss/global.scss";
.language-box{
    color:$m-color1;
    margin-left: 10px;
    display: inline-block;
    min-width: 100px;
    .ivu-dropdown-item{
        display: flex;
        justify-content: center;
        align-items: center;
        .icon-box{
            flex: 0 0 20px;
            margin-right: 10px;
        }
    }
    a{
        color:$m-color1;
        &:hover{
             color:$main-color;
        }
    }
}
</style>
<script>
export default {
    data(){
        return {
            lang:"中文简体",
        }
    },
    methods:{
        handleClick(lang){
            if(lang=='chinese'){
                this.lang = "中文简体"
            }
             if(lang=='english'){
                this.lang = "English"
            }
        }
    },
    watch:{
        lang(lang){
            if(lang=="中文简体"){

            }
            if(lang=="English"){
                
            }
        }
    }
    
}
</script>


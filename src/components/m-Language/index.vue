<template>
    <Dropdown class="language-box">
        <a href="javascript:void(0)">
            多语言
            <Icon type="ios-arrow-down"></Icon>
        </a>
        <DropdownMenu slot="list">
            <DropdownItem>
                <span class="img-box">
                    <img style="width:100%" :src="require('@/assets/img/english.png')" alt="">
                </span>
            </DropdownItem>
            <DropdownItem>
                <span class="img-box">
                    <img style="width:100%" :src="require('@/assets/img/chinese.png')" alt="">
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
    a{
        color:$m-color1;
        &:hover{
             color:$main-color;
        }
    }
}
</style>

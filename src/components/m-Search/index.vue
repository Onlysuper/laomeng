<template>
    <div class="serch-container">
         <input  :placeholder="$t('searchPlaceholder')" type="text">
        <a href="#" onclick="return false;" class="go"></a>
    </div>
</template>
<style lang="scss">
@import "../../assets/scss/global.scss";
.serch-container{
    display: inline-block;
    position: relative;
    margin-left: 20px;
    max-width: 326px;
    min-width: 130px;
    flex: 1;
    input,input:focus,input:active{
        background: #fff;
        border:0;
        outline: none;
        flex: 1;
        width: 100%;
        background: none;
        font-size: 14px;
        padding-left: 20px;
        padding-right: 20px;
        padding: 0 10px;
        width: 100%;
        height: 40px;
        border: 1px solid rgba(0,0,0,.07);
        border-radius: 2px;
        background-color: rgba(255,255,255,.95);
        color: #444;
        // box-shadow: 0 16px 32px 0 rgba(0,0,0,.07), 0 1px 3px 0 rgba(0,0,0,.02), 0 0 0 1px rgba(0,0,0,.1);
        box-sizing: border-box;
    }  
    a{
        position: absolute;
        display: block;
        top: 50%;
        margin-top: -20px;
        right: 0;
        width: 40px;
        height: 40px;
        background: url(../../assets/svg/icon_search.svg) 9px 9px no-repeat;
        cursor: pointer;
    } 
}
</style>


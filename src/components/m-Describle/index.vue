<template>
    <div class="m-card m-describe">
        <ul>
            <li><Icon type="md-heart-outline" />收藏</li>
            <li><Icon type="ios-text-outline" />评论</li>
            <li><Icon type="ios-open-outline" />分享</li>
        </ul>
    </div>
</template>
<style lang='scss' scoped>
@import "../../assets/scss/global.scss";
.m-describe{
    width: 100%;
    background: #fff;
    ul{
       @include flex-row;
       li{
        flex:1;
        list-style: none;
        padding: 10px;
        text-align: center;
        cursor: pointer;
        .ivu-icon{
            margin-right: 3px;
        }
       }
    }
}
</style>


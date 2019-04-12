<template>
    <article class="m-card">
        <div class="title">
            <!-- <Icon type="ios-options" /> -->
            <span>文章信息</span>
        </div>
        <div class="m-card-body">
            <p><Icon type="ios-time-outline" />发表时间：08-25 21:01</p>
            <p><Icon type="ios-book-outline" />阅读数：2807</p>
        </div>
        <div class="m-card-body">
            <Tag type="border">
                 <img src="https://file.iviewui.com/dev/tag/tag-iview.png" alt="">
                 vue
            </Tag>
            <Tag type="border">
                 <img src="https://file.iviewui.com/dev/tag/tag-iview.png" alt="">
                 iview
            </Tag>
        </div>
    </article>
</template>
<style lang="scss" scoped>
@import "../../assets/scss/global.scss";
@import "../../assets/scss/mCard.scss";
.ivu-icon{
    padding-right: 10px;
}
</style>


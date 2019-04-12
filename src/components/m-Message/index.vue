<template>
<!-- 留言板 -->
    <div class="m-message-page">
        <div class="m-leave-box">
            <div>
                <div class="img-box">
                    <img width="60px" :src="require('@/assets/img/chinese.png')" alt="">
                </div>
            </div>
        </div>
        <div class="m-common-list">
            <Timeline>
                <TimelineItem color="green">
                    <Icon type="ios-trophy" slot="dot"></Icon>
                    <span>发布里程碑版本</span>
                </TimelineItem>
                <TimelineItem>发布1.0版本</TimelineItem>
                <TimelineItem>发布2.0版本</TimelineItem>
                <TimelineItem>发布3.0版本</TimelineItem>
            </Timeline>
        </div>
    </div>
</template>
<style lang="scss">
.m-message-page{
    margin-top: 30px;
    width: 100%;
    .m-leave-box{
        width: 100%;
        position: relative;
        height: 60px;
        z-index: 10;
        .img-box{
            width: 42px;
            height: 42px;
            position: absolute;
            left: 9px;
            top: 22px;
            display: none;
            z-index: 11;
            img{
                border-radius: 42px;
                display: block;
                width: 42px;
            }
        }
    }
   
}
</style>

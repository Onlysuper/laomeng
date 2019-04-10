<template>
    <article class="m-card">
        <div class="title">
            <Icon type="ios-options" />
            <span>文章选项</span>
        </div>
        <div class="m-card-body">
            <div class="title">
                文章类型
            </div>
            <RadioGroup v-model="articelType">
                <Radio label="1">
                    <!-- <Icon type="logo-apple"></Icon> -->
                    <span>全部</span>
                </Radio>
                <Radio label="2">
                    <!-- <Icon type="logo-android"></Icon> -->
                    <span>精选</span>
                </Radio>
            </RadioGroup>
        </div>
        <div class="m-card-body">
             <div class="title">
                文章标签
            </div>
            <div>
              <Tag type="border">标签三</Tag>
              <Tag type="border">标签三</Tag>
              <Tag type="border">标签三</Tag>
              <Tag type="border">标签三</Tag>
              <Tag type="border">标签三</Tag>
            </div>
        </div>
       
    </article>
</template>
<style lang="scss" scoped>
@import url(../../assets/scss/global.scss); 
.m-card{
    background: #fff;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    &>.title{
            border-bottom: 1px solid #e8eaec;
            padding: 14px 16px;
            line-height: 20px;
            font-size: 14px;
            color: #17233d;
            font-weight: 700;
            white-space: nowrap;
            span{
                padding-left: 5px;
                vertical-align: middle;
            }
    }
    .m-card-body{
        padding: 10px;
        &>.title{
            margin-bottom: 6px;
            font-size: 14px;
        }
    }
}
</style>
<script>
export default {
    data(){
        return {
            articelType:"1"
        }
    }
}
</script>



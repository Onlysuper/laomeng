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
@import "../../assets/scss/global.scss";
@import "../../assets/scss/mCard.scss";
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



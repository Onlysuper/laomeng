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
                    <span>全部</span>
                </Radio>
                <Radio label="2">
                    <span>精选</span>
                </Radio>
            </RadioGroup>
        </div>
        <div class="m-card-body">
             <div class="title">
                标签
            </div>
            <div>
              <Tag type="border">
                  <img src="https://file.iviewui.com/dev/tag/tag-iview.png" alt="">
                  iview
              </Tag>
              <Tag type="border">
                  <img src="https://file.iviewui.com/dev/tag/tag-iview.png" alt="">
                  vue
              </Tag>
              <Tag type="border">
                  <img src="https://file.iviewui.com/dev/tag/tag-iview.png" alt="">
                  vuex
              </Tag>
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



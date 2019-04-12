<template>
    <article class="m-card">
        <div class="title">
            <!-- <Icon type="ios-options" /> -->
            <span>文章作者</span>
        </div>
        <div class="m-card-body">
          <div class="user-box">
              <div class="img-box">
                  <img :src="require('@/assets/img/chinese.png')" alt="">
              </div>
              <div class="name-box">
                  曹天骄
              </div>
          </div>
        </div>
    </article>
</template>
<style lang="scss" scoped>
@import "../../assets/scss/global.scss";
@import "../../assets/scss/mCard.scss";
.user-box{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    .img-box{
        width: 100px;
        // height: 100px;
        text-align: center;
        padding-right: 10px;
        img{
            max-width: 100%;
            max-height: 100%;
        }
    }
    .name-box{
        font-size: 16px;
        font-weight: bold;
    }
}
</style>



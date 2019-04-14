<template>
<div class="m-life-page">
  <Timeline>
      <TimelineItem>
        <p class="time">1976年</p>
        <div class="m-body">
          <div class="m-content">
            <Row justify="center">
             <Col :xs="{ span: 24, offset: 0 }" :ms="{ span: 24, offset: 0 }" :md="{ span: 6, offset: 0 }" :lg="{ span: 6, offset: 0 }">
              <div class="m-imgbox">
                <span>
                  <img :src="require('@/assets/img/chinese.png')" alt="">
                </span>
                <span>
                  <img :src="require('@/assets/img/chinese.png')" alt="">
                </span>
                <span>
                  <img :src="require('@/assets/img/chinese.png')" alt="">
                </span>
              </div>
              </Col>
            <Col  :xs="{ span: 24, offset: 0 }" :ms="{ span: 24, offset: 0 }" :md="{ span: 17, offset: 0 }" :lg="{ span: 17,offset: 0}">
              <div class="m-text">
                 <h2 class="m-title">今天天气真不错</h2>
                 <p>
                  今天天气真不错今天天气真不错今天天气真不错今天天气真不错
                 </p>
              </div>
               </Col>
            </Row>
          </div>
        </div>
      </TimelineItem>
     
  </Timeline>
   <m-loading-but :loading="loading" @handle="loadMore"></m-loading-but>
  
</div>
</template>
<script>
import mLoadingBut from  "@/components/m-Loading-But/index.vue";
export default {
  data() {
    return {
      loading:false
    }
  },
  components:{
        mLoadingBut
  },
   methods:{
        // 加载更多
       loadMore(){
           this.loading=true;
           this.getList();
       },
       getList(){
          
       }
   }
}
</script>
<style lang="scss" scoped>
.m-life-page{
  .time{
    font-size: 18px;
    line-height: 18px;
  }
  .m-body{
    padding: 10px;
    font-size: 14px;
    .m-content{
      display: flex;
      .m-imgbox{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        span{
          flex:1;
          min-width: 50px;
          margin-right: 10px;
          img{
            max-width: 100%;
            max-height: 100%;
          }
        }
      }
      .m-text{
        .m-title{
          font-weight: normal;
        }
        p{
          // margin-top: 10px;
        }
      }
    }
    
  }
}
</style>

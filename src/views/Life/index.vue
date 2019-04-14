<template>
<div class="m-life-page">
  <Timeline>
      <TimelineItem>
        <p class="time">1976年</p>
        <div class="m-body">
          <div class="m-content">
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
              <div class="m-text">
                 <h2 class="m-title">今天天气真不错</h2>
                 <p>
                  今天天气真不错今天天气真不错今天天气真不错今天天气真不错
                 </p>
              </div>
          </div>
        </div>
      </TimelineItem>
      <TimelineItem>
        <p class="time">1976年</p>
        <div  class="m-body">
           <div class="m-content">
              <div class="m-imgbox">
                <span>
                  <img :src="require('@/assets/img/chinese.png')" alt="">
                </span>
               
              </div>
              <div class="m-text">
                 <h2 class="m-title">今天天气真不错</h2>
                 <p>
                  今天天气真不错今天天气真不错今天天气真不错今天天气真不错
                 </p>
              </div>
          </div>
        </div>
      </TimelineItem>
      <TimelineItem>
         <p class="time">1976年</p>
         <div  class="m-body">
           <div class="m-content">
              <div class="m-imgbox">
                  <span>
                    <img :src="require('@/assets/img/chinese.png')" alt="">
                  </span>
                  <span>
                    <img :src="require('@/assets/img/chinese.png')" alt="">
                  </span>
                </div>
                <div class="m-text">
                  <h2 class="m-title">今天天气真不错</h2>
                  <p>
                    今天天气真不错今天天气真不错今天天气真不错今天天气真不错
                  </p>
                </div>
            </div>
         </div>
      </TimelineItem>
      <TimelineItem color="green">
         <p class="time">1976年</p>
         <div  class="m-body">
            <h2 class="m-title">今天天气真不错</h2>
            <div class="m-content">
                今天天气真不错
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
        flex:0 0 250px;
        display: flex;
        flex-wrap: wrap;
        span{
          flex:1 0 100px;
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

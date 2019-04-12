<template>
   <div class="home-page">
        <Row justify="center">
             <Col :xs="{ span: 24, offset: 0 }" :ms="{ span: 24, offset: 0 }" :md="{ span: 24, offset: 0 }" :lg="{ span: 16, offset: 1 }">
               <mlist @handle="articleDetail" :list="list"></mlist> 
               <m-loading-but :loading="loading" @handle="loadMore"></m-loading-but>
            </Col>
            <Col  :xs="{ span: 24, offset: 0 }" :ms="{ span: 24, offset: 0 }" :md="{ span: 24, offset: 0 }" :lg="{ span: 6,offset: 1}">
                <div class="aside-right">
                     <Affix :offset-top="90">
                        <m-article-type></m-article-type>
                     </Affix>
                </div>
            </Col>
        </Row>
   </div>
</template>
<style lang='scss'>
  @import "../../assets/scss/global.scss";
</style>
<script>
import mlist from  "@/components/m-List/index.vue";
import mLoadingBut from  "@/components/m-Loading-But/index.vue";
import mArticleType from  "@/components/m-Article-Type/index.vue";
import mTypeTag from  "@/components/m-Type-Tag/index.vue";
import {getArticleLists} from "@/http/api"
export default {
    data(){
        return {
            loading:false,
            list:[],
        }
    },
    components:{
        mLoadingBut,
        mlist,
        mArticleType,
        mTypeTag
    },
    methods:{
        // 加载更多
       loadMore(){
           this.loading=true;
           this.getList();
       },
       getList(){
           getArticleLists()({}).then(res=>{
               this.loading=false;
               if(res.code=='00'){
                   this.list = [...this.list,...res.data];
               }else{
                    this.$Message.warning('This is a warning tip');
               }
           })
       },
       // 详情页面
       articleDetail(item){
           console.log(1321);
           this.$router.push({
               name:"articleDetail"
           })
       }
    },
    created(){
        this.getList();
    }
}
</script>
<style>

</style>


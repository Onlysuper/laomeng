<template>
   <div class="home-page">
        <Row justify="center">
            <Col :xs="{ span: 22, offset: 1 }" :lg="{ span: 14, offset: 2 }">
               <mlist @handle="articleDetail" :list="list"></mlist> 
               <mLoadingBut :loading="loading" @handle="loadMore"></mLoadingBut>
            </Col>
            <Col  :xs="{ span: 22, offset: 1 }" :lg="{ span: 6,offset: 0}">
                <div class="aside-right">
                     <Affix :offset-top="90">
                        <m-user-card></m-user-card>
                        <m-type-tag></m-type-tag>
                     </Affix>
                </div>
            </Col>
        </Row>
   </div>
</template>
<style lang='scss'>
//   @import url(../../assets/scss/global.scss); 
</style>
<script>
import mlist from  "@/components/m-List/index.vue";
import mLoadingBut from  "@/components/m-Loading-But/index.vue";
import mUserCard from  "@/components/m-User-Card/index.vue";
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
        mUserCard,
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


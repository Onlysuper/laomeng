<template>
   <div class="home-page">
        <Row justify="center">
            <Col :xs="{ span: 22, offset: 1 }" :lg="{ span: 14, offset: 2 }">
                <mlist></mlist> 
            </Col>
            <Col  :xs="{ span: 22, offset: 1 }" :lg="{ span: 6,offset: 0}">
                <div class="aside-right">
                     <Affix :offset-top="90">
                        <m-user-card></m-user-card>
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
import mUserCard from  "@/components/m-User-Card/index.vue";
import {getArticalLists} from "@/http/api"
export default {
    components:{
        mlist,
        mUserCard
    },
    methods:{
       getList(){
           getArticalLists()({}).then(res=>{
               if(res.code=='00'){

               }else{

               }
           })
       }
    },
    created(){
        this.getList();
    }
}
</script>
<style>
.aside-right{
}
</style>


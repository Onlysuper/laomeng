<template>
   <div >
        <Row justify="center">
            <Col v-highlight :xs="{ span: 22, offset: 1 }" :lg="{ span: 14, offset: 2 }">
                {{article}}
                <div class="code">
                    <p></p>
                </div>
            </Col>
            <Col  :xs="{ span: 22, offset: 1 }" :lg="{ span: 6,offset: 0}">
                <div class="aside-right">
                     <Affix :offset-top="90">
                        <m-Article-Author></m-Article-Author>
                        <m-Article></m-Article>
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
import { getArticleDetail } from "@/http/api"
import mArticleAuthor from  "@/components/m-Article-Author/index.vue";
import mArticle from  "@/components/m-Article/index.vue";
export default {
     components:{
        mArticleAuthor,
        mArticle
    },
    data(){
       return {
           article:{}
       }
    },
    methods:{
        init(){
            getArticleDetail()({}).then(res=>{
                console.log(res);
                if(res.code=='00'){
                    this.article=res.data
                }
            })
        }
    },
    mounted(){
        this.init();
    }
}
</script>
<style>
</style>


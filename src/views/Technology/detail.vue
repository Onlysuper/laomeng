<template>
   <div >
        <Row justify="center">
            <Col :xs="{ span: 24, offset: 0 }" :ms="{ span: 24, offset: 0 }" :md="{ span: 24, offset: 0 }" :lg="{ span: 16, offset: 1 }">
                <div v-highlight>
                        <div v-html="markedHtml" class="javascript"></div>
                        <m-message></m-message>
                </div>
            </Col>
            <Col  :xs="{ span: 24, offset: 0 }" :ms="{ span: 24, offset: 0 }" :md="{ span: 24, offset: 0 }" :lg="{ span: 6,offset: 1}">
                <div class="aside-right">
                     <!-- <Affix :offset-top="90"> -->
                        <m-article-Author></m-article-Author>
                        <m-article></m-article>
                        <m-describle></m-describle>
                     <!-- </Affix> -->
                </div>
            </Col>
        </Row>
   </div>
</template>
<style lang='scss'>
@import "../../assets/scss/global.scss";
</style>
<script>
import marked from 'marked'
import { getArticleDetail } from "@/http/api"
import mArticleAuthor from  "@/components/m-Article-Author/index.vue";
import mArticle from  "@/components/m-Article/index.vue";
import mDescrible from  "@/components/m-Describle/index.vue";
import mMessage from  "@/components/m-Message/index.vue";
export default {
     components:{
        mArticleAuthor,
        mArticle,
        mDescrible,
        mMessage
    },
    data(){
       return {
           markedHtml:"",
           inputHtml:""
       }
    },
    methods:{
        init(){
            getArticleDetail()({}).then(res=>{
                if(res.code=='00'){
                    this.inputHtml = res.data.content;
                }
            })
        }
    },
    mounted(){
        marked.setOptions({
            renderer: new marked.Renderer(),
            gfm: true,
            tables: true,
            breaks: false,
            pedantic: false,
            sanitize: false,
            smartLists: true,
            smartypants: false,
            highlight: function (block) {
                return highlight.highlightAuto(code).value;
            }
        });
        this.markedHtml = marked(this.inputHtml)
        this.init();
    },
    watch:{
        inputHtml(value){
           this.$nextTick(()=>{
                this.markedHtml = marked(value)
           })
        }
    }
}
</script>
<style>
</style>


<template>
<!-- 留言板 -->
    <div class="m-message-page">
        <div class="m-leave-box">
            <div class="m-head">
                <div class="img-box">
                    <img  :src="require('@/assets/img/chinese.png')" alt="">
                </div>
                <div class="content-box">
                    一只老萌
                </div>
            </div>
            <div class="m-textarea">
                <div>
                    <!-- <Input v-model="leavemessage" type="textarea" :autosize="{minRows: 5,maxRows: 5}" placeholder="Enter something..."></Input> -->
                <p contenteditable="true" v-html="leavemessage"></p>
                </div>
                <div class="m-textarea-foot">
                    <div>
                        <m-emoticon @AppendInputValue="AppendMessageText"></m-emoticon>
                    </div>
                    <div>
                        <Button  type="primary">确定</Button>
                    </div>
                </div>
            </div>
        </div>
        <div class="m-common-container">
            <div class="m-common-list">
                <div class="m-img-box">
                    <img  :src="require('@/assets/img/chinese.png')" alt="">
                </div>
                <div class="m-content">
                    <p class="m-head">
                        <span class="m-nickname">k.cohen </span>
                        <time>03-12 11:58</time>
                    </p>
                    <div class="m-body">
                        怎么没有帖出来那张脑图。
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import mEmoticon from  "@/components/m-Emoticon/index.vue";
export default {
    data(){
        return {
            leavemessage:""
        }
    },
     components:{
        mEmoticon
     },
     methods:{
         //表情选中后追加在input
       AppendMessageText:function (EmotionChinese) {
         this.leavemessage += EmotionChinese;
       }
     }
}
</script>

<style lang="scss">
@import "../../assets/scss/global.scss";
.m-message-page{
    margin-top: 30px;
    width: 100%;
    //  background:#fff;
    .m-leave-box{
       
        .m-head{
            position: relative;
            width: 100%;
            height: 60px;
            z-index: 10;
            
            .img-box{
                width: 42px;
                height: 42px;
                position: absolute;
                left: 9px;
                top: 30px;
                z-index: 11;
                img{
                    border-radius: 42px;
                    display: block;
                    width: 42px;
                    height: 100%;
                }
            }
            .content-box{
                position: absolute;
                top: 15px;
                right: 0px;
                left:51px;
                display: flex;
                align-items: center;
                height: 100%;
                padding-left: 10px;
            }
        }
        .m-textarea{
            // height: 100px;
            // border: 1px solid $main-color;
            border-radius: 10px;
            textarea{
                padding-top:15px;
            }
            .m-textarea-foot{
                display: flex;
                flex-direction: row;
                padding: 10px 0;
                justify-content: space-between
            }
        }
        
    }
    .m-common-container{
        padding:10px;
        width: 100%;
        background:#fff;
        margin-top:10px;
        border-radius: 5px;
        .m-common-list{
            display: flex;
            flex-direction: row;
            .m-img-box{
                 width: 42px;
                height: 42px;
                img{
                    border-radius: 42px;
                    display: block;
                    width: 42px;
                    height: 100%;
                }
            }
            .m-content{
                padding-left: 10px;
                .m-head{
                    .m-nickname{
                        font-size: 16px;
                    }
                    time{
                        margin-left: 5px;
                        font-size: 10px;
                    }
                }
                .m-body{
                    padding:10px 0;
                }
            }
        }
    }
   
}
</style>

<template>
    <div class="m-list-container">
            <article class="m-list" v-for="(item,index) in list" :key="index">
                <h2 class="m-title" @click="handle(item)">{{item.title}}</h2>
                <div class="content">
                    <Row>
                        <Col :xs="24" :sm="24" :md="4" :lg="5">
                            <div class="img-wrap" @click="handle(item)">
                                <!-- <img :src="item.img" alt=""> -->
                            </div>  
                        </Col>
                        <Col :xs="24" :sm="24" :md="18" :lg="{ span: 18,offset: 1}">
                            <p>{{item.describe}}</p>
                        </Col>
                       
                    </Row>
                </div>
                <div class="footer">
                    <div>
                        <Tag type="border">
                            <img src="https://file.iviewui.com/dev/tag/tag-iview.png" alt="">
                            iview
                        </Tag>
                    </div>
                    <div>
                       <span class="comment-icon">
                           <Icon type="ios-chatbubbles-outline" /> 100
                       </span>
                    </div>
                </div>
            </article>
    </div>
</template>
<style lang="scss" scoped>
@import "../../assets/scss/global.scss";
.m-list-container{
    width:100%;
    .m-list{
        padding: 20px;
        background: #fff;
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
        .m-title{
            font-size: 18px;
            font-weight: normal;
            color:$m-tcolor1;
            cursor: pointer;
        }
        .content{
            margin-top: 15px;
            color:$m-tcolor2;
            font-size: 14px;
            .img-wrap{
                width: 100%;
                min-height: 120px;
                background:#eee;
                cursor: pointer;
                img{
                    max-width: 100%;
                }
            }
        }
        .footer{
            margin-top: 15px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            .comment-icon{
                cursor: pointer;
                color:$main-color;
            }
            .ivu-tag{
                cursor: pointer;
            }
        }
    }
}

</style>
<script>
export default {
    data(){
        return {
             time1: (new Date()).getTime() - 86400 * 3 * 1000,
        }
    },
    props:{
        list: {
            type: Array,
            default: []
        }
    },
    methods: {
       handle(item){
           this.$emit("handle",item);
       }
    }
}
</script>



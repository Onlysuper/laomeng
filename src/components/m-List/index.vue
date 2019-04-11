<template>
    <div class="m-list-container">
        <!-- <Scroll :on-reach-bottom="handleReachEdge" height="100%"> -->
            <article class="m-list" v-for="(item,index) in list" :key="index" @click="handle(item)">
                <div>
                    <Time :time="time1" />
                </div>
                <h1>{{item.title}}</h1>
                <div class="content">
                    <Row>
                        <Col :xs="22" :sm="22" :md="18" :lg="18">
                        <p>{{item.describe}}</p>
                        </Col>
                        <Col :xs="22" :sm="22" :md="4" :lg="4">
                        <div class="img-wrap">
                            <img :src="item.img" alt="">
                        </div>  
                        </Col>
                    </Row>
                </div>
                <div class="footer">
                    <div>
                        <Tag type="border">标签三</Tag>
                    </div>
                    <div>
                       <span class="comment-icon">
                           <Icon type="ios-chatbubbles-outline" /> 100
                       </span>
                    </div>
                </div>
            </article>
        <!-- </Scroll> -->
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
        h1{

        }
        .content{
            .img-wrap{
                img{
                    max-width: 100%;
                }
            }
        }
        .footer{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            .comment-icon{
                color:$main-color;
                icon{
                    
                }
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



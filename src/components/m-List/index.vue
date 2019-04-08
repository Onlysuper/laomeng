<template>
    <article class="m-list">
        <h1>Internet Explorer 9</h1>
        <div class="content">
            <Row>
                <Col :xs="22" :sm="22" :md="18" :lg="18">
                 <p>Windows Internet Explorer 9（简称 IE9）于 2011 年 3 月 14 日发布.....</p>
                </Col>
                <Col :xs="22" :sm="22" :md="4" :lg="4">
                 <div class="img-wrap">
                    <img src="https://dev-file.iviewui.com/xM14LMsynHq844vHLXuqx7VkO47hX9dO/small" alt="">
                  </div>  
                </Col>
            </Row>
        </div>
        <div class="footer">
            <div>
                <Tag type="border">标签三</Tag>
            </div>
            <div>
                <Tag type="border">标签三</Tag>
            </div>
        </div>
    </article>
</template>
<style lang="scss" scoped>
.m-list{
    padding: 20px;
    background: #fff;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    h1{

    }
    .content{
    //     display: flex;
    //     flex-direction: row;
    //     p{
    //         flex:1
    //     }
        .img-wrap{
            // flex: 0 0 200px;
            img{
                max-width: 100%;
            }
        }
    }
    .footer{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
}
</style>


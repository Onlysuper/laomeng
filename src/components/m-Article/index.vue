<template>
    <article class="m-list">
        <h1>文章信息</h1>
        <div>
            <p>发布时间：19天前</p>
            <p>阅读数：331</p>
            <div>
                 <Tag type="border">标签三</Tag>
                  <Tag type="border">标签三</Tag>
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
        display: flex;
        flex-direction: row;
        p{
            flex:1
        }
        .img-wrap{
            flex: 0 0 200px;
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


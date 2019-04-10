<template>
    <article class="m-list">
       <h1>文章类型</h1>
       <div>
             <Tag checkable color="primary">标签一</Tag>
             <Tag checkable color="success">标签二</Tag>
             <Tag checkable color="error">标签三</Tag>
             <Tag checkable color="warning">标签四</Tag>
             <Tag checkable color="warning">标签四</Tag>
              <Tag checkable color="warning">标签四</Tag>
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


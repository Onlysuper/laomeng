<template>
    <article class="m-list">
        <h1>关于作者</h1>
        <div>
            Aresn
        </div>
        <div>
            <div>
                <p>文章</p>
                <p>100</p>
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


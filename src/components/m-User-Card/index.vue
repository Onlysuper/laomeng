<template>
    <article class="m-list">
        23
        <!-- <h1>xx的名片</h1>
        <p>现居：四川省-成都市</p>
        <p>Email：dancesmiling@qq.com</p> -->
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


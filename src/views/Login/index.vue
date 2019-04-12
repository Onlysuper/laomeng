<template>
<div class="m-login-page">
    <div class="m-container">
        <div class="m-title">
            使用手机号登录
        </div>
        <div class="m-body">
            <div class="m-line">
                <Row>
                    <Col span="24">
                    <Input type="text"  placeholder="请输入手机号"></Input>
                    </Col>
                </Row>
             </div>
             <div class="m-line">
                <Row>
                    <Col span="18">
                        <Input type="text" placeholder="填写手机号"></Input>
                    </Col>
                    <Col span="4" offset="1">
                        <Button >获取验证码</Button>
                    </Col>
                </Row>
             </div>
            <div class="m-line">
                <Button long type="primary">登录</Button>
            </div>
            <div class="m-otherway">
                <span class="icon-weixin"></span>
                <span class="icon-qq"></span>
                <span class="icon-weibo"></span>
                <span class="icon-phone"></span>
            </div>
        </div>
    </div>
</div>    
</template>
<style lang='scss'>
@import "../../assets/scss/global.scss";
.m-login-page{
    .m-container{
        background:#fff;
        max-width: 500px;
        margin: 20px auto;
        padding: 10px;
        .m-title{
            padding: 10px 0;
            font-size: 18px;
            color: $m-tcolor1;
        }
        .m-body{
            .m-line{
                margin-top: 20px;
            }
            .m-otherway{
                text-align: center;
                font-size: 35px;
                margin: 10px;
                span{
                    margin: 10px;
                }
                .icon-weixin:before{
                    color:#3cb035;
                    font-size: 37px;
                }
                .icon-weibo:before{
                    color:#e6484f;
                }
                .icon-qq:before{
                    color:#38a3fd;
                }
                .icon-phone:before{
                    color:#5ab668;
                }
            }

        }
    }
}
</style>
<script>
export default {
    name:"login"
}
</script>


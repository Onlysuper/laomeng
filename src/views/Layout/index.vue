<template>
    <div class="layout">
        <Layout>
            <Header :style="{position: 'fixed', width: '100%',zIndex:'1'}">
                <Mmenu>
                    <template v-slot:search>
                        <Search></Search>
                    </template>
                </Mmenu>
            </Header>
            <Content :style="{margin: '88px auto 0', width: '90%',background: '#fff', minHeight: '500px'}">
                <div>
                  <router-view/>
                </div>
            </Content>
            <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
        </Layout>
    </div>
</template>
<style lang='scss'>
  @import url(../../assets/scss/global.scss); 
</style>
<style scoped lang='scss'>
    .layout{
        background: transparent; 
        position: relative;
        border-radius: 4px;
        overflow: hidden;
        display: flex;
        .ivu-layout,.ivu-layout-content,.ivu-layout-footer{
            background: transparent !important; 
        }
    }
    .layout-footer-center{
        text-align: center;
    }
</style>
<script>
import Mmenu from  "@/components/m-Menu/index.vue";
import Search from  "@/components/m-Search/index.vue";
export default {
    components:{
        Mmenu,
        Search
    }
}
</script>

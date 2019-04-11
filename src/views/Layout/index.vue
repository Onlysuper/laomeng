<template>
    <div class="layout">
        <Layout>
            <Header :style="{position: 'fixed', width: '100%',zIndex:'11',background:'#fff'}">
                <m-header>
                    <template v-slot:search>
                        <Search></Search>
                    </template>
                    <template v-slot:searchmb>
                        <SearchMb></SearchMb>
                    </template>
                </m-header>
            </Header>
            <Content :style="{margin: '88px auto 0', width: '90%',background: '#fff', minHeight: '500px'}">
                <div>
                  <router-view/>
                </div>
            </Content>
            <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
        </Layout>
        <template>
            <BackTop></BackTop>
        </template>
    </div>
</template>
<style lang='scss'>
  @import "../../assets/scss/global.scss";
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
        .ivu-layout-header{
            padding: 0 30px
        }
    }
    .layout-footer-center{
        text-align: center;
    }
    .ivu-layout-header{
        box-shadow: 0 1px 1px rgba(0,0,0,.08)
    }
</style>
<script>
import mHeader from  "@/components/m-Header/index.vue";
import Search from  "@/components/m-Search/index.vue";
import SearchMb from  "@/components/m-SearchMb/index.vue";
export default {
    components:{
        mHeader,
        Search,
        SearchMb
    }
}
</script>

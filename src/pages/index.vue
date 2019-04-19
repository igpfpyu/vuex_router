<template>
    <el-container class="main-page">
        <el-header>
            <head-box></head-box>
        </el-header>
        <router-view></router-view>
    </el-container>
</template>
<script>
    import HeadBox from "../components/HeadBox/HeadBox";
    export default {
        name: "index",
        components: {HeadBox},
        data(){
            return {
                watchPage:"",
                value:"",
            }
        },
        created() {
            // this.$post('/todos',{
            //     params:{
            //         user:'name',
            //         age:'11',
            //     }
            // }).then(response=>{
            //     console.log(response);
            // })
        }
    }
</script>
<style scoped lang="less">
    .main-page{
        height:100%;
    }
    body > .el-container {
        margin-bottom: 40px;
    }
</style>
<style lang="less">
    @import "../assets/base";
    .main-page{
        .el-header, .el-footer {
            background-color: rgba(0, 0, 0, 0.5);
        }
        .el-aside {
            background-color: rgba(0, 0, 0, 0.4);
        }
        .el-menu.el-menu--horizontal{
            border:0px;
        }
        .el-menu{
            background-color:transparent;
            border:0;
        }
        .el-menu--horizontal>.el-menu-item,
        .el-menu--horizontal>.el-submenu:focus .el-submenu__title,
        .el-menu--horizontal>.el-submenu:hover .el-submenu__title,
        .el-menu--horizontal>.el-submenu .el-submenu__title{
            color:@fontColor;
            border:0;
        }
        .el-menu--horizontal>.el-menu-item:not(.is-disabled):focus,
        .el-menu--horizontal>.el-menu-item:not(.is-disabled):hover,
        .el-menu--horizontal>.el-submenu .el-submenu__title:hover,
        .el-menu--horizontal .el-menu-item:not(.is-disabled):focus,
        .el-menu--horizontal .el-menu-item:not(.is-disabled):hover,
        .el-menu--horizontal > .is-active{
            color:#fff;
            background-color:rgba(0, 0, 0, 0.4);
        }

        .el-submenu__title i{
            color:@fontColor;
        }
    }
</style>

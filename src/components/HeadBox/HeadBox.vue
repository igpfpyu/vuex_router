<template>
    <div class="head-box">
        <div class="left-menu">
            <div class="logo">logo</div>
            <div class="nav">
                <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                    <el-menu-item index="1">处理中心</el-menu-item>
                    <el-submenu index="2">
                        <template slot="title">我的工作台</template>
                        <el-menu-item index="2-1">选项1</el-menu-item>
                        <el-menu-item index="2-2">选项2</el-menu-item>
                        <el-menu-item index="2-3">选项3</el-menu-item>
                        <el-submenu index="2-4">
                            <template slot="title">选项4</template>
                            <el-menu-item index="2-4-1">选项1</el-menu-item>
                            <el-menu-item index="2-4-2">选项2</el-menu-item>
                            <el-menu-item index="2-4-3">选项3</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-menu-item index="4">订单管理</el-menu-item>
                </el-menu>
            </div>
        </div>
        <div class="user">
            <a>请登陆</a>
            <a>免费注册</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HeadBox",
        data(){
            return {
                activeIndex:"1"
            }
        },
        methods:{
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped lang="less">
    @import "../../assets/base";
.head-box{
    width:100%;
    height:60px;
    display: flex;
    justify-content:space-between;
    flex-direction: row;
    align-items:center;
    .left-menu{
        display: flex;
        flex-direction: row;
        align-items:center;
        .logo{
            width:140px;
        }
    }
    .user{
        a{
            font-size:14px;
            cursor: pointer;
            &:hover{
                color:@fontColor
            }
        }
    }
}
</style>
<style lang="less">
    @import "../../assets/base";
    .nav{
        .el-menu.el-menu--horizontal{
            border:0px;
        }
        .el-menu{
            background-color:transparent;
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

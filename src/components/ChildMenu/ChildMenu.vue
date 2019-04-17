<template>
    <el-aside class="left-sub-menu" width="180px">
        <el-menu :default-active="activeIndex" router
                 @select="handleSelect">
            <el-submenu :index="menu.url" v-for="(menu, index) in suMenus" :key="index">
                <template slot="title">{{menu.name}}</template>
                <el-menu-item  v-for="(submenu, subIndex) in menu.childs" :index="submenu.url" :key="subIndex">{{submenu.name}}</el-menu-item>
            </el-submenu>
        </el-menu>
        <div class="addmenu-box">
            <el-button type="primary" size="mini">添加</el-button>
        </div>
    </el-aside>

</template>

<script>
    export default {
        name: "ChildMenu",
        props:{
            suMenus:{
                type:Array,
            }
        },
        data(){
            return {
                activeIndex:"1"
            }
        },
        methods:{
            handleSelect(val){
                this.$emit("handleSelect", val)
            }
        }
    }
</script>
<style scoped lang="less">
    .addmenu-box{
        width:100%;
        padding-top:20px;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

</style>
<style lang="less">
    @import "../../assets/base";
    .left-sub-menu{
        .el-submenu__title, .el-menu-item{
            color:@fontColor;
            border:0;
        }
        .el-menu-item, .el-submenu__title{
            height:42px;
            line-height:42px;
        }
        .el-submenu__title{
            background-color:rgba(0, 0, 0, 0.4);
        }
        .el-menu-item{
            background-color:rgba(0, 0, 0, 0.2);
            margin-bottom:1px;
        }
        .el-menu{
            background-color:transparent;
            border:0;
        }
        .el-submenu .el-menu-item{
            width:100%;
        }
    }
</style>

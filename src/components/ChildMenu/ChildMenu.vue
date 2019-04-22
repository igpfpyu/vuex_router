<template>
    <el-aside class="left-sub-menu" width="180px">
        <el-menu :default-active="$route.path" router
                 @select="handleSelect">
            <el-menu-item
                    v-if="!isChildType"
                    v-for="(submenu, subIndex) in suMenus"
                    :index="submenu.url"
                    :key="subIndex"
            >{{submenu.name}}</el-menu-item>
            <el-submenu v-else :index="menu.url" v-for="(menu, index) in suMenus" :key="index" :id="menu.id">
                <template slot="title">{{menu.name}}</template>
            </el-submenu>
        </el-menu>
        <div v-if="isAdd" class="addmenu-box">
            <el-button type="primary" @click="addFastNav" size="mini">添加快捷导航</el-button>
        </div>
    </el-aside>

</template>

<script>
    export default {
        name: "ChildMenu",
        props:{
            suMenus:{
                type:Array,
            },

            isChildType:{   //是否有子级导航 false ：没有， true : 有，
                type:Boolean,
                // default:true,
            }
        },
        data(){
            return {
                activeIndex:this.$route.path,
                isAdd:false,
            }
        },
        created(){
            if(this.$route.path==="/") this.isAdd=true;
        },
        methods:{
            handleSelect(val){
                this.$emit("handleSelect", val)
            },
            addFastNav(){
                this.$emit('addFastNav');
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
            /*background-color:rgba(0, 0, 0, 0.2);*/
            margin-bottom:1px;
        }
        .el-menu-item:not(.is-disabled):focus,
        .el-menu-item:not(.is-disabled):hover,
        .el-submenu .el-submenu__title:hover,
        .el-menu-item:not(.is-disabled):focus,
        .el-menu-item:not(.is-disabled):hover,
        .is-active{
            color:#fff;
            background-color:rgba(0, 0, 0, 0.3);
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

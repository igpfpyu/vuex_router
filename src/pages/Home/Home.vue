<template>
    <el-container>
        <child-menu :suMenus="suMenus" @handleSelect="handleSelect"></child-menu>
        <el-container>
            <div>divd</div>
            <router-view></router-view>
        </el-container>
    </el-container>
</template>

<script>
    import ChildMenu from "../../components/ChildMenu/ChildMenu";
    export default {
        name: "Home",
        components: {ChildMenu},
        data(){
            return {
                activeIndex:"1",
                suMenus:[
                    { name:'快捷菜单',  url:'/home', id:"1", childs:[
                            {id:"1000", name:'管理首页', url:'/home'},
                            {id:"1001", name:'在线课程', url:'/lesson/lesson-list'},
                        ]
                    }
                ]
            }
        },
        methods:{
            handleSelect(val){
                console.log(val)
            }
        }
    }
</script>

<style scoped lang="less">
    .left-menu{
        width:160px;
    }

</style>

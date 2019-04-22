<template>
    <el-container>
        <child-menu :suMenus="suMenus"
                    :isChildType="false"
                    @handleSelect="handleSelect"
                    @addFastNav="addFastNav"
        ></child-menu>
        <el-container>
            <router-view></router-view>
        </el-container>
    </el-container>
</template>

<script>
    import Menu from '../../../assets/navigation';
    import ChildMenu from "../../../components/ChildMenu/ChildMenu";
    export default {
        name: "Lesson",
        components: {ChildMenu},
        data(){
            return {
                suMenus:Menu[1].childs
            }
        },
        methods:{
            addFastNav(){

            },
            handleSelect(){
                console.log('a')
            }
        }
    }
</script>

<style scoped>

</style>

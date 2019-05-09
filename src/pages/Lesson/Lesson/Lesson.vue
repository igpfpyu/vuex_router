<template>
    <el-container>
        <child-menu :suMenus="suMenus"
                    :isChildType="true"
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
        },
        created() {
            console.log(this.$store.state.LessonX.lesson);
            console.log(this.$store);
        }
    }
</script>

<style scoped>

</style>

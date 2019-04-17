<template>
    <el-container class="main-page">
        <el-header>
            <head-box></head-box>
        </el-header>
        <el-container>
            <el-aside width="160px">{{watchPage}}</el-aside>
            <el-container>
                <el-main>Main</el-main>
<!--                <el-footer>Footer</el-footer>-->
            </el-container>
        </el-container>
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
            this.$post('/todos/',{
                params:{
                    user:'name',
                    age:'11',
                }
            }).then(response=>{
                console.log(response);
            })
        }
    }
</script>
<style scoped lang="less">

    .main-page{
        height:100%;
    }
    .el-header, .el-footer {
        background-color: rgba(0, 0, 0, 0.5);

    }
    .el-aside {
        background-color: rgba(0, 0, 0, 0.4);
    }
    .el-main {
        color: #d5e8ed;
        text-align: center;
        line-height: 160px;
    }
    body > .el-container {
        margin-bottom: 40px;
    }
</style>

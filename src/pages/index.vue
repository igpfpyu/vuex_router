<template>
    <el-container class="main-page">
        <el-header>{{value | toUpperCase}}</el-header>
        <el-container>
            <el-aside width="200px">{{watchPage}}</el-aside>
            <el-container>
                <el-main>Main</el-main>
                <el-footer>Footer</el-footer>
            </el-container>
        </el-container>
    </el-container>
</template>
<script>
    export default {
        name: "index",
        data(){
            return {
                value:'abc',
                watchPage:"abc"
            }
        },
        filters:{
            toUpperCase(val){
                return val.toUpperCase();
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
        background-color: #B3C0D1;

    }
    .el-aside {
        background-color: #D3DCE6;
    }
    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 160px;
    }
    body > .el-container {
        margin-bottom: 40px;
    }
</style>

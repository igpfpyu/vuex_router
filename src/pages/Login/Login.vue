<template>
    <el-button type="scuuess" plain @click="loginClick">登录</el-button>
</template>

<script>
    export default {
        name: "Login",
        methods:{
            loginClick(){
                this.$router.push({name:"index"});
            }
        }
    }
</script>

<style scoped>

</style>

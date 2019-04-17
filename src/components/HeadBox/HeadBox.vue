<template>
    <div class="head-box">
        <div class="left-menu">
            <div class="logo">logo</div>
            <div class="nav">nav</div>
        </div>
        <div>user</div>
    </div>
</template>

<script>
    export default {
        name: "HeadBox"
    }
</script>

<style scoped lang="less">
.head-box{
    width:100%;
    display: flex;
    justify-content:space-between;;
    flex-direction: row;
    .left-menu{
        display: flex;
        flex-direction: row;
        .logo{
            width:140px;
            height:100%;
            line-height:60px;
        }
    }

}
</style>

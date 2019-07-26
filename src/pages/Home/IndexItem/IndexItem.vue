<template>
    <div class="out-padding">
        <div>{{123131 | num}}</div>
        <div>{{"1231231" | nums}}</div>
        <div>{{'11' | isShowFilter}}</div>
        <div class="box">
            <Chart :options="polar" style="height:400px;"></Chart>
        </div>
    </div>
</template>
<script>
    import 'echarts/lib/chart/pie';
    import {mapGetters} from 'vuex';
    export default {
        name: "IndexItem",
        data(){
            return {
                isShow:true,
                message:212121,
            }
        },
        computed:{
            ...mapGetters('HomeStore',["polar"])
        },
        created(){
           console.log(this.Global.isNull('{}'));
           console.log(this.Global.isMobile('15801913352'))
        },
    }
</script>

<style scoped lang="less">
    .box{
        width:100%;
        height:400px;
        background-color:rgba(0, 0, 0,0.1);
        -webkit-border-radius: 2px;
        -moz-border-radius: 2px;
        border-radius: 2px;
    }

</style>

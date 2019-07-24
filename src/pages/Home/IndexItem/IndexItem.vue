<template>
    <div class="out-padding">
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
        computed:{
            ...mapGetters('HomeStore',["polar"])
        },
        created(){
           this.Global.isNull('aaaa')
        },
        data(){
            return {

            }
        }
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

<template>
    <div class="out-padding">
        <div class="box">
            <Chart :options="polar" style="height:400px;"></Chart>
        </div>
    </div>
</template>
<script>
    import 'echarts/lib/chart/pie'
    export default {
        name: "IndexItem",
        data(){
            return {
                polar: {
                    series: {
                            name: '访问来源',
                            type: 'pie',
                            radius: '55%',
                            data:[
                                {value:235, name:'视频广告'},
                                {value:274, name:'联盟广告'},
                                {value:310, name:'邮件营销'},
                                {value:335, name:'直接访问'},
                                {value:400, name:'搜索引擎'}
                            ],
                            roseType: 'angle',
                            label: {
                                normal: {
                                    textStyle: {
                                        color: 'rgba(255, 255, 255, .6)',
                                        fontSize:"14"
                                    }
                                }
                            },
                            labelLine: {
                                normal: {
                                    lineStyle: {
                                        color: 'rgba(255, 255, 255, 0.6)'
                                    }
                                }
                            },
                            itemStyle: {
                                normal: {
                                    // color: '#eb6234',
                                    shadowBlur: 200,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                    }
                }
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

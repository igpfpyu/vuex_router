<template>
    <div class="out-padding">
        <div>{{123131 | num}}</div>
        <div>{{"1231231" | nums}}</div>
        <div>{{'11' | isShowFilter}}</div>
        <button v-on:click="isShow = !isShow">点击</button>
        <transition name="fade">
        <div v-if="isShow" style="width: 200px;">
            <p class="news-cont">当然，在实际的应用中，想这种限制汉字的个数，达到前端展示的话，可以用下面的css ,替换，目前在主流的设备上是可以兼容的，如果不是非常兼容低版本的，可直接用css代替过滤器：</p>
        </div>
        </transition>

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
    //缩短文字显示
    .news-cont {
        font-size: 12px;
        color: #fff;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity 0.2s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>

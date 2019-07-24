import IndexItemGetter from './IndexItemGetter';
import IndexItemAction from './IndexItemAction';
import IndexItemMutation from './IndexItemMutation';
const state={
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
export default {
    namespaced:true,
    state:state,
    getters:IndexItemGetter,
    actions:IndexItemAction,
    mutations:IndexItemMutation
}
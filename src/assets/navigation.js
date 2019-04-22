export default [
    {
        url:"/", name:"管理首页", id:1010, childs:[
            {id:"1011", name:'在线课程1', url:'/'},
        ]
    }, {
        url:"/lesson", name:"在线课程", id:1020, childs:[
            {id:"1021", name:'课程列表', url:'/lesson'},
        ]
    }, {
        url:"/facem", name:"面授培训", id:1030, childs:[

        ]
    }, {
        url:"/exam", name:"在线考试", id:1040,childs:[

        ]
    },
    {url:"/training", name:"培训实施", id:1050,childs:[]},
    {url:"/question", name:"互动", id:1060,childs:[]},
    {url:"/resource", name:"培训报表", id:1070,childs:[]},
    {url:"/people", name:"人员管理", id:1080,childs:[]},
    {url:"/system", name:"系统管理", id:1090,childs:[]},
    {url:"/oam",name:'运维管理', id:1100,childs:[]}
];

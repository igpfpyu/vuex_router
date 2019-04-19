<template>
    <el-container>
        <child-menu :suMenus="suMenus"
                    :isChildType="false"
                    @handleSelect="handleSelect"
                    @addFastNav="addFastNav"
        ></child-menu>
        <el-container>
            <router-view></router-view>
        </el-container>
        <el-dialog
                title="添加快捷菜单"
                :visible.sync="dialogVisible"
                width="40%"

                :before-close="handleClose">
            <div>
                <el-transfer :titles="titles" v-model="value" :data="menus"></el-transfer>
            </div>
        </el-dialog>
    </el-container>
</template>

<script>
    import ChildMenu from "../../components/ChildMenu/ChildMenu"
    import Menus from '../../assets/navigation'
    export default {
        name: "Home",
        components: {ChildMenu},
        data(){
            const generateData = _ => {
                const menes = [];
                for (let i =0; i < Menus.length; i++) {
                    menes.push({
                        key:"0-"+i,
                        label: Menus[i].name,
                        disabled:true,
                    });
                    if(Menus[i].childs.length>1){
                        for( let j=0; j<Menus[i].childs.length; j++){
                            menes.push({
                                key: (i+1)+"-"+j,
                                label:Menus[i].childs[j].name,
                                disabled:false,
                            });
                        }
                    }
                }
                return menes;
            };
            return {
                titles:['全导航','快捷导航'],
                activeIndex:"1",
                dialogVisible:false,
                suMenus:[
                    {id:"1001", name:'在线课程', url:'/'},
                ],
                value:["1-0"],
                menus:generateData()
            }
        },
        methods:{
            handleSelect(val){
                console.log(val)
            },
            addFastNav(){
                this.dialogVisible=true;
            },
            //关闭弹窗
            handleClose(done){
                console.log(done);
                this.$confirm('确认关闭？')
                    .then(_ => {
                        done();
                    })
                    .catch(_ => {});
            }
        }
    }
</script>

<style scoped lang="less">
    .left-menu{
        width:160px;
    }

</style>

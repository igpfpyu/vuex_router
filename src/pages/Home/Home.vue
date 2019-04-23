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
                class="dialog"
                :before-close="handleClose">
            <div>
                <el-transfer :titles="titles"
                             v-model="inMenus"
                             :data="menus"
                             :props="{
                                  key: 'id',
                                  label: 'name'
                                }"
                             @change="rightItemChange"
                             @left-check-change="leftCheckChange"
                ></el-transfer>
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
                        id:Menus[i].id,
                        name: Menus[i].name,
                        disabled:true,
                    });
                    if(Menus[i].childs.length>=1){
                        for( let j=0; j<Menus[i].childs.length; j++){
                            menes.push({
                                id:Menus[i].childs[j].id,
                                name:Menus[i].childs[j].name,
                                url:Menus[i].childs[j].url,
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
                suMenus:[],
                inMenus:["1011"],
                menus:generateData()
            }
        },
        created(){
            for(let i=0; i<this.inMenus.length; i++){
                for(let j=0; j<this.menus.length; j++){
                    if(this.inMenus[i]===this.menus[j].id){
                        this.suMenus.push(this.menus[j]);
                    }
                }
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
                done();
                // this.$confirm('确认关闭？')
                //     .then(_ => {
                //         done();
                //     })
                //     .catch(_ => {});
            },
            rightItemChange(value, direction, movedKeys) {
                if (direction === "right") {
                    let newItem = [];
                    for (let i = 0; i < movedKeys.length; i++) {
                        for (let j = 0; j < this.menus.length; j++) {
                            if (movedKeys[i] === this.menus[j].id) {
                                newItem.push(this.menus[j]);
                            }
                        }
                    }
                    this.suMenus = this.suMenus.concat(newItem);
                } else if (direction === "left"){
                    for (let i = 0; i < movedKeys.length; i++) {
                        for (let j = 0; j < this.suMenus.length; j++) {
                            if (movedKeys[i] === this.suMenus[j].id) {
                                this.suMenus.splice(j,1);
                            }
                        }
                    }

                }
            },
            leftCheckChange(value, direction, movedKeys){
            }
        }
    }
</script>

<style scoped lang="less">
    .left-menu{
        width:160px;
    }
</style>
<style lang="less">
    .el-dialog{
        min-width:540px;
        .el-dialog__body{
            display: flex;
            flex-direction: row;
            justify-content: center;
        }
    }
</style>

<template>
    <div class="out-padding">
        <p>LessonList</p>
        <p v-if="isLesson">isLesson</p>
        <p v-if="les==12">{{les===12}}</p>
        <el-button type="success" @click="itemClick">修改</el-button>
    </div>
</template>

<script>
    import {mapState, mapGetters, mapActions} from 'vuex';
    export default {
        name: "LessonList",
        data(){
            return {
               // les:""
            }
        },
        computed:{
            ...mapState('lesson',{
                les:state=>state.les
            }),
            ...mapGetters('lesson',[
                'isLesson'
            ])
        },
        methods:{
            ...mapActions('lesson',{
                itemClick:{
                    type:'itemClick',
                    payload:30
                }
            })
            // itemClick(){
            //     this.$store.dispatch('itemClick', 20);
            // }
        },
        created() {
            // this.$store.dispatch('itemClick', 20);
        }
    }
</script>

<style scoped>

</style>

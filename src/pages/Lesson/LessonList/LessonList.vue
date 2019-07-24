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
            ...mapState('LessonStore',{
                les:state=>state.les
            }),
            ...mapGetters('LessonStore',[
                'isLesson'
            ])
        },
        methods:{
            ...mapActions('LessonStore',{
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

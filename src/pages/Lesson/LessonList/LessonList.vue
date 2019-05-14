<template>
    <div class="out-padding">
        <p>LessonList</p>
        <p v-if="isLesson">isLesson</p>
        <el-button type="success" @click="itemClick">修改</el-button>
    </div>
</template>

<script>
    import {mapState,mapGetters, mapActions} from 'vuex';
    export default {
        name: "LessonList",
        computed:{
            // ...mapState({
            //     isLesson
            // }),
            ...mapGetters([
                'isLesson'
                ])
        },
        methods:{
            ...mapActions({
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

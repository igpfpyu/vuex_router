<template>
    <div class="out-padding">
        <p>LessonList</p>
        <p v-if="$store.getters.isLesson">isLesson</p>
        <el-button type="success" @click="itemClick">修改</el-button>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    export default {
        name: "LessonList",
        computed:{
            ...mapState({
                lesson
            })
        },
        methods:{
            itemClick(){
                this.$store.dispatch('itemClick', 30)
            }
        },
        created() {
            this.$store.dispatch('itemClick', 20);
        }
    }
</script>

<style scoped>

</style>

<template>
  <div id="app">
      <transition name="slide-fade">
          <router-view />
      </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
    data(){
      return {
          user:"abc"
      }
    },
    methods:{
      itemClick(params){
          this.$router.push({
              path:`/${this.user}`,
          })
      }
    }
}
</script>

<style lang="less">
    @import "./assets/base";
    html, body,#app{
        width:100%;
        height:100%;
        overflow:hidden;
        overflow-y:auto;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #d5e8ed;
    }
    //<!--#125c69, #2c8196 -->
    #app {
      color: #d5e8ed;
        .bgGradient;
        min-width:1300px;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>

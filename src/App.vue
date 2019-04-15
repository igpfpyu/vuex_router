<template>
  <div id="app">
      <div>
          <button @click="itemClick(user)">首页</button>
      </div>
    <router-view/>
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

<style>
    html, body,#app{
        width:100%;
        height:100%;
        overflow:hidden;
        overflow-y:auto;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
#app {
  color: #2c3e50;
}
</style>

<template>
  <div id="app">
    <Nav/>
    <router-view/>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
export default {
  components: {
    Nav
  }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
body{
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
.el-date-picker, 
.el-select-dropdown,
.el-time-spinner{
  font-family: "Helvetica"
}
</style>

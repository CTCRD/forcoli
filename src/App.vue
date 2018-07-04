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
  text-align: center;
  color: #2c3e50;
}
.el-date-picker__header-label, 
.el-select-dropdown__item,
.el-date-picker table{
  font-family: "Helvetica"
}
</style>

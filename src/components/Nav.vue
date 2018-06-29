<template> 
  <div class="nav">
    <img class="logo" src="../assets/forcoli_logo.png">
    <ul>
      <li><router-link to="/calendario">Calendario</router-link></li>
      <li><router-link to="/formularios">Formularios</router-link></li>
      <li><router-link to="/inicio">Iniciar Sesión</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  data: {

  }
}
</script>

<style scoped lang="scss">
.nav{
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(66, 66, 66);
  height: 50px;

  img{
    height: 40px;
    width: auto;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    overflow: hidden;
    height: 100%;
    li{
      float: left;

      a{
        text-decoration: none;
        color: white;
        display: block;
        text-align: center;
        padding: 16px;  

        &:hover{
          background-color: #111111;
        }
      }
    }
  }
}
</style>
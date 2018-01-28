<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
    <footer>
      <footer-menu></footer-menu>
    </footer>
  </div>
</template>

<script>
import menuFooter from './components/menuFooter'
export default {
  name: 'App',
  components: {
    'footer-menu': menuFooter
  }
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
}
footer{
  position: fixed;
  bottom: 0;
  width: 100%;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

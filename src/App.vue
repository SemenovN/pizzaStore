<template>
  <div id="app">
    <div class="container">
      <location-name></location-name>
      <router-view></router-view>
      <navigation-bar></navigation-bar>
    </div>
  </div>
</template>

<script>
    import NavigationBar from './components/NavigationBar.vue'
    import LocationName from './components/LocationName.vue'
export default {
  name: 'app',
  components: {
      NavigationBar,
      LocationName
  }
}
</script>

<style lang="scss">
#app {
  min-height: 100vh;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ecf0f1;
  padding-top: 5rem;
  padding-bottom: 7.5rem;
  background-color: #323234;
}

.container {
  max-width: 732px;
  margin: 0 auto;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

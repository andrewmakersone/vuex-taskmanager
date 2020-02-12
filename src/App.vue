<template>
  <div id="app">
    <h1>Tasks application based on VUEX</h1>
    <hr>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/tasks">Tasks</router-link>
    </div>
    <hr>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 10px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

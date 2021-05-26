<template>
  <div id="app">
    <Tab></Tab>
    <SideBar></SideBar>
  </div>
</template>

<script>
import Tab from './components/Tab'
import SideBar from './components/SideBar'

export default {
  name: 'App',
  data: () => {
    return {
      navOpen: false
    }
  },
  components: {
    Tab,
    SideBar
  }
}
</script>

<style lang="scss">
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-size: 1rem;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #app {
    width: 100%;
    min-height: 100vh;
    background: url('./assets/app_bg.jpg') center center;
    background-size: cover;
  }
</style>

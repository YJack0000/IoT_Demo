<template style="margin: 0px">
<div>
  <Container/>
</div>
</template>

<script>
import Container from './views/Container.vue'

export default {
  name: 'App',
  components: {
    Container
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

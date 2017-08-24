<template>
  <div id="app">
    <layout></layout>
  </div>
</template>

<script>
import Layout from './components/common/Layout/Layout'

export default {
  name: 'app',
  components: {
      Layout
  }
}
</script>

<style>
#app {
  font-family: '楷体','微软雅黑', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  overflow: hidden;
}
</style>

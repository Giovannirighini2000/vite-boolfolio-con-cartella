<script>
import NavBar from './components/NavBar.vue'
export default {
  components: {
    NavBar
  }
}
</script>

<template>
  <div class="container">
    <header class="title">
      <NavBar></NavBar>
    </header>

    <router-view></router-view>
    <footer>
      footer page
    </footer>
  </div>
</template>

<style >
.title {
  padding: 2rem 0;
}
</style>
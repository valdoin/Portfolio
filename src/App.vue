<template>
  <head>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100..900&display=swap" rel="stylesheet">
    </head>
  <div id="app">
    <NavbarComponent/>
    <router-view />
  </div>
</template>

<script>
import NavbarComponent from './components/NavbarComponent.vue';
export default {
  name: 'App',
  components: {
    NavbarComponent
  },
};
</script>

<style>
#app {
  position: relative;
  overflow: hidden;
}

.router-view-enter-active,
.router-view-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.router-view-enter,
.router-view-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>

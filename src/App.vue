<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    window.addEventListener('keydown', this.handleKeydown);
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  },
  methods: {
    handleKeydown(event) {
      if (event.key === ' ') {
        event.preventDefault();
        this.navigateNext();
      }
    },
    navigateNext() {
      const routes = ['/', '/about', '/skills', '/projects', '/contact'];
      const currentRoute = this.$route.path;
      const currentIndex = routes.indexOf(currentRoute);
      const nextIndex = (currentIndex + 1) % routes.length;
      this.$router.push(routes[nextIndex]);
    }
  }
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

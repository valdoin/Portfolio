<template>
  <head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100..900&display=swap" rel="stylesheet">
  </head>
  <div id="app">
    <NavbarComponent />
    <router-view />
  </div>
  <footer class="footer">
    <p>&copy; 2024 ANDRIKO Olivier. All rights reserved.</p>
  </footer>
</template>

<script>
import NavbarComponent from './components/NavbarComponent.vue';

export default {
  components: {
    NavbarComponent
  },
  name: 'App',
  mounted() {
    window.addEventListener('keydown', this.handleKeydown);
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  },
  methods: {
    handleKeydown(event) {
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        this.navigateNext();
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault();
        this.navigatePrevious();
      }
    },
    navigateNext() {
      const routes = ['/', '/about', '/skills', '/projects', '/contact'];
      const currentRoute = this.$route.path;
      const currentIndex = routes.indexOf(currentRoute);
      const nextIndex = (currentIndex + 1) % routes.length;
      this.$router.push(routes[nextIndex]);
    },
    navigatePrevious() {
      const routes = ['/', '/about', '/skills', '/projects', '/contact'];
      const currentRoute = this.$route.path;
      const currentIndex = routes.indexOf(currentRoute);
      const previousIndex = (currentIndex - 1 + routes.length) % routes.length;
      this.$router.push(routes[previousIndex]);
    }
  }
};
</script>

<style>
#app {
  position: relative;
  overflow: hidden;
}

.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  color: black;
  padding: 10px;
  text-align: center;
}
</style>

<template>
  <head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@200..900&display=swap" rel="stylesheet">
  </head>
  <div id="app" ref="app">
    <LanguageSwitchComponent />
    <ThemeSwitchComponent />
    <NavbarComponent />
    <router-view />
  </div>
</template>

<script>
import Hammer from 'hammerjs';
import NavbarComponent from './components/NavbarComponent.vue';
import LanguageSwitchComponent from './components/LanguageSwitchComponent.vue';
import ThemeSwitchComponent from './components/ThemeSwitchComponent.vue';

export default {
  components: {
    NavbarComponent,
    LanguageSwitchComponent,
    ThemeSwitchComponent
  },
  name: 'App',
  mounted() {
    window.addEventListener('keydown', this.handleKeydown);
    this.addSwipeListeners();
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
    this.removeSwipeListeners();
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
    },
    addSwipeListeners() {
      const appElement = this.$refs.app;
      this.hammer = new Hammer(appElement);
      this.hammer.on('swipeleft', this.navigateNext);
      this.hammer.on('swiperight', this.navigatePrevious);
    },
    removeSwipeListeners() {
      if (this.hammer) {
        this.hammer.off('swipeleft', this.navigateNext);
        this.hammer.off('swiperight', this.navigatePrevious);
        this.hammer.destroy();
        this.hammer = null;
      }
    }
  }
};
</script>

<style scoped>
#app {
  position: relative;
  overflow: hidden;
}
</style>

<template>
  <head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@200..900&display=swap" rel="stylesheet">
  </head>
  <div id="cursor-coordinates" ref="cursorCoordinates" :style="{ display: coordinatesVisible ? 'block' : 'none' }">
    x: {{ x }}<br>y: {{ y }}
  </div>
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
  data() {
    return {
      x: 0,
      y: 0,
      coordinatesVisible: false,
      isMobile: false  
    };
  },
  mounted() {
    window.addEventListener('keydown', this.handleKeydown);
    window.addEventListener('mousemove', this.updateCoordinates);
    this.addSwipeListeners();
    this.checkIfMobile();
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
    window.removeEventListener('mousemove', this.updateCoordinates);
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
    },
    updateCoordinates(event) {
      if (!this.isMobile) {
        this.x = event.clientX;
        this.y = event.clientY;
        this.coordinatesVisible = true;
        const cursorCoordinatesElement = this.$refs.cursorCoordinates;
        const offsetX = 20; 
        const offsetY = 20; 
        let adjustedX = event.clientX + offsetX;
        let adjustedY = event.clientY + offsetY;

        const cursorRect = cursorCoordinatesElement.getBoundingClientRect();

        if (adjustedX + cursorRect.width > window.innerWidth) {
          adjustedX = window.innerWidth - cursorRect.width;
        }
        if (adjustedY + cursorRect.height > window.innerHeight) {
          adjustedY = window.innerHeight - cursorRect.height;
        }

        cursorCoordinatesElement.style.left = `${adjustedX}px`;
        cursorCoordinatesElement.style.top = `${adjustedY}px`;
      }
    },
    checkIfMobile() {
      const isMobile = window.innerWidth <= 768; 
      this.isMobile = isMobile;
    }
  }
};
</script>

<style scoped>
#app {
  position: relative;
  overflow: hidden;
}

#cursor-coordinates {
  color: white;
  position: absolute;
  font-size: 10px;
  background-color: rgba(0, 0, 0, 0.5); 
  padding: 5px;
  border-radius: 5px;
  pointer-events: none; 
  z-index: 9999; 
  display: none;
  overflow: hidden;
}

@media (max-width: 768px) {
  #cursor-coordinates {
    display: none;
  }
}
</style>
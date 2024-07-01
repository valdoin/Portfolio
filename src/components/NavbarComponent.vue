<template>
  <header class="header-container">
    <router-link to="/" class="logo-link">
      <img src="@/assets/logo.png" alt="Logo du site" class="site-logo">
    </router-link>
    <nav class="navigation">
      <router-link to="/" class="nav-item" tabindex="0" :class="{ 'active': $route.path === '/' }" @click="updateActiveLink($event, '/')">Home</router-link>
      <router-link to="/about" class="nav-item" tabindex="0" :class="{ 'active': $route.path === '/about' }" @click="updateActiveLink($event, '/about')">About me</router-link>
      <router-link to="/skills" class="nav-item" tabindex="0" :class="{ 'active': $route.path === '/skills' }" @click="updateActiveLink($event, '/skills')">Skills</router-link>
      <router-link to="/projects" class="nav-item" tabindex="0" :class="{ 'active': $route.path === '/projects' }" @click="updateActiveLink($event, '/projects')">Projects</router-link>
      <router-link to="/contact" class="nav-button" tabindex="0" @click="hideActiveBar">Contact</router-link>
      <div class="active-bar" :style="{ width: activeWidth, left: activeLeft }"></div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'NavbarComponent',
  data() {
    return {
      activeWidth: '0px',
      activeLeft: '0px'
    };
  },
  mounted() {
    this.updateActiveBar();
  },
  methods: {
    updateActiveLink(event, path) {
      const targetLink = event.target;
      this.activeWidth = `${targetLink.offsetWidth}px`;
      this.activeLeft = `${targetLink.offsetLeft}px`;
      if (path) {
        this.$router.push(path);
      }
    },
    hideActiveBar() {
      this.activeWidth = '0px';
      this.activeLeft = '0px';
    },
    updateActiveBar() {
      const activeLink = this.$el.querySelector('.nav-item.active');
      if (activeLink) {
        this.activeWidth = `${activeLink.offsetWidth}px`;
        this.activeLeft = `${activeLink.offsetLeft}px`;
      } else {
        this.hideActiveBar();
      }
    }
  }
};
</script>

<style scoped>
.header-container {
  display: flex;
  justify-content: center;
  background-color: #fff;
  gap: 20px;
  font-size: 20px;
  color: #000;
  font-weight: 500;
  line-height: 150%;
  padding: 20px 80px;
  position: relative; 
}

@media (max-width: 991px) {
  .header-container {
    flex-wrap: wrap;
    padding: 10px 20px;
  }
  .active-bar {
    bottom: 16px; 
    height: 4px; 
  }
}

.logo-link {
  text-decoration: none;
}

.site-logo {
  width: 100px;
  height: 100px;
  object-fit: contain;
}

.navigation {
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 20px;
  white-space: nowrap;
  position: relative; 
}

.nav-item {
  font-family: 'Roboto Slab', serif;
  align-self: stretch;
  margin: auto 0;
  text-decoration: none;
  color: inherit;
  position: relative; 
}

.nav-button {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
  background-color: #246A73;
  color: #fff;
  padding: 14px 24px;
  font: 16px 'Roboto Slab', serif;
  text-decoration: none;
}

.active-bar {
  position: absolute;
  bottom: 20px; 
  height: 6px;
  background-color: #246A73;
  transition: width 0.3s, left 0.3s; 
}
</style>

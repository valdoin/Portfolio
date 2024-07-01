<template>
  <header class="header-container">
    <router-link to="/" class="logo-link">
      <img src="@/assets/logo.png" alt="Logo du site" class="site-logo">
    </router-link>
    <nav class="navigation">
      <router-link to="/" class="nav-item" tabindex="0" :class="{ 'active': isActive('/') }" @click="updateActiveLink('/')">home</router-link>
      <router-link to="/about" class="nav-item" tabindex="0" :class="{ 'active': isActive('/about') }" @click="updateActiveLink('/about')">about me</router-link>
      <router-link to="/skills" class="nav-item" tabindex="0" :class="{ 'active': isActive('/skills') }" @click="updateActiveLink('/skills')">skills</router-link>
      <router-link to="/projects" class="nav-item" tabindex="0" :class="{ 'active': isActive('/projects') }" @click="updateActiveLink('/projects')">projects</router-link>
      <router-link to="/contact" class="nav-item" tabindex="0" :class="{ 'active': isActive('/contact') }" @click="updateActiveLink('/contact')">contact</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'NavbarComponent',
  methods: {
    updateActiveLink(path) {
      this.$router.push(path);
    },
    isActive(route) {
      return this.$route.path === route;
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
  color: black;
  position: relative; 
}

.nav-item:hover {
  color: #246A73; 
}

.active {
  color: white;
  background-color: #246A73;
  border-radius: 8px;
  padding: 10px 20px;
  transition: background-color 0.5s, 
}

.active:hover {
  color:white
}
</style>

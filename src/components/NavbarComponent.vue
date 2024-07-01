<template>
  <header class="header-container">
    <router-link to="/" class="logo-link">
      <img src="@/assets/logo.png" alt="Logo du site" class="site-logo">
    </router-link>
    <nav class="navigation">
      <router-link to="/" class="nav-item" tabindex="0" :class="{ 'active': isActive('/') }" @click="updateActiveLink('/')">{{ $t('navbarHome') }}</router-link>
      <router-link to="/about" class="nav-item" tabindex="0" :class="{ 'active': isActive('/about') }" @click="updateActiveLink('/about')">{{ $t('navbarAbout') }}</router-link>
      <router-link to="/skills" class="nav-item" tabindex="0" :class="{ 'active': isActive('/skills') }" @click="updateActiveLink('/skills')">{{ $t('navbarSkills') }}</router-link>
      <router-link to="/projects" class="nav-item" tabindex="0" :class="{ 'active': isActive('/projects') }" @click="updateActiveLink('/projects')">{{ $t('navbarProjects') }}</router-link>
      <router-link to="/contact" class="nav-item" tabindex="0" :class="{ 'active': isActive('/contact') }" @click="updateActiveLink('/contact')">{{ $t('navbarContact') }}</router-link>
    </nav>
    <theme-switch></theme-switch>
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
  justify-content: space-evenly;
  align-items: center;
  font-size: 20px;
  font-weight: 500;
  line-height: 150%;
  padding: 2vh 2.5vw;
  background-color: var(--header-bg-color-light); 
  color: var(--header-text-color-light); 
}

@media (max-width: 991px) {
  .header-container {
    padding: 10px 20px;
    flex-direction: column;
    align-items: center;
  }
  
  .navigation {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    width: 100%;
  }

  .nav-item {
    width: 100%;
    text-align: center;
    padding: 10px;
    margin: 5px 0;
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
}

.nav-item {
  font-family: 'Inconsolata', serif;
  text-decoration: none;
  color: var(--nav-item-text-color-light); 
  padding: 10px 15px;
  border-radius: 8px;
}

.nav-item:hover {
  color: #246A73; 
  transition: color 0.3s;
}

.active {
  color: white; 
  background-color: #246A73;
  transition: background-color 0.5s;
}

.active:hover {
  color: white;
}
</style>
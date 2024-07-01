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
  </header>
</template>

<script>
import { useI18n } from 'vue-i18n';
export default {
  name: 'NavbarComponent',
  setup() {
    const { t } = useI18n();

    return {
      $t: t
    };
  },
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
  background-color: #F8FAFB;
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
  font-family: 'Inconsolata', serif;
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

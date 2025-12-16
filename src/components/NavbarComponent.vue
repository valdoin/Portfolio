<template>
  <header class="header-container">
    <router-link to="/" class="logo-link">
      <img src="@/assets/logo.png" alt="Logo du site" class="site-logo">
    </router-link>

    <nav class="navigation">
      <router-link to="/" class="nav-item" tabindex="0">
        {{ $t('navbarHome') }}
      </router-link>

      <router-link to="/about" class="nav-item" tabindex="0">
        {{ isMobile ? $t('navbarAboutMobile') : $t('navbarAbout') }}
      </router-link>

      <router-link to="/skills" class="nav-item" tabindex="0">
        {{ $t('navbarSkills') }}
      </router-link>

      <router-link to="/projects" class="nav-item" tabindex="0">
        {{ $t('navbarProjects') }}
      </router-link>

      <router-link to="/contact" class="nav-item" tabindex="0">
        {{ isMobile ? $t('navbarContactMobile') : $t('navbarContact') }}
      </router-link>
    </nav>
    <theme-switch></theme-switch>
  </header>
</template>

<script>
export default {
  name: 'NavbarComponent',
  data() {
    return {
      isMobile: false,
    };
  },
  mounted() {
    this.checkScreenSize();
    window.addEventListener('resize', this.checkScreenSize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkScreenSize);
  },
  methods: {
    checkScreenSize() {
      this.isMobile = window.innerWidth <= 991;
    },
  },
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

.logo-link {
  text-decoration: none;
  transition: transform 0.3s;
}

.logo-link:hover {
  transform: scale(1.1);
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
  font-family: 'Inconsolata', monospace;
  text-decoration: none;
  color: var(--nav-item-text-color-light);
  padding: 10px 15px;
  border-radius: 8px;
  transition: all 0.3s;
}

@media (hover: hover) {
  .nav-item:hover {
    color: #246A73;
    background-color: rgba(36, 106, 115, 0.1);
  }
}

.nav-item.active {
  color: white;
  background-color: #246A73;
}

@media (max-width: 991px) {
  .header-container {
    flex-direction: column;
    padding: 10px 5px;
    gap: 10px;
  }

  .site-logo {
    display: none;
  }

  .navigation {
    width: 100%;
    justify-content: space-between;
    gap: 0;
  }

  .nav-item {
    font-size: 16px;
    padding: 8px 2px;
    font-weight: 600;
  }

  .nav-item.active {
    background-color: transparent;
    color: #246A73;
    text-decoration: underline;
    text-underline-offset: 4px;
  }

  
}

@media (max-width: 370px) {
  .nav-item {
    font-size: 14px;
  }
}
</style>
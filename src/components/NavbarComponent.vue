<template>
    <header class="header-container">
      <router-link to="/" class="logo-link">
        <img src="@/assets/logo.png" alt="Logo du site" class="site-logo">
      </router-link>
      <nav class="navigation">
        <router-link to="/" class="nav-item" tabindex="0">Home</router-link>
        <router-link to="/about" class="nav-item" tabindex="0">About</router-link>
        <router-link to="/skills" class="nav-item" tabindex="0">Skills</router-link>
        <router-link to="/projects" class="nav-item" tabindex="0">Projects</router-link>
        <router-link to="/contact" class="nav-button" tabindex="0">Contact</router-link>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'NavbarComponent'
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
    padding: 56px 80px;
  }
  
  @media (max-width: 991px) {
    .header-container {
      flex-wrap: wrap;
      padding: 0 20px;
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
  
  @media (max-width: 991px) {
    .navigation {
      white-space: initial;
    }
  }
  
  .nav-item {
    font-family: 'Roboto Slab', serif;
    align-self: stretch;
    margin: auto 0;
    text-decoration: none;
    color: inherit;
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
  
  @media (max-width: 991px) {
    .nav-button {
      white-space: initial;
      padding: 14px 24px;
    }
  }
  </style>
  
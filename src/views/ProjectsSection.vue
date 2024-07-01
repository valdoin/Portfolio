<template>
    <div class="projects">
      <h1>Projects</h1>
      <button @click="navigate('contact')">Go to Contact</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProjectsSection',
    methods: {
      navigate(route) {
        this.$router.push({ path: `/${route}` });
      }
    }
  };
  </script>
  
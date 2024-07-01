<template>
    <div class="skills">
      <h1>Skills</h1>
      <button @click="navigate('projects')">Go to Contact</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SkillsSection',
    methods: {
      navigate(route) {
        this.$router.push({ path: `/${route}` });
      }
    }
  };
  </script>
  
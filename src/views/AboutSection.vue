<template>
    <div class="about">
      <h1>About</h1>
      <button @click="navigate('skills')">Go to Skills</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AboutSection',
    methods: {
      navigate(route) {
        this.$router.push({ path: `/${route}` });
      }
    }
  };
  </script>
  
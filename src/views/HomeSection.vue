<template>
    <div class="home">
      <h1>Home</h1>
      <button @click="navigate('about')">Go to About</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomeSection',
    methods: {
      navigate(route) {
        this.$router.push({ path: `/${route}` });
      }
    }
  };
  </script>
  
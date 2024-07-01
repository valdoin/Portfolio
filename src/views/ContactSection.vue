<template>
    <div class="contact">
      <h1>Contact</h1>
      <button @click="navigate('/')">Go to Home</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ContactSection',
    methods: {
      navigate(route) {
        this.$router.push({ path: `/${route}` });
      }
    }
  };
  </script>
  
<template>
    <div class="home">
      <h1>Home</h1>
      <p>Bienvenue sur mon portfolio ! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum vitae quia aliquam. Reprehenderit sapiente quam assumenda aspernatur nemo soluta, cum quos mollitia excepturi eligendi eveniet veniam libero corrupti illo perferendis.</p>
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
  
<template>
  <div class="about">
    <div class="band"></div>
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. At debitis obcaecati non aliquid inventore odio quod quia. Dignissimos minus dolorem sequi vero error saepe quia odit cupiditate ducimus eveniet. Soluta.</h1>
    <div class="band"></div>
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

<style scoped>
.about {
  text-align: center;
}

h1 {
  text-align: justify; 
  font-size: 20px;
  margin-left: 20%;
  margin-right: 20%
}

.band {
  height: 5px;
  background-color: #246A73; 
  width: 60%;
  display: inline-block;
  margin: 20px 0;
}
</style>

<template>
  <div class="about">
    <div class="band"></div>
    <h1>My name is <span>Olivier ANDRIKO. 👋</span></h1>
    <h2>I'm a passionate full-stack web/mobile developer currently studying in Lyon, France.</h2>
    <h2>For me, computer science isn't just an academic pursuit—it's an integral part of my daily life. Beyond the classroom, I'm constantly engaged in personal projects and reading up on a bunch of different topics, like tech stuff, laws, and ethics, especially since the advent of AI.</h2>
    <h2>When I'm not coding, you might find me playing video games or noodling around on the piano.</h2>
    <h2>I'm also an avid traveler, having explored the majority of Europe's capitals and ventured through the United States and Russia. Additionally, I've had the enriching experience of participating in two linguistic exchanges in London and Milan, enhancing my fluency in English and Italian.</h2>
    <h2>Looking ahead, my aspiration is to bridge my passion for technology with my love for music, creating innovative projects that harmonize both realms. Join me on this journey as I strive to blend creativity and curiosity into each of my projects. 🚀</h2>
    <div class="band"></div>
    <p class="tip">Quick tip : you can navigate through the website using the left and right arrows on your keyboard !</p>
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
span {
  font-weight: bold;
}

h1 {
  text-align: justify; 
  margin-left: 20%;
  margin-right: 20%;
  font:300 20px 'Roboto Slab', serif;
}

h2 {
  text-align: justify; 
  margin-left: 20%;
  margin-right: 20%;
  font:300 17px 'Roboto Slab', serif;

}

.band {
  height: 5px;
  background-color: #246A73; 
  width: 60%;
  display: inline-block;
  margin: 20px 0;
}

.tip {
  font: 500 14px 'Roboto Slab', serif;
  color: #9c9c9c;
  margin-top: 20px;
}
</style>

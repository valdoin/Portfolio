<template>
  <div class="about">
    <div class="band fade-in"></div>
    <h1 class="slide-in-left">My name is <span>Olivier ANDRIKO. 👋</span></h1>
    <p class="slide-in-right">I'm a passionate full-stack web/mobile developer currently studying in Lyon, France.</p>
    <p class="slide-in-left">For me, computer science isn't just an academic pursuit—it's an integral part of my daily life. Beyond the classroom, I'm constantly engaged in personal projects and reading up on a bunch of different topics, like tech stuff, laws, and ethics, especially since the advent of AI.</p>
    <p class="slide-in-right">When I'm not coding, you might find me playing video games or noodling around on the piano.</p>
    <p class="slide-in-left">I'm also an avid traveler, having explored the majority of Europe's capitals and ventured through the United States and Russia. Additionally, I've had the enriching experience of participating in two linguistic exchanges in London and Milan, enhancing my fluency in English and Italian.</p>
    <p class="slide-in-right">Looking ahead, my aspiration is to bridge my passion for technology with my love for music, creating innovative projects that harmonize both realms. Join me on this journey as I strive to blend creativity and curiosity into each of my projects. 🚀</p>
    <div class="band fade-in"></div>
    <p class="tip fade-in">Quick tip : you can navigate through the website using the left and right arrows on your keyboard !</p>
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
  font: 300 20px 'Roboto Slab', serif;
  animation: slideInLeft 1s forwards;
}

p {
  text-align: justify; 
  margin-left: 20%;
  margin-right: 20%;
  font: 300 17px 'Roboto Slab', serif;
  opacity: 0;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}

.band {
  height: 5px;
  background-color: #246A73; 
  width: 60%;
  display: inline-block;
  margin: 20px 0;
  opacity: 0;
  animation: fadeIn 1s forwards;
}

.tip {
  font: 500 14px 'Roboto Slab', serif;
  color: #9c9c9c;
  margin-top: 20px;
  text-align: center;
  opacity: 0;
  animation: fadeIn 1s forwards;
}

@keyframes slideInLeft {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideInRight {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.slide-in-left {
  animation-name: slideInLeft;
}

.slide-in-right {
  animation-name: slideInRight;
}

h1, .slide-in-left {
  animation: slideInLeft 1s forwards;
}

.slide-in-right {
  animation: slideInRight 1s forwards;
}

p:nth-of-type(2) {
  animation-delay: 0.2s;
}

p:nth-of-type(3) {
  animation-delay: 0.4s;
}

p:nth-of-type(4) {
  animation-delay: 0.6s;
}

p:nth-of-type(5) {
  animation-delay: 0.8s;
}

p:nth-of-type(6) {
  animation-delay: 1s;
}

.fade-in {
  animation-name: fadeIn;
}
</style>

<template>
  <div class="projects">
    <CardComponent title="PicPals" :imageSrc="picpalsIcon" :icons="picpalsStackIcons"
      githubLink="https://github.com/valdoin/PicPals" cardColor=black
      description="PicPals is a social media platform that allows users to share drawings and connect with friends." />
    <CardComponent title="Planifica" :imageSrc="planificaIcon" :icons="planificaStackIcons"
      githubLink="https://github.com/valdoin/Planifica-Front" cardColor=#00BF63
      description="Planifica is a scheduling web app with an inuitive colorful interface and rich features." />
    <CardComponent title="Portfolio" :imageSrc="portfolioIcon" :icons="portfolioStackIcons"
      githubLink="https://github.com/valdoin/Portfolio" cardColor=#246A73
      description="This website is my portfolio. It was made to improve my skills in front-end development." />
    <CardComponent title="FileBucket" :imageSrc="fileBucketIcon" :icons="fileBucketStackIcons"
      githubLink="https://github.com/valdoin/FileBucket" cardColor=#F38F13
      description="FileBucket is a simple file server web app that you can deploy locally on your computer." />
  </div>
  <p class="teaser-text">Many more to come ...</p>
</template>

<script>
import CardComponent from '../components/CardComponent.vue';
import flutterIcon from '../assets/flutter_icon.png';
import vuejsIcon from '../assets/vuejs_icon.svg';
import nodejsIcon from '../assets/nodejs_icon.svg';
import mongodbIcon from '../assets/mongodb_icon.svg';
import pythonIcon from '../assets/python_icon.svg';
import javascriptIcon from '../assets/javascript_icon.png';
import flaskIcon from '../assets/flask_icon.svg';
import picpalsIcon from '../assets/IC.png';
import planificaIcon from '../assets/IC2.png';
import fileBucketIcon from '../assets/IC3.png';
import portfolioIcon from '../assets/logo.png';



export default {
  name: 'ProjectsSection',
  components: {
    CardComponent
  },
  data() {
    return {
      picpalsStackIcons: [flutterIcon, nodejsIcon, mongodbIcon],
      planificaStackIcons: [vuejsIcon, nodejsIcon, mongodbIcon],
      portfolioStackIcons: [vuejsIcon],
      fileBucketStackIcons: [pythonIcon, flaskIcon, javascriptIcon],
      picpalsIcon: picpalsIcon,
      planificaIcon: planificaIcon,
      portfolioIcon: portfolioIcon,
      fileBucketIcon: fileBucketIcon
    };
  },
  methods: {
    navigate(route) {
      this.$router.push({ path: `/${route}` });
    }
  }
};
</script>

<style scoped>
.projects {
  margin-top: 7vh
}

.teaser-text {
  text-align: center;
  font: 300 17px 'Roboto Slab', serif;
  margin-top: 8vh;
  font-style: italic;
  animation: fadeIn 2s ease forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>
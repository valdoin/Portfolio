<template>
  <div class="projects">
    <CardComponent
      title="PicPals"
      :imageSrc="picpalsIcon"
      :icons="picpalsStackIcons"
      githubLink="https://github.com/valdoin/PicPals"
      cardColor="black"
      :description="$t('picpalsDescription')"
    />
    <CardComponent
      title="Vaulty"
      :imageSrc="vaultyIcon"
      :icons="vaultyStackIcons"
      githubLink="https://github.com/valdoin/Vaulty"
      cardColor="#c1c0e6"
      :description="$t('vaultyDescription')"
    />
    <CardComponent
      title="Portfolio"
      :imageSrc="portfolioIcon"
      :icons="portfolioStackIcons"
      githubLink="https://github.com/valdoin/Portfolio"
      cardColor="#246A73"
      :description="$t('portfolioDescription')"
    />
    <CardComponent
      title="FileBucket"
      :imageSrc="fileBucketIcon"
      :icons="fileBucketStackIcons"
      githubLink="https://github.com/valdoin/FileBucket"
      cardColor="#F38F13"
      :description="$t('fileBucketDescription')"
    />
  </div>
  <p class="teaser-text">{{$t('projectsTeaser')}} <a class="github-link" href="https://github.com/valdoin" target="_blank">GitHub</a> ...</p>
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
import csharpIcon from '../assets/csharp_icon.png';
import picpalsIcon from '../assets/IC.png';
import fileBucketIcon from '../assets/IC3.png';
import portfolioIcon from '../assets/logo.png';
import vaultyIcon from '../assets/vaulty.png';

export default {
  name: 'ProjectsSection',
  components: {
    CardComponent
  },
  data() {
    return {
      picpalsStackIcons: [flutterIcon, nodejsIcon, mongodbIcon],
      vaultyStackIcons: [csharpIcon, javascriptIcon],
      portfolioStackIcons: [vuejsIcon],
      fileBucketStackIcons: [pythonIcon, flaskIcon, javascriptIcon],
      picpalsIcon: picpalsIcon,
      vaultyIcon: vaultyIcon,
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
  display: flex;
  flex-wrap: wrap;
  justify-content: center; 
  gap: 3vh; 
  margin-top: 2.5vh;
}

@media (max-width: 1270px) {
  .projects {
    flex-direction: column;
    align-items: center;
    margin-top: 1.5vh;
  }
}

.teaser-text {
  text-align: center;
  font: 300 20px 'Inconsolata', serif;
  margin-top: 8vh; 
  font-style: italic;
  animation: fadeIn 2s ease forwards;
}

a {
  font: 500 20px 'Inconsolata', serif;
  font-style: italic;
}

.github-link {
  position: relative;
  text-decoration: none;
  color: #246A73;
}

.github-link::after {
  content: '';
  position: absolute;
  width: 0%;
  height: 2px;
  display: block;
  margin-top: 5px;
  right: 0;
  background: #246A73;
  transition: width 0.4s ease, right 0.4s ease;
}

.github-link:hover::after {
  width: 100%;
  left: 0;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@media (max-width: 768px) {
  .teaser-text {
    margin-top: 3vh; 
    font-size: 16px; 
  }
  
  .teaser-text a {
    font-size: 16px;
  }
}
</style>

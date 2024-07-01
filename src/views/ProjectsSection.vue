<template>
  <div class="projects">
    <CardComponent
      title="PicPals"
      :imageSrc="picpalsIcon"
      :icons="projectIcons"
      githubLink="https://github.com/valdoin/my-awesome-project"
    />
  </div>
</template>

<script>
import CardComponent from '../components/CardComponent.vue';
import flutterIcon from '../assets/flutter_icon.png';
import nodejsIcon from '../assets/nodejs_icon.svg';
import mongodbIcon from '../assets/mongodb_icon.svg';
import picpalsIcon from '../assets/IC.png';

export default {
  name: 'ProjectsSection',
  components: {
    CardComponent
  },
  data() {
    return {
      projectIcons: [flutterIcon, nodejsIcon, mongodbIcon],
      picpalsIcon: picpalsIcon
    };
  },
  methods: {
    navigate(route) {
      this.$router.push({ path: `/${route}` });
    }
  }
};
</script>

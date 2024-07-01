<template>
  <div class="card flip-in">
    <div class="card-header" :style="{ backgroundColor: cardColor }">
      <h2>{{ title }}</h2>
    </div>
    <div class="card-content">
      <div class="card-image">
        <img :src="imageSrc" alt="Project Illustration" class="project-image">
      </div>
      <div class="card-description">
        <p>{{ description }}</p>
      </div>
    </div>
    <div class="card-body">
      <div class="icon-list">
        <img v-for="(icon, index) in icons" :src="icon" :alt="icon" class="icon" :key="index">
      </div>
    </div>
    <div class="card-footer" :style="{ backgroundColor: cardColor }">
      <a :href="githubLink" target="_blank" rel="noopener noreferrer">
        <img src="@/assets/github_icon.svg" alt="GitHub Icon" class="github-icon">
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardComponent',
  props: {
    title: {
      type: String,
      required: true
    },
    imageSrc: {
      type: String,
      required: true
    },
    icons: {
      type: Array,
      required: true
    },
    githubLink: {
      type: String,
      required: true
    },
    cardColor: {
      type: String,
    },
    description: {
      type: String,
      default: ''
    }
  }
};
</script>

<style scoped>
.card {
  width: calc(22% - 30px);
  border-radius: 10px;
  box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  margin: 10px;
  display: inline-block;
  transition: box-shadow 0.3s ease; 
}

.card:hover {
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.5); 
}

.card-header {
  padding: 10px;
  text-align: center;
  color: white;
}

.card-header h2 {
  margin: 0;
}

.card-content {
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: var(--background-color);
}

.card-description {
  flex: 2;
  padding-left: 3vh;
}

.card-image {
  flex: 1;
  text-align: center;
}

.project-image {
  max-width: 150px;
  max-height: 150px;
  object-fit: cover;
  border-radius: 10px;
}

.card-body {
  padding: 5px;
  text-align: center;
  background-color: var(--background-color);
}

.icon-list {
  display: flex;
  justify-content: center;
  margin-bottom: 1vh;
}

.icon {
  width: 40px;
  height: 40px;
  margin: 0 5px;
}

.card-footer {
  padding: 10px;
  text-align: center;
}

.github-icon {
  width: 40px;
  height: 40px;
}

@keyframes flipIn {
  from {
    transform: rotateY(-90deg);
    opacity: 0;
  }
  to {
    transform: rotateY(0);
    opacity: 1;
  }
}

.flip-in {
  animation: flipIn 1s ease forwards;
}
</style>


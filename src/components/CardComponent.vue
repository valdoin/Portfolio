<template>
    <div class="card">
      <div class="card-header">
        <h2>{{ title }}</h2>
      </div>
      <div class="card-image">
        <img :src="imageSrc" alt="Project Illustration" class="project-image">
      </div>
      <div class="card-body">
        <div class="icon-list">
          <img v-for="(icon, index) in icons" :src="icon" :alt="icon" class="icon" :key="index">
        </div>
      </div>
      <div class="card-footer">
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
      }
    }
  };
  </script>
  
  <style scoped>
  .card {
    width: calc(33.33% - 20px);
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    margin: 10px;
    display: inline-block;
  }
  
  .card-header {
    background-color: #246A73;
    padding: 10px;
    text-align: center;
    color: white;
    border-bottom: 1px solid #ddd;
  }
  
  .card-header h2 {
    margin: 0;
  }
  
  .card-image {
    text-align: center;
    padding: 10px;
  }
  
  .project-image {
    width: 100%;
    max-height: 300px;
    object-fit: cover;
    border-radius: 10px;
  }
  
  .card-body {
    padding: 5px;
    text-align: center;
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
    background-color: #3F929D;
    padding: 10px;
    text-align: center;
  }
  
  .github-icon {
    width: 40px;
    height: 40px;
  }
  </style>
  
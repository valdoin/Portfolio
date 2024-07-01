<template>
    <div class="folder" @click="toggleOpen">
      <div class="folder-header">
        <img src="@/assets/folder_icon.png" alt="Folder Icon" class="folder-icon" />
        <span>{{ title }}</span>
      </div>
      <div v-if="isOpen" class="folder-content">
        <div class="item" v-for="(item, index) in items" :key="item.name" :style="getItemStyle(index)">
          <img :src="item.icon" :alt="item.name" class="item-icon" />
          <span class="item-name">{{ item.name }}</span>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FolderComponent',
    props: {
      title: {
        type: String,
        required: true
      },
      items: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        isOpen: false
      };
    },
    methods: {
      toggleOpen() {
        this.isOpen = !this.isOpen;
      },
      getItemStyle(index) {
        return {
          animationDelay: `${index * 0.1}s`
        };
      }
    }
  };
  </script>
  
  <style scoped>
  .folder {
    width: 200px;
    border-radius: 5px;
    margin: 10px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .folder-header {
    display: flex;
    align-items: center;
    padding: 10px;
  }
  
  .folder-icon {
    width: 60px;
    height: 60px;
    margin-right: 10px;
  }
  
  .folder-content {
    padding: 5px;
  }
  
  .item {
    width: 100%;
    text-align: center;
    margin: 10px 0;
    position: relative;
    opacity: 0;
    transform: translateY(-20px);
    animation: fadeIn 0.5s forwards;
  }
  
  .item-icon {
    width: 60px;
    height: 60px;
  }
  
  .item-name {
    display: none;
    position: absolute;
    white-space: nowrap;
    left: 17vh;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;
    padding: 3px 5px;
    border-radius: 3px;
    font-size: 0.8em;
  }
  
  .item:hover .item-name {
    display: inline-block;
  }
  
  @keyframes fadeIn {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  </style>
  
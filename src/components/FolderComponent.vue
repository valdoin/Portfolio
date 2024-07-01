<template>
  <div class="folder" @click="toggleOpen">
    <div class="folder-header">
      <img :src="isOpen ? openFolderIcon : closedFolderIcon" :key="isOpen ? 'open' : 'closed'" alt="Folder Icon"
        class="folder-icon" />
      <span class="folder-title">{{ title }}</span>
    </div>
    <transition name="fade">
      <div v-if="isOpen" class="folder-content">
        <div class="item" v-for="(item, index) in items" :key="item.name" :style="getItemStyle(index)">
          <img :src="item.icon" :alt="item.name" class="item-icon" />
          <span class="item-name">{{ item.name }}</span>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import openFolderIcon from '@/assets/open_folder_icon.png';
import closedFolderIcon from '@/assets/closed_folder_icon.png';

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
      isOpen: false,
      openFolderIcon: openFolderIcon,
      closedFolderIcon: closedFolderIcon
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
    },
    preloadIcons() {
      const icons = [this.openFolderIcon, this.closedFolderIcon];
      icons.forEach(src => {
        const img = new Image();
        img.src = src;
      });
    }
  },
  mounted() {
    this.preloadIcons();
  }
};
</script>

<style scoped>
.folder {
  width: 200px;
  border-radius: 5px;
  margin: 10px;
  cursor: pointer;
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
}

.item-icon {
  width: 50px;
  height: 50px;
  transition: transform 0.3s ease-in-out;
}

.item-icon:hover {
  transform: scale(1.05);
}

.item-name {
  display: none;
  position: absolute;
  white-space: nowrap;
  left: 18vh;
  top: 50%;
  transform: translateY(-50%);
  background-color: #246A73;
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
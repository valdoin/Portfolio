<template>
  <main class="main-content">
    <header class="header">
      <img class="avatar fade-in" :src="currentAvatar" alt="random avatar">
      <h1 class="typing-effect title">olivier andriko</h1>
      <p class="intro-text typing-effect">
        {{ $t('welcomeMessage') }}
      </p>
      <button class="cta-button slide-in-left" @click="redirectToAbout">
        {{ $t('getStarted') }}<span class="arrow">➔</span>
      </button>
    </header>
  </main>
</template>

<script>
import randomAvatar1 from '../assets/random_avatars/random_avatar_1.gif';
import randomAvatar2 from '../assets/random_avatars/random_avatar_2.gif';
import randomAvatar3 from '../assets/random_avatars/random_avatar_3.gif';
import randomAvatar4 from '../assets/random_avatars/random_avatar_4.gif';
import randomAvatar5 from '../assets/random_avatars/random_avatar_5.gif';
import randomAvatar6 from '../assets/random_avatars/random_avatar_6.gif';
export default {
  name: 'HomeSection',
  data() {
    return {
      avatars: [randomAvatar1, randomAvatar2, randomAvatar3, randomAvatar4, randomAvatar5, randomAvatar6],
      currentAvatar: '',
    };
  },
  methods: {
    redirectToAbout() {
      this.$router.push('/about');
    },
    getRandomAvatar() {
      const randomIndex = Math.floor(Math.random() * this.avatars.length);
      this.currentAvatar = this.avatars[randomIndex];
    }
  },
  mounted() {
    this.getRandomAvatar();
  }
};

</script>

<style scoped>
.main-content {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}


.header {
  padding: 0 2vh;
  color: #fff;
}

.title {
  font: 800 2.75em 'Inconsolata', serif;
  color: var(--text-color);
}

.intro-text {
  color: #9c9c9c;
  font: 400 1.3em 'Inconsolata', serif;
}

.cta-button {
  border-radius: 4px;
  background-color: #246A73;
  margin-top: 3vh;
  font-size: 1rem;
  font-weight: 700;
  padding: 21px 60px;
  transition: background-color 0.3s, box-shadow 0.3s;
  position: relative;
  border: none;
  color: #fff;
  font-family: 'Inconsolata', serif;
  box-shadow: 60px -16px rgba(36, 106, 115, 0.3);
}

.cta-button:hover {
  background-color: #1c5262;
  box-shadow: 0 6px 12px rgba(28, 82, 98, 0.3);
}

.arrow {
  display: none;
  position: absolute;
  margin-left: 10px;
  top: 50%;
  transform: translateY(-50%) translateX(-10px);
  opacity: 0;
  transition: transform 0.5s, opacity 0.5s;
}

.cta-button:hover .arrow {
  display: inline-block;
  opacity: 1;
  transform: translateY(-50%) translateX(0);
}

.avatar {
  border-radius: 50%;
  width: 320px;
  height: 320px;
}

@media (max-width: 991px) {
  .avatar {
    width: 300px;
    height: 300px;
  }

  .title {
    font: 800 2.0em 'Inconsolata', serif;
  }

  .intro-text {
    font: 400 0.9em 'Inconsolata', serif;
  }

  .cta-button {
    font-size: 0.8rem;
  }

}

.typing-effect {
  width: 0;
  overflow: hidden;
  white-space: nowrap;
  animation: typing 2.5s forwards;
}

.fade-in {
  opacity: 0;
  animation: fade 1.5s forwards;
}

@keyframes fade {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.slide-in-left {
  opacity: 0;
  animation: slideLeft 2s forwards;
}

@keyframes slideLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes typing {
  from {
    width: 0;
  }

  to {
    width: 100%;
  }
}
</style>

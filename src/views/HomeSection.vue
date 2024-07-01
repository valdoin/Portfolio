<template>
  <main class="main-content">
    <header class="header">
      <img class="avatar fade-in" src="@/assets/avatar.jpg" alt="Avatar d'Olivier ANDRIKO">
      <h1 class="typing-effect title">olivier andriko</h1>
      <p class="intro-text typing-effect">
        welcome to my portfolio !
      </p>
      <button class="cta-button slide-in-left" @click="redirectToAbout">
        let’s get started<span class="arrow">➔</span>
      </button>
    </header>
  </main>
</template>

<script>
export default {
  name: 'HomeSection',
  methods: {
    redirectToAbout() {
      this.$router.push('/about')
    }
  }
};
</script>

<style scoped>
.main-content {
  display: flex;
  justify-content: center;
  align-items: center; 
  height: 70vh; 
  text-align: center; 
}

.header {
  max-width: 538px; 
  width: 100%; 
  padding: 0 20px; 
  color: #fff;
}

.title {
  font: 800 44px 'Roboto Slab', serif;
  color: black;
}

.intro-text {
  color: #9c9c9c;
  letter-spacing: 0.14px;
  margin-top: 20px;
  font: 400 21px 'Roboto Slab', serif;
}

.cta-button {
  border-radius: 4px;
  background-color: #246A73;
  margin-top: 30px;
  font-size: 16px;
  font-weight: 700;
  padding: 21px 60px;
  transition: background-color 0.3s, box-shadow 0.3s; 
  position: relative;
  border: none; 
  color: #fff;
  font-family: 'Roboto Slab', serif;
  box-shadow: 8px 8px 8px rgba(36, 106, 115, 0.3); 
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
  width: 250px; 
  height: 250px; 
  margin-bottom: 20px; 
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
  from { width: 0 }
  to { width: 100% }
}
</style>

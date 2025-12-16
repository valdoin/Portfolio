<template>
  <div class="contact">
    <h1 class="fade-in">{{ $t('contactTitle') }}</h1>
    <h2 class="fade-in">{{ $t('contactLinksText') }}</h2>
    <div class="icons">
      <div class="icon-container slide-in-top" @click="navigateTo('https://github.com/valdoin')">
        <img class="icon" src="@/assets/green_github_icon.png" alt="GitHub" />
        <p class="description">valdoin</p>
      </div>
      <div class="icon-container slide-in-bottom" @click="navigateTo('mailto:olivierandriko@gmail.com')">
        <img class="icon" src="@/assets/green_mail_icon.png" alt="Email" />
        <p class="description">olivierandriko@gmail.com</p>
      </div>
      <div class="icon-container slide-in-top" @click="navigateTo('https://discord.com/')">
        <img class="icon" src="@/assets/green_discord_icon.png" alt="Discord" />
        <p class="description">valdoin</p>
      </div>
      <div class="icon-container slide-in-bottom" @click="navigateTo('https://valdoin-blog.olivierandriko.com/')">
        <img class="icon" src="@/assets/logo_small.png" alt="Blog" />
        <p class="description">{{ $t('blogDescription') }}</p>
      </div>
    </div>
    <footer>
      <p>{{ $t('footer') }}</p>
      <p>{{ $t('netlify') }}<a href="https://www.netlify.com/" target="_blank">Netlify</a>.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'ContactSection',
  methods: {
    navigateTo(url) {
      window.open(url, '_blank');
    }
  }
};
</script>

<style scoped>
.contact {
  text-align: center;
  display: flex;
  flex-direction: column; 
  justify-content: center; 
  align-items: center; 
  min-height: 57vh; 
  width: 100%;
}

h2 {
  font-size: 1.25em;
  margin-top: 2vh; 
}

h1,
h2 {
  color: var(--text-color);
}

.fade-in {
  animation: fadeIn 1s ease forwards;
  opacity: 0;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.icons {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 2vh;
}

.icon-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  transition: transform 0.3s;
}

.icon:hover {
  transform: scale(1.1);
}

.icon {
  width: 150px;
  height: 150px;
  transition: transform 0.3s;
}

.description {
  margin-top: 10px;
  font-size: 1em;
  color: var(--text-color);
}

@media (max-width: 600px) {
  h1 {
    font-size: 1.65em;
  }
  h2 {
    font-size : 1em;
    margin-right: 8%;
    margin-left: 8%;
    line-height: 1.5em;
  }
  .icons {
    flex-direction: column;
  }
  .icon {
    width: 100px;
    height: 100px;
  }
  .description {
    font-size: 1em;
  }
}

.slide-in-top {
  animation: slideInTop 1s forwards;
  opacity: 0;
}

.slide-in-bottom {
  animation: slideInBottom 1s forwards;
  opacity: 0;
}

@keyframes slideInTop {
  from {
    transform: translateY(-50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slideInBottom {
  from {
    transform: translateY(50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  color: var(--text-color);
  text-align: center;
  font: 400 16px 'Inconsolata', sans-serif;
  padding-bottom: 10px; 
}

@media (max-width: 768px) {
  footer {
    position: relative;
    margin-top: 5vh;
    padding-bottom: 0; 
  }
}

a {
  position: relative;
  text-decoration: none;
  color: #246A73;
  font: 600 16px 'Inconsolata', serif;
}

a::after {
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

a:hover::after {
  width: 100%;
  left: 0;
}
</style>
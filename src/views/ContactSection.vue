<template>
  <div class="contact">
    <h1>Vous voilà arrivé au bout !</h1>
    <h2>Si vous appréciez mon travail ou que vous voulez me contacter, n'hésitez pas à consulter les liens suivants :</h2>
    <div class="icons">
      <div class="icon-container" @click="navigateTo('https://github.com/valdoin')">
        <img class="icon" src="@/assets/green_github_icon.png" alt="GitHub" />
        <p class="description">valdoin</p>
      </div>
      <div class="icon-container" @click="navigateTo('mailto:olivierandriko@gmail.com')">
        <img class="icon" src="@/assets/green_mail_icon.png" alt="Email" />
        <p class="description">olivierandriko@gmail.com</p>
      </div>
      <div class="icon-container" @click="navigateTo('https://discord.com/')">
        <img class="icon" src="@/assets/green_discord_icon.png" alt="Discord" />
        <p class="description">valdoin</p>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  name: 'ContactSection',
  methods: {
    navigateTo(url) {
      window.location.href = url;
    }
  }
};
</script>


<style scoped>
.contact {
  text-align: center;
}

h2 {
  margin-top : 7vh;
}

h1, h2 {
  color: var(--text-color);
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

.icon-container:hover {
  transform: scale(1.1);
}

.icon {
  width: 150px;
  height: 150px;
}

.description {
  margin-top: 10px;
  font-size: 1em;
  color: var(--text-color);
}

@media (max-width: 600px) {
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
</style>
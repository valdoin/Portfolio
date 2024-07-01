<template>
  <div class="language-switch">
    <transition-group name="flag" tag="div" class="flags-container">
      <img
        v-if="currentLanguage === 'en'"
        src="@/assets/flag-uk.svg"
        alt="English"
        @click="switchLanguage('fr')"
        class="flag"
        key="en"
      />
      <img
        v-if="currentLanguage === 'fr'"
        src="@/assets/flag-fr.svg"
        alt="Français"
        @click="switchLanguage('en')"
        class="flag"
        key="fr"
      />
    </transition-group>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

export default {
  setup() {
    const { locale } = useI18n();
    const currentLanguage = ref(locale.value);

    const switchLanguage = (lang) => {
      if (lang !== currentLanguage.value) {
        currentLanguage.value = lang;
        locale.value = lang;
      }
    };

    return {
      currentLanguage,
      switchLanguage,
    };
  },
};
</script>

<style scoped>
.language-switch {
  position: relative;
  width: 32px;
  height: 1vh;
}

.flags-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.flag {
  width: 40px;
  height: 40px;
  position: absolute;
  border-radius: 14px;
  top: 2vh;
  left: 1vw;
  transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
  z-index: 9999;
}

.flag-enter-active, .flag-leave-active {
  position: absolute;
  transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
}

.flag-enter-from {
  transform: translateY(-100%);
  opacity: 0;
}

.flag-enter-to {
  transform: translateY(0);
  opacity: 1;
}

.flag-leave-from {
  transform: translateY(0);
  opacity: 1;
}

.flag-leave-to {
  transform: translateY(100%);
  opacity: 0;
}

@media (max-width: 991px) {
  .language-switch {
    height: 7vh;
    bottom: 2vh;
  }
}
</style>

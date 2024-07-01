<template>
  <div class="language-switch">
    <transition-group name="language" tag="div" class="languages-container">
      <div
        v-if="currentLanguage === 'en'"
        @click="switchLanguage('fr')"
        class="language"
        key="en"
      >
        en
      </div>
      <div
        v-if="currentLanguage === 'fr'"
        @click="switchLanguage('en')"
        class="language"
        key="fr"
      >
        fr
      </div>
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

.languages-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.language {
  position: absolute;
  top: 2vh;
  left: 1vw;
  transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px; 
  font-family: 'Inconsolata', serif; 
  font-weight: 400;
  color: var(--theme-color); 
  cursor: url('../assets/Pointer.svg'), auto;
}

.language-enter-active, .language-leave-active {
  position: absolute;
  transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
}

.language-enter-from {
  transform: translateY(-100%);
  opacity: 0;
}

.language-enter-to {
  transform: translateY(0);
  opacity: 1;
}

.language-leave-from {
  transform: translateY(0);
  opacity: 1;
}

.language-leave-to {
  transform: translateY(100%);
  opacity: 0;
}

@media (max-width: 991px) {
  .language-switch {
    height: 7vh;
    bottom: 2vh;
  }
  .language {
    font-size : 32px;
  }
}
</style>

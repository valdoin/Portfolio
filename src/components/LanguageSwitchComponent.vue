<template>
    <div class="language-switch">
        <img
        src="@/assets/flag-uk.svg"
        alt="English"
        @click="switchLanguage('en')"
        :class="{ active: currentLanguage === 'en' }"
      />
      <img
        src="@/assets/flag-fr.svg"
        alt="Français"
        @click="switchLanguage('fr')"
        :class="{ active: currentLanguage === 'fr' }"
      />
    </div>
  </template>
  
  <script>
  import { useI18n } from 'vue-i18n';
  
  export default {
    setup() {
      const { locale } = useI18n();
  
      const switchLanguage = (lang) => {
        if (lang !== locale.value) {
          locale.value = lang;
        }
      };
  
      return {
        currentLanguage: locale.value,
        switchLanguage
      };
    }
  };
  </script>
  
  <style scoped>
  .language-switch img {
    width: 32px;
    height: 32px;
    margin: 0 5px;
  }
  
  .active {
    border: 2px solid #246A73;
  }
  </style>
  
<template>
  <div class="about">
    <div class="band fade-in"></div>
    <h1 class="slide-in-left" v-html="$t('aboutFirstParagraph')"></h1>
    <p class="slide-in-right">{{ $t('aboutSecondParagraph') }}</p>
    <p class="slide-in-left">{{ $t('aboutThirdParagraph') }}</p>
    <p class="slide-in-left">
      <i18n-t keypath="aboutFourthParagraph">
        <a href="https://valdoin-blog.olivierandriko.com" target="_blank" class="i18n-link">blog</a>
      </i18n-t>
    </p>
    <p class="slide-in-right" v-html="$t('aboutSixthParagraph')"></p>
    <div class="band fade-in"></div>
    <p class="tip fade-in">{{ isMobile ? $t('aboutQuickTipMobile') : $t('aboutQuickTip') }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMobile: false,
    };
  },
  mounted() {
    this.checkScreenSize();
    window.addEventListener('resize', this.checkScreenSize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkScreenSize);
  },
  methods: {
    checkScreenSize() {
      this.isMobile = window.innerWidth <= 768; 
    },
  },
};
</script>

<style scoped>
.about {
  text-align: center;
}

h1 {
  text-align: justify; 
  margin-left: 20%;
  margin-right: 20%;
  font: 300 20px 'Inconsolata', serif;
  animation: slideInLeft 1s forwards;
}

p {
  text-align: justify; 
  margin-left: 20%;
  margin-right: 20%;
  font: 300 17px 'Inconsolata', serif;
  opacity: 0;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  line-height: 1.7;
}

.band {
  height: 0.75vh;
  background-color: #246A73; 
  width: 60%;
  display: inline-block;
  margin: 3vh 0;
  opacity: 0;
  animation: fadeIn 1s forwards;
}

.tip {
  font: 500 14px 'Inconsolata', serif;
  color: #9c9c9c;
  text-align: center;
  opacity: 0;
  animation: fadeIn 1s forwards;
}

.i18n-link {
  position: relative;
  text-decoration: none;
  color: #246A73;
}

.i18n-link::after {
  content: '';
  position: absolute;
  width: 0%;
  height: 2px;
  display: block;
  margin-top: 0.1px;
  right: 0;
  background: #246A73;
  transition: width 0.4s ease, right 0.4s ease;
}

.i18n-link:hover::after {
  width: 100%;
  left: 0;
}

@keyframes slideInLeft {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideInRight {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.slide-in-left {
  animation-name: slideInLeft;
}

.slide-in-right {
  animation-name: slideInRight;
}

h1, .slide-in-left {
  animation: slideInLeft 1s forwards;
}

.slide-in-right {
  animation: slideInRight 1s forwards;
}

p:nth-of-type(2) {
  animation-delay: 0.2s;
}

p:nth-of-type(3) {
  animation-delay: 0.4s;
}

p:nth-of-type(4) {
  animation-delay: 0.6s;
}

p:nth-of-type(5) {
  animation-delay: 0.8s;
}

p:nth-of-type(6) {
  animation-delay: 1s;
}

.fade-in {
  animation-name: fadeIn;
}

@media (max-width: 991px) {
  h1, p {
    margin: 0 10%;
    font-size: 18px;
    margin-bottom: 30px;
  }

  .tip {
    font-size: 12px;
  }

  .band {
    width: 82%;
    margin-top: 0.5vh;
  }
}

@media (max-width: 768px) {
  h1, p {
    margin: 0 5%;
    font-size: 16px;
    margin-bottom: 25px;
  }

  .tip {
    font-size: 12px;
  }

  .band {
    width: 90%;
    margin-top: 0.5vh;
  }
}

@media (max-width: 576px) {
  h1, p {
    margin: 0 5%;
    font-size: 15px;
    margin-bottom: 20px;
    line-height: 1.5;
  }

  .tip {
    font-size: 12px;
  }

  .band {
    width: 93%;
    margin-top: 0.5vh;
  }
}
</style>

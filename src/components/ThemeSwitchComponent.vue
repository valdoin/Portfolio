<template>
    <div class="theme-switch" @click="toggleTheme">
        <img :src="currentTheme === 'dark' ? darkIcon : lightIcon" :alt="currentTheme" class="theme-icon" />
    </div>
</template>

<script>
import lightIcon from '@/assets/light_mode_icon.png';
import darkIcon from '@/assets/dark_mode_icon.png';

export default {
    data() {
        return {
            currentTheme: localStorage.getItem('theme') || 'dark',
        };
    },
    computed: {
        lightIcon() {
            return lightIcon;
        },
        darkIcon() {
            return darkIcon;
        },
    },
    methods: {
        preloadImages() {
            const images = [lightIcon, darkIcon];
            images.forEach((src) => {
                const img = new Image();
                img.src = src;
            });
        },
        toggleTheme() {
            this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', this.currentTheme);
            localStorage.setItem('theme', this.currentTheme);
        },
    },
    mounted() {
        document.documentElement.setAttribute('data-theme', this.currentTheme);
        this.preloadImages();
    },
};
</script>

<style scoped>
.theme-switch {
    position: absolute;
    top: 2vh;
    right: 1vw;
    z-index: 9999;
}

.theme-icon {
    width: 32px;
    height: 32px;
    transition: opacity 0.5s ease-in-out;
}

@media (max-width: 991px) {
    .theme-switch{   
        top: 0;
        right: 1vw;
    }
}
</style>
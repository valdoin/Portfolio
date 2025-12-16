import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/HomeSection.vue';
import About from './views/AboutSection.vue';
import Skills from './views/SkillsSection.vue';
import Projects from './views/ProjectsSection.vue';
import Contact from './views/ContactSection.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/skills', component: Skills },
  { path: '/projects', component: Projects },
  { path: '/contact', component: Contact }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkExactActiveClass: 'active',
});

export default router;

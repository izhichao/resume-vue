import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import ResumeOne from './views/ResumeOne.vue';

const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/resume-one' },
  { path: '/resume-one', component: ResumeOne }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});
export default router;

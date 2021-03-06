import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import ResumeOne from './views/ResumeOne.vue';
import ResumeTwo from './views/ResumeTwo.vue';

const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/resume-one' },
  { path: '/resume-one', component: ResumeOne },
  { path: '/resume-two', component: ResumeTwo },
  { path: '/:pathMatch(.*)', redirect: '/resume-one' }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});
export default router;

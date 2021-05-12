import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import home from '../views/switch.vue';
import switchInfo from '../views/switch-info.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/switch',
    redirect: '/',
  },
  {
    path: '/',
    name: 'switch',
    component: home,
  },
  {
    path: '/:switchname',
    name: 'switch-info',
    component: switchInfo,
  }
  // {
  //   path: '/keycap',
  //   name: 'keycap',
  //   // route level code-splitting
  //   // this generates a separate chunk (keycap.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "keycap" */ '../views/keycap.vue'),
  // },
  // {
  //   path: '/stabilizer',
  //   name: 'stabilizer',
  //   component: () => import('../views/stabilizer.vue'),
  // },
  // {
  //   path: '/oring',
  //   name: 'oring',
  //   component: () => import('../views/oring.vue'),
  // },
  // {
  //   path: '/lube',
  //   name: 'lube',
  //   component: () => import('../views/lube.vue'),
  // },
  // {
  //   path: '/spring',
  //   name: 'spring',
  //   component: () => import('../views/spring.vue'),
  // },
  // {
  //   path: '/kit',
  //   name: 'kit',
  //   component: () => import('../views/kit.vue'),
  // },
  // {
  //   path: '/pcb',
  //   name: 'pcb',
  //   component: () => import('../views/pcb.vue'),
  // },
  // {
  //   path: '/case',
  //   name: 'case',
  //   component: () => import('../views/case.vue'),
  // },
  // {
  //   path: '/plate',
  //   name: 'plate',
  //   component: () => import('../views/plate.vue'),
  // },
  // {
  //   path: '/controller',
  //   name: 'controller',
  //   component: () => import('../views/controller.vue'),
  // },
  // {
  //   path: '/foam',
  //   name: 'foam',
  //   component: () => import('../views/foam.vue'),
  // },
  // {
  //   path: '/cable',
  //   name: 'cable',
  //   component: () => import('../views/cable.vue'),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

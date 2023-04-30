import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/challenges',
      name: 'challenges',
      component: () => import('../views/ChallengesView.vue')
    },
    {
      path: '/leaderboard',
      name: 'leaderboard',
      component: () => import('../views/LeaderboardView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/CommingSoonView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/CommingSoonView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/CommingSoonView.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/CommingSoonView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue')
    }
  ]
})

export default router

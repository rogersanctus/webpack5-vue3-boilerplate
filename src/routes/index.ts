export default [
  {
    path: '/',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/bonus',
    component: () => import('@/views/Bonus.vue')
  }
]

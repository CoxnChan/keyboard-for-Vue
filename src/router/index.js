import { createRouter, createWebHashHistory } from 'vue-router'
const Index = () => import("@/views/index.vue")
const Chinese = () => import("@/pages/Chinese.vue")
const English = () => import("@/pages/English.vue")
const Practice = () => import('@/pages/Practice.vue')

const routes = [
  {
    path:'/',
    redirect:'/practice'
  },
  {
    path:'/index',
    name:"Index",
    component:Index,
    children:[
      {
        path:'/index',
        redirect:'/chinese'
      },
      {
        path:"/chinese",
        name:"Chinese",
        component:Chinese
      },
      {
        path:"/english",
        name:"English",
        component:English
      },
      {
        path:"/practice",
        name:"Practice",
        component:Practice
      }
    ]
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

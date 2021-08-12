import { createRouter,createWebHistory} from 'vue-router'

const routes = [
      {
            path: '/',
            name: 'articles.home',
            component: () => import("/src/components/pages/Home.vue")
      },
      {
            path: '/',
            name: 'navbar',
            component: () => import("/src/components/Navbar.vue")
      },
      {
            path: '/article',
            name: 'pages.article',
            component: () => import("/src/components/pages/Article.vue")
      },
      {
            path: '/contact',
            name: 'pages.contact',
            component: () => import("/src/components/pages/Contact.vue")
      },
      {
            path: '/login',
            name: 'pages.login',
            component: () => import("/src/components/pages/Login.vue")
      },
     
]
const router = createRouter ({
      history: createWebHistory(),
      routes
})

export default router
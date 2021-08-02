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
            path: '/biodata',
            name: 'pages.biodata',
            component: () => import("/src/components/pages/Biodata.vue")
      },
      {
            path: '/login',
            name: 'pages.login',
            component: () => import("/src/components/pages/Login.vue")
      },
      {
            path: '/articles/index',
            name: 'articles.index',
            component: () => import("/src/components/pages/articles/Index.vue")
      },
      {
            path: '/articles/create_article',
            name: 'articles.create',
            component: () => import("/src/components/pages/articles/Create.vue")
      }
]
const router = createRouter ({
      history: createWebHistory(),
      routes
})

export default router
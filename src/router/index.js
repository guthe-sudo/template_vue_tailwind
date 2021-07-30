import { createRouter,createWebHistory} from 'vue-router'
import Navbar from '/src/components/Navbar.vue'
import Home from '/src/components/pages/Home.vue'
import Biodata from '/src/components/pages/Biodata.vue'
import Login from '/src/components/pages/Login.vue'
//import Create from '/src/components/pages/articles/Create.vue'
import Index from '/src/components/pages/articles/Index.vue'

const routes = [
      {
            path: '/',
            name: 'Home',
            component: Home
      },
      {
            path: '/',
            name: 'Navbar',
            component: Navbar
      },
      {
            path: '/biodata',
            name: 'Biodata',
            component: Biodata
      },
      {
            path: '/login',
            name: 'Login',
            component: Login
      },
      {
            path: '/articles/index',
            name: 'Index',
            component: Index
      }
]
const router = createRouter ({
      history: createWebHistory(),
      routes
})

export default router
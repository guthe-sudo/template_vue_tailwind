import { createRouter,createWebHistory} from 'vue-router'
import Navbar from '/src/components/Navbar.vue'
import Home from '/src/components/pages/Home.vue'
import Biodata from '/src/components/pages/Biodata.vue'

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
      }
]
const router = createRouter ({
      history: createWebHistory(),
      routes
})

export default router
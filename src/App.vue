<template>
      <div class="flex flex-col">
      <Navbar class="content-start"/>
      <router-view  class="content-center"/>
      <Footer class="content-end"/>
      </div>      
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
      name: 'App',
      components: {
            Navbar, Footer
      },
}
</script>
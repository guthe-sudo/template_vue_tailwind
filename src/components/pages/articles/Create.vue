<template>
      <div class="flex items-center justify-center bg-warmGray-100">
            <div class="w-full p-5">
                  <form class="bg-warmGray-50 shadow rounded-lg">
                        <div class="px-8 p-3 leading-relaxed text-xl text-warmGray-900">
                              <h2>tyuhgffghjk</h2>
                        </div>
                        <div class="px-8">
                              <label class="block mb-2 text-sm">Email</label>
                              <input type="email" class="w-full rounded-lg border-warmGray-200 shadow-sm transition duration-200 focus:ring-2 focus:ring-cyan-100 focus:border-cyan-500"/>
                        </div>
                        <button class="w-full bg-cyan-500 rounded-lg hover:bg-cyan-700 focus:outline-none focus:ring focus:ring-cyan-300 text-warmGray-50 mt-2">Sign In</button>
                  </form>
            </div>
      </div>
</template>

<script>
import axios from 'axios';
import {onMounted,ref} from 'vue';

export default {
      setup() {
            //reactive state
            let articles = ref([]);

            onMounted(() => {
                  //get data from api endpoint
                  axios.get('http://localhost:8000/api/subjects')
                  .then((result) => {
                        articles.value = result.data
                  }).catch((error) => {
                        console.log(err.response)
                  });
            });

            return {
                  articles
            }
      },
      // data() {
      //       return {
      //             form: {},
      //             subject: []
      //       }
      // },

      // mounted() {
      //   this.getSubjects();    
      // },

      // methods: {
      //       async getSubjects() {
      //             let response = await axios.get('http://localhost:8000/api/subjects')
      //             console.log(response.data);
      //       }
      // }
}
</script>
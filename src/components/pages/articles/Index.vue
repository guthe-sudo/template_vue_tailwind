<template>
      <div class="leading-relaxed items-center justify-center bg-warmGray-100">
            <div class="w-full p-5">
                  <div class="bg-warmGray-50 shadow rounded-lg">
                        <div class="flex flex-row px-8 p-3 text-2xl text-warmGray-900 items-center justify-between">
                              <div class="flex">
                                   <h2>List Articles</h2>
                              </div>
                              <div class="flex hover:text-lime-800 text-lime-100 bg-lime-500 rounded-2xl">
                                    <router-link link to="/">
                                          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                                          </svg>       
                                    </router-link>                       
                              </div>
                        </div>
                        <div class="p-2">
                            <table class="w-full table-auto py-5 border-double border-4 border-warmGray-500 border-rounded-2xl">
                              <thead>
                              <tr class="border-2 border-warmGray-500">
                                    <th>Title</th>
                                    <th>Subject</th>
                                    <th>Description</th>
                                    <th>Action</th>
                              </tr>
                              </thead>
                              <tbody>
                              <tr v-for="(article, i) in articles.data" :key="i" class="text-center border-2 border-warmGray-500 items-center justify-center">
                                    <td>{{article.title}}</td>
                                    <td>{{article.name}}</td>
                                    <td>{{article.description}}</td>
                                    <td class="flex flex-row lg:w-full">
                                          <div class="flex md:w-1/2 lg:w-1/2 justify-end">
                                                <router-link link to="/">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-cyan-500 hover:text-cyan-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                </svg>
                                                </router-link>
                                          </div>
                                          <div class="flex md:w-1/2 lg:w-1/2 justify-start">
                                                <router-link link to="/">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-rose-500 hover:rose-cyan-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                </svg>
                                                </router-link>
                                          </div>
                                    </td>
                              </tr>
                              </tbody>
                              </table>
                        </div>
                  </div>
                  
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
                  axios.get('/api/articles')
                  .then((result) => {
                        articles.value = result.data
                  }).catch((err) => {
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
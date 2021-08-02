<template>
      <div class="flex items-center justify-center bg-warmGray-100">
            <div class="w-full p-5  lg:justify-center">
                  <form class="bg-warmGray-50 shadow rounded-lg px-10 lg:mx-32 md:mx-10" @submit.prevent="store()">
                        <div class="py-3 leading-relaxed text-xl text-warmGray-900">
                              <h2>Create Article</h2>
                        </div>
                        <div class="pb-2">
                              <label class="block mb-2 text-sm">Title</label>
                              <input type="text" class="w-full rounded-lg border-warmGray-200 shadow-sm transition duration-200 focus:ring-2 focus:ring-cyan-100 focus:border-cyan-500" v-model="article.title" for=""/>
                        </div>
                        <div class="pb-2">
                              <label class="block mb-2 text-sm">Subject</label>
                              <select class="w-full px-2 h-10 rounded-lg border-warmGray-200 shadow-sm transition duration-200 focus:ring-2 focus:ring-cyan-100 focus:border-cyan-500" v-model="article.subject_id"                 
                    >
                          <option disabled>Please select one</option>
                          <option class="w-1/2" v-for="(subject,i) in subjects.data" :key="i" :value="subject.id">
                              {{subject.name}}
                        </option>
                              </select>
                        </div>
                        <div class="pb-2">
                              <label class="block mb-2 text-sm">Slug</label>
                              <input type="text" class="w-full rounded-lg border-warmGray-200 shadow-sm transition duration-200 focus:ring-2 focus:ring-cyan-100 focus:border-cyan-500" v-model="article.slug"/>
                        </div>
                        <div class="pb-2">
                              <label class="block mb-2 text-sm">Description</label>
                              <textarea type="text" class="w-full rounded-lg border-warmGray-200 shadow-sm transition duration-200 focus:ring-2 focus:ring-cyan-100 focus:border-cyan-500" v-model="article.description"/>
                        </div>
                        <button class="w-full bg-cyan-500 rounded-lg hover:bg-cyan-700 focus:outline-none focus:ring focus:ring-cyan-300 text-warmGray-50 mt-2 mb-5 justify-center">Submit</button>
                  </form>
            </div>
      </div>
</template>

<script>
import axios from 'axios';
import {reactive,ref, onMounted} from 'vue';
import {useRouter} from 'vue-router';

export default {
      setup() {
            //reactive state
            const article = reactive({
                  title: '',
                  subject_id: '',
                  slug: '',
                  description: '',
            });
            const subjects = ref([]);;
            const validation = reactive([]);

            const router = useRouter();
            onMounted(() => {
                  //get data from api endpoint
                  axios.get('/api/subject')
                  .then((result) => {
                        subjects.value = result.data
                  }).catch((err) => {
                        validation.value = err.response.data
                  });
            });
            function store() {
                  axios.post('/api/articles/create_article', article)
            .then(() => {
                  router.push({
                        name: 'articles.index'
                  });
            }).catch((err) => {
                  validation.value = err.response.data
            });
            }

            return {
                  article, validation, router, store, subjects
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
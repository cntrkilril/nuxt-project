<template>
  <div class="pl-8 pr-8">
    <div class="pt-2 pb-2">
      <NuxtLink to="/news" class="mr-2 hover:underline">Вернуться к новостям</NuxtLink>
      <div class="grid grid-cols-2 h-auto">
        <h2 class="text-left text-2xl justify-self-start">{{ news.name }}</h2>
        <p class="justify-self-end self-end text-gray-500">{{ news.date }}</p>
      </div>
      <div class="grid grid-cols-4 mt-2 gap-2">
        <img class="col-start-1 col-end-2" :src="'../../../'+news.full_image">
        <p class="col-start-2 col-end-5 text-justify indent-4">{{ news.desc }}</p>
      </div>
      <Comments/>
    </div>
  </div>
</template>

<script>
import Comments from "../../../../components/comments";
import axios from 'axios'
export default {
  name: "id",
  components: {Comments},
  asyncData({route, params}) {
    return axios.get(`https://demo-api.vsdev.space/api/articles/${route.params.id}`).then((res) => {
      return {
        news: res.data
      }
    })
  },
  // async fetch() {
  //   this.news = await fetch(`http://demo-api.vsdev.space/api/articles/${this.$route.params.id}`).then((result) => result.json())
  // },
  // data() {
  //   return {
  //     news: Object
  //   }
  // }
}
</script>

<style scoped>

</style>

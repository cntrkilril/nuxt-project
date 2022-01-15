<template>
  <div class="pl-8 pr-8">
    <div class="pt-2 pb-2">
      <NuxtLink to="/news" class="mr-2 hover:underline">Вернуться к новостям</NuxtLink>
      <h2 class="text-left text-2xl">Новости категории {{this.$route.params.id}}</h2>
      <div class="flex flex-col mt-2">
        <ItemNewsList v-for="item in news" :item="item"/>
      </div>
    </div>
  </div>
</template>

<script>
import ItemNewsList from "../../../../components/itemNewsList";
export default {
  name: "index",
  components: {ItemNewsList},
  head: {
    title: 'NuxtJS - Новости'
  },
  computed: {
    news() {
      return this.$store.getters.GET_NEWS_FROM_API.filter((item) => item.category == this.$route.params.id);
    }
  }
}
</script>

<style scoped>

</style>

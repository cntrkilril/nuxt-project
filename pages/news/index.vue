<template>
  <div class="pl-8 pr-8">
    <div class="pt-2 pb-2">
      <h2 class="text-left text-2xl">Новости</h2>
      <h3 class="text left text-xl">Новости по категориям</h3>
      <div class="flex flex-col">
        <NuxtLink class="hover:underline" to="/news/category/1">Категория 1</NuxtLink>
        <NuxtLink class="hover:underline" to="/news/category/2">Категория 2</NuxtLink>
        <NuxtLink class="hover:underline" to="/news/category/3">Категория 3</NuxtLink>
      </div>
      <h3 class="text left text-xl">Все новости</h3>
      <div class="flex flex-col mt-2">
        <item-news-list v-for="item in news" :item="item"/>
      </div>
    </div>
  </div>
</template>

<script>

import ItemNewsList from "../../components/itemNewsList";
export default {
  name: "news",
  components: {ItemNewsList},
  head: {
    title: 'NuxtJS - Новости'
  },
  computed: {
    news() {
      return this.$store.getters.GET_NEWS_FROM_API;
    }
  }
}
</script>

<style scoped>

</style>

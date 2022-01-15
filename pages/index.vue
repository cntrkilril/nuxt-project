<template>
  <div class="pl-8 pr-8">
    <div class="pt-2 pb-2">
      <h2 class="text-center text-2xl">Добро пожаловать!</h2>
      <v-app>
        <v-carousel class="border border-solid border-black mt-2">
          <v-carousel-item
            v-for="item in news"
            :key="item.id"
          >
            <NuxtLink :to="'news/'+item.id" class="w-full h-full flex justify-center">
              <h2 class=" self-center">{{item.name}}</h2>
            </NuxtLink>
          </v-carousel-item>
        </v-carousel>
      </v-app>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: 'NuxtJS - Главная'
  },
  computed: {
    news() {
      console.log(this.$store.getters.GET_NEWS_FROM_API)
      return this.$store.getters.GET_NEWS_FROM_API.filter(
        (item) => item.slider === true
      )
    }
  }
}
</script>

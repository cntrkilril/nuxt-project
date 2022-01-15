<template>
  <div class="duration-300 font-sans">
    <Header/>
    <Nuxt/>
  </div>
</template>

<script>
import Header from "../components/header";
export default {
  name: "default",
  components: {Header},
  mounted() {
      this.$store.dispatch('GET_NEWS_FROM_API')
  }
}
</script>

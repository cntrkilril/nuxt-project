<template>
  <NuxtLink :to="'/news/category/'+item.category+'/'+item.id" class="">
    <div class="flex mb-4 border border-solid border-black p-2 w-full justify-between">
      <div class="flex justify-self-start mr-2">
        <img class="mr-2 w-20 h-16" :src="'/'+item.preview_image">
        <div class="">
          <p class="inline font-bold">{{item.name}}</p>
          <p class="">{{item.shortDesc}}</p>
        </div>
      </div>
      <p class="justify-self-end">{{item.date}}</p>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  name: "itemNewsList",
  props: {
    item: Object
  }
}
</script>

<style scoped>

</style>

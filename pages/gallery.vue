<template>
  <div class="pl-8 pr-8">
    <div class="pt-2 pb-2">
      <h2 class="text-left text-2xl">Галерея</h2>
      <div class="grid grid-cols-2 mt-2">
        <img src="full.jpeg">
        <img src="full_2.jpeg">
        <img src="full_2.jpeg">
        <img src="full.jpeg">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "gallery",
  head: {
    title: 'NuxtJS - Галерея'
  },
}
</script>

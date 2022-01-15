<template>
  <header class="grid grid-cols-2 w-full content-center p-2 bg-blue-500 pl-8 pr-8">
    <div class="flex items-center justify-self-start">
      <NuxtLink exact active-class="text-neutral-700" to="/" class="text-white mr-2">Главная</NuxtLink>
      <NuxtLink active-class="text-neutral-700" to="/news" class="text-white mr-2">Новости</NuxtLink>
      <NuxtLink active-class="text-neutral-700" to="/gallery" class="text-white mr-2">Галерея</NuxtLink>
    </div>
    <div class="justify-self-end">
      <form>
        <input class="p-1 bg-white rounded border-0 focus:outline-0 focus:bg-sky-50" placeholder="Поиск">
        <button class="bg-black text-white p-1 rounded focus:outline-0 focus:bg-neutral-700">Поиск</button>
      </form>
    </div>
  </header>
</template>

<script>
export default {
  name: "header"
}
</script>

<style scoped>

</style>

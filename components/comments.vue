<template>
  <div class="">
    <h3 class="text-left text-xl mt-1 mb-1">Комментарии</h3>
    <form>
      <input class="p-1 rounded border-0 focus:outline-0 bg-sky-50 mr-2" v-model="name" placeholder="Имя">
      <input class="p-1 rounded border-0 focus:outline-0 bg-sky-50 mr-2" v-model="text" placeholder="Комментарий">
      <button class="bg-black text-white p-1 rounded focus:outline-0 focus:bg-neutral-700" @click="addComment">Отправить</button>
    </form>
    <div v-if="comments.length==0" class="">
      <p class="">Комментариев пока нет</p>
    </div>
    <div v-else v-for="comment in comments" class="flex mb-4 border border-solid border-black p-2 w-full justify-between mt-2">
      <div class="flex justify-self-start mr-2">
        <div class="">
          <p class="inline font-bold">{{comment.user_name}}</p>
          <p class="">{{comment.comment}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // computed: {
  //   comments() {
  //     const data = fetch(`http://demo-api.vsdev.space/api/articles/${this.$route.params.id}/comments`).then((response) => response.json()).then((article) => {return article})
  //     console.log(data)
  //     return data
  //   }
  // }
  async fetch() {
    this.comments = await fetch(`https://demo-api.vsdev.space/api/articles/${this.$route.params.id}/comments`).then((res) => res.json())
  },
  data() {
    return {
      comments: [],
      name: '',
      text: ''
    }
  },
  methods: {
    async addComment() {
      console.log(this.name, this.text)
      this.$axios.$post(`https://demo-api.vsdev.space/api/articles/${this.$route.params.id}/comments`,
        {
            user_name: this.name,
            comment: this.text
        })
    }
  },
}
</script>

<style scoped>

</style>

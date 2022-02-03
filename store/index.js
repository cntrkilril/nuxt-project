export const state = () => ({
  news: []
})

export const mutations = {
  SET_NEWS(state, news) {
    state.news = news
  }
}

export const actions = {
  async GET_NEWS_FROM_API({commit}) {
    let {data} = await this.$axios.get('https://demo-api.vsdev.space/api/articles');
    commit('SET_NEWS', data)
  }
}

export const getters = {
  GET_NEWS_FROM_API(state) {
    return state.news;
  }

}

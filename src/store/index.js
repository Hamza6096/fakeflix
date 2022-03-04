import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchMovie:"",
    movies: [],
      page:[],
      idFav:[],
      storages:[],
      populars:[],
  },
  getters: {
  },
  mutations: {
    setSearchMovie(state, query) {
      state.searchMovie = query
    },
    setMovies(state, movies) {
      state.movies = movies
    },
    setPopulars(state, populars) {
      state.populars = populars
    },
  },
  actions: {
    searchMovies(context) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=15eb3458877c356fb0e0ddb7075d8f9f&query=${context.state.searchMovie}&language=fr-FR`
      )
        .then((response) => response.json())
        .then((response) => {
          // console.log(this.state.movies)
          context.commit('setMovies', response.results)
        });
    },
    getPopular(contextPop) {
      fetch(
        ` https://api.themoviedb.org/3/movie/popular?api_key=15eb3458877c356fb0e0ddb7075d8f9f&language=fr-FR&page=1`
      )
        .then((response) => response.json())
        .then((response) => {
          console.log(response)
          contextPop.commit('setPopulars', response.results)
          console.log(this.state.populars)
        });
    },
    
  }
})

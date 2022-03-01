import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchMovie:"",
      movies:[],
  },
  getters: {
  },
  mutations: {
    setSearchMovie(state, query) {
      state.searchMovie = query
    },
    setMovies(state, movies) {
      state.movies = movies
    }
  },
  actions: {
    searchMovies(context) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=15eb3458877c356fb0e0ddb7075d8f9f&query=${context.state.searchMovie}&language=fr-FR`
      )
        .then((response) => response.json())
        .then((response) => {
          console.log(this.movies)
          //this.movies = response.results 
          context.commit('setMovies', response.results)
        });
    }
  }
})

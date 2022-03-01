<template>
  <div id="app" class="">
    <header><h1 class="text-danger pt-3 ">FAKEFLIX</h1></header>
    <nav class="navbar navbar-expand-lg navbar-light bg-dark mb-3">
  <div class="container-fluid ">
    <div class="collapse navbar-collapse" id="navbarScroll">
      <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
        <li class="nav-item">
          <a class="nav-link active text-danger" aria-current="page" href="#">Accueil</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-danger" href="#">Favoris</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-danger">Film à voir</a>
        </li>
      </ul>
      <form class="d-flex" v-on:submit.prevent>
        <input id="inputValue" class="form-control me-2 bg-dark border-danger text-light" type="search" placeholder="Search" v-model="searchMovie">
        <button class="btn btn-outline-danger bg-dark " type="submit" @click="loadData()">Search</button>
      </form>
    </div>
  </div>
<!-- <div v-for="result of results" v-bind:key="result"></div> -->
</nav>
<div class="container d-flex justify-content-around">
  <div class="row ">
<div class="card bg-dark col-3 p-2 m-2 " style="width: 18rem;" v-for="movie of movies" v-bind:key="movie" >
  <img class="card-img-top" :src="'https://image.tmdb.org/t/p/w500/'+movie.backdrop_path" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">{{movie.title}}</h5>
    <!-- <p class="card-text">{{movie.overview}}</p> -->
    <a href="#" class="btn btn-danger btn-sm">Ajouter au favoris</a>
  </div>
</div>
  </div>

</div>


    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->
    <router-view />
  </div>
</template>



<script>
//import func from 'vue-editor-bridge'
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'App',
  data: function () {
    return {
      searchMovie:"",
      movies:[],
    }
  },
  components: {
    
  },
   methods: {
    loadData: function () {

      console.log(this.searchMovie)

      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=15eb3458877c356fb0e0ddb7075d8f9f&query=${this.searchMovie}&language=fr-FR`
      )
        .then((response) => response.json())
        .then((response) => {this.movies = response.results 
        console.log(this.movies)});
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: rgb(20, 20, 20);
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

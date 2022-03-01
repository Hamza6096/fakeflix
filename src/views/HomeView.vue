<template>
  <div class="home">
    <div class="container d-flex justify-content-around">
      <div class="row">
        <p>resultat pour le film : {{$store.state.searchMovie}}</p>
        <div
          class="card bg-dark col-3 p-2 m-2"
          style="width: 18rem"
          v-for="movie of $store.state.movies"
          v-bind:key="movie"
        >
          <img
            class="card-img-top"
            :src="'https://image.tmdb.org/t/p/w500/' + movie.backdrop_path"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">{{ movie.title }}</h5>
            <!-- <p class="card-text">{{movie.overview}}</p> -->
            <a href="#" class="btn btn-danger btn-sm">Ajouter au favoris</a>
          </div>
        </div>
      </div>
    </div>
    <footer><h1 class="text-danger pb-3">FAKEFLIX</h1></footer>
    <HelloWorld />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
};
</script>

<template>
  <div class="home">
    <div class="container d-flex justify-content-around">
      <div class="row">
        <p>resultat pour le film : {{ $store.state.searchMovie }}</p>

        <div
          class="card bg-dark col-3 p-2 m-2"
          style="width: 18rem"
          v-for="movie of $store.state.movies"
          v-bind:key="movie.id"
        >
          <router-link :to="`/page/${movie.id}`">
            <img
              class="card-img-top"
              :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
              alt="imageLink movie"
            />
          </router-link>

          <div class="card-body">
            <h5 class="card-title">{{ movie.title }}</h5>
            <!-- <p class="card-text">{{movie.overview}}</p> -->

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
  data: function () {
    return {

    };
    }

};
</script>

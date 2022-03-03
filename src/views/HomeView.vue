<template>
  <div class="home">

    <hooper :itemsToShow="6">
      <slide v-for="movie of $store.state.movies" :key="movie.id">
        <img
          class="card-img-top"
          :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
          alt="imageLink movie"
        />
      </slide>

      <hooper-pagination slot="hooper-addons"></hooper-pagination>
    </hooper>


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

    <HelloWorld />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { Hooper, Slide, Pagination as HooperPagination } from "hooper";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
    Hooper,
    Slide,
    HooperPagination,
  },
  data: function () {
    return {

    };
    }

};
</script>

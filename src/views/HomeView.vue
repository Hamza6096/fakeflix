<template>
  <div class="home">
    <CarrouPop />
    <div class="container d-flex justify-content-around">
      <div class="row">
        <p class="text-danger fw-bold pt-2" v-if="searchMovie !== ''">
          resultat pour la recherche : {{ searchMovie }}
        </p>

        <div
          class="card bg-dark col-3 p-2 m-2"
          style="width: 18rem"
          v-for="movie of movies"
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CarrouPop from "@/components/CarrouPop.vue";
import { mapState } from 'vuex'

export default {
  name: "HomeView",
  components: {
    CarrouPop,
  },
  computed: mapState(["searchMovie", "movies"])
};
</script>

<template>
  <div class="carrousel">
          <hooper :itemsToShow="6">
      <slide v-for="movie of $store.state.movies" :key="movie.id">
          <router-link :to="`/page/${movie.id}`">
            <img
              class="card-img-top"
              :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
              alt="imageLink movie"
            />
          </router-link>
      </slide>

      <hooper-pagination slot="hooper-addons"></hooper-pagination>
    </hooper>
  </div>
</template>

<script>
import { Hooper, Slide, Pagination as HooperPagination } from "hooper";
export default {
  name: "CarrouPop",
  components: {
    Hooper,
    Slide,
    HooperPagination,
  },
  props: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

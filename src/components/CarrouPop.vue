<template>
  <div class="carrousel">
          <p class="fw-bold">Film les plus Populaires</p>
          
    <hooper :itemsToShow="6">
      <slide v-for="popular of $store.state.populars" :key="popular.id">
        <router-link :to="`/page/${popular.id}`">
          <img
            class="card-img-top"
            :src="`https://image.tmdb.org/t/p/w500/${popular.poster_path}`"
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
  props: {},
    created: function () {
      this.$store.dispatch("getPopular");
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

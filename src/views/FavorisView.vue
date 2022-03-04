<template>
  <div class="favoris">
    <div class="container d-flex justify-content-around">
      <div class="row">
        <div
          class="card bg-dark col-3 p-2 m-2"
          style="width: 18rem"
          v-for="singleMovie of this.singleMovies"
          v-bind:key="singleMovie.id"
        >

            <img
              class="card-img-top"
              :src="`https://image.tmdb.org/t/p/w500/${singleMovie.poster_path}`"
              alt="imageLink movie"
            />


          <div class="card-body">
            <h5 class="card-title">{{ singleMovie.title }}</h5>


          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import fetching from "@/mixins/FetchMovies";

export default {
  name: "FavoriteView",
  mixins: [fetching],
  props: {},
  created: function () {
    //mixins
    this.MovieVideofetch();
  }
};
</script>
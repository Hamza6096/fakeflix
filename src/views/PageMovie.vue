
<template>
  <div class="container" v-if="movie !== null">
    <h1>PageMovie en construction</h1>

    <div class="film">
      <iframe width="560" height="315" :src="`https://www.youtube.com/embed/${video.results[0].key}`" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

    <div class="card mb-3 bg-dark" style="max-width: 70%">
      <div class="row g-0">
        <div class="col-md-4">
          <img
            :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
            class="img-fluid rounded-start"
            alt="#"
          />
          <a href="#" class="btn btn-danger btn-sm mt-3" @click="addStorage()"
            >Ajouter au favoris</a
          >
        </div>

        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ movie.title }}</h5>
            <p class="card-text">
              {{ movie.overview }}
            </p>
            <p class="card-text">
              <small class="text-muted">
                <ul class="list-group list-group-flush">
                  Details:
                  <li class="list-group-item bg-dark text-light">
                    Date sortie: {{ movie.release_date }}
                  </li>
                  <li class="list-group-item bg-dark text-light">
                    Note: {{ movie.vote_average }}/10
                  </li>
                  <li class="list-group-item bg-dark text-light">
                    Nombre de votant: {{ movie.vote_count }}
                  </li>
                </ul>
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import fetching from "@/mixins/FetchMovies";

export default {
  name: "PageMovie",
  mixins: [fetching],
  props: {},
  created: function () {
    //mixins
    this.MovieVideofetch();
  },
  methods: {
    addStorage: function () {
      localStorage.setItem("STORAGE", JSON.stringify(`${this.movie.id}`));
      console.log(localStorage);
      this.$store.state.idFav = JSON.parse(localStorage.getItem("STORAGE"));
      console.log(this.$store.state.idFav);
      this.$store.state.storages.push(this.$store.state.idFav);
      console.log(this.$store.state.storages);
    },
  },
};
</script>


<style scoped>
</style>
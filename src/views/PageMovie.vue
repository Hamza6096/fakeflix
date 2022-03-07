
<template>
  <div class="container d-flex" v-if="singleMovies !== null">
    <div class="videoAndSingle col-10 d-flex flex-column align-items-center">
          <div class="film" v-if="video !== null">
      <iframe
        width="750"
        height="315"
        :src="`https://www.youtube.com/embed/${video.results[0].key}`"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>


      <div class="card mb-3 bg-dark pb-2" style="max-width: 70%">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              :src="`https://image.tmdb.org/t/p/w500/${singleMovies.poster_path}`"
              class="img-fluid rounded-start"
              alt="#"
            />
            <a href="#" class="btn btn-danger btn-sm mt-3" @click="addStorage()"
              >Ajouter au favoris</a
            >
          </div>

          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{{ singleMovies.title }}</h5>
              <p class="card-text">
                {{ singleMovies.overview }}
              </p>
              <p class="card-text">
                <small class="text-muted">
                  <ul class="list-group list-group-flush">
                    Details:
                    <li class="list-group-item bg-dark text-light">
                      Date sortie: {{ singleMovies.release_date }}
                    </li>
                    <li class="list-group-item bg-dark text-light">
                      Note: {{ singleMovies.vote_average }}/10
                    </li>
                    <li class="list-group-item bg-dark text-light">
                      Nombre de votant: {{ singleMovies.vote_count }}
                    </li>
                  </ul>
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
    <div class="col-2 mt-5 pt-5">
      <hooper :vertical="true" style="height: 500px" :itemsToShow="1.5" :centerMode="true">
  <slide class="border" v-for="popular of $store.state.populars" :key="popular.id">
        <router-link :to="`/page/${popular.id}`">
          <img
            class="card-img-top"
            :src="`https://image.tmdb.org/t/p/w500/${popular.poster_path}`"
            alt="imageLink movie"
          />
        </router-link>
  </slide>

</hooper>

    </div>

  </div>
</template>

<script>
import fetching from "@/mixins/FetchMovies";
import { Hooper, Slide } from "hooper";

export default {
  name: "PageMovie",
  mixins: [fetching],
  props: {},
  components: {
    Hooper,
    Slide,
  },
  created: function () {
    //mixins
    this.MovieVideofetch();
  },
  methods: {
    addStorage: function () {
      localStorage.setItem(
        "STORAGE",
        JSON.stringify(`${this.singleMovies.id}`)
      );
      // console.log(localStorage);
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
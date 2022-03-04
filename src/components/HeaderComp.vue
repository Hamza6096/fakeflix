<template>
  <div class="hello">
    <header><h1 class="text-danger pt-3">FAKEFLIX</h1></header>
    <nav class="navbar navbar-expand-lg navbar-light bg-dark mb-3">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarScroll">
          <ul
            class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
            style="--bs-scroll-height: 100px"
          >
            <li class="nav-item">
              <!-- <a class="nav-link active text-danger" aria-current="page" href="#">Accueil</a> -->
              <router-link to="/" class="nav-link active text-danger"
                >Home</router-link
              >
            </li>
            <li class="nav-item">
              <!-- <a class="nav-link active text-danger" href="#">Favoris</a> -->
              <router-link to="/favoris" class="nav-link active text-danger"
                >Favoris
              </router-link>
            </li>
          </ul>
          <form class="d-flex" v-on:submit.prevent>
            <input
              id="inputValue"
              class="form-control me-2 bg-dark border-danger text-light"
              type="search"
              placeholder="Search"
            />
            <router-link to="/">
              <button
                class="btn btn-outline-danger bg-dark"
                type="submit"
                @click="loadData()"
              >
                Search
              </button>
            </router-link>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {},
  methods: {
    loadData: function () {
      this.$store.commit(
        "setSearchMovie",
        document.getElementById("inputValue").value
      );
      this.$store.dispatch("searchMovies");
      // console.log(this.$store.state.searchMovie);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

<template>
  <div class="favoris">
    <div class="container d-flex justify-content-around">
      <div class="row">
        <div
          class="card bg-dark col-3 p-2 m-2"
          style="width: 18rem"
          v-for="storage of $store.state.storages"
          v-bind:key="storage.id"
        >

            <img
              class="card-img-top"
              :src="`https://image.tmdb.org/t/p/w500/${storage.poster_path}`"
              alt="imageLink movie"
            />


          <div class="card-body">
            <h5 class="card-title">{{ storage.title }}</h5>


          </div>
        </div>
      </div>
    </div>
  </div>
</template>

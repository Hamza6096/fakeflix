<template>
  <div id="app" class="">
    <HeaderComp />
    <router-view />
    <HelloWorld />
  </div>
</template>



<script>
//import func from 'vue-editor-bridge'
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import HeaderComp from "@/components/HeaderComp.vue";
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "App",
  data: function () {
    return {};
  },
  components: {
    HeaderComp,
    HelloWorld
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: rgb(20, 20, 20);
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
}
</style>

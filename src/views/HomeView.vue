<template>
  <div class="home">
    
        <footer><h1 class="text-danger pb-3 ">FAKEFLIX</h1></footer>
    <HelloWorld/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>

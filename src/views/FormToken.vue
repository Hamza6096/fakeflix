<template>
  <div class="hello">
<h1>EN CONSTRUCTION</h1>
<div class="login-form">
  <h1>Formulaire de connexion</h1>
  <form method="post" action="" @submit.prevent="onSubmit">
    <label for="username">Pseudonyme</label>
    <input id="username" type="text" name="username" placeholder="Pseudonyme"/>
    <label for="password">Mot de passe</label>
    <input id="password" type="password" name="password" placeholder="Mot de passe"/>
    <label for="remember-me">Se souvenir de moi</label>
    <input id="remember-me" type="checkbox" name="remember-me"/>
    <input type="submit" name="login-form-submit" value="Connexion"/>
  </form>
</div>
  </div>
</template>

<script>
export default {
  name: "FormuToken",
  props: {}
};


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

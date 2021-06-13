<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Crete+Round&display=swap");
* {
  font-family: "Crete Round", serif;
}

h1 {
  background-color: rgba(241, 148, 138, 0.9);
  color: whitesmoke;
}
</style>
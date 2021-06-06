<template>
  <div class="mt-5 ml-4 intro col-lg-6 col-sm-12 col-xs-12">
    <img src="../assets/logo.jpg" style="width: 50%" alt="logo" />
    <div class="sentences mt-5">
      <p>Rompre avec l'isolement</p>
      <p class="ml-4">Garder son indépendance</p>
      <p class="ml-4">Préserver son autonomie</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Coordonnees",
  components: {},
  data() {
    return {};
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital@1&display=swap");
.intro {
  font-family: "Bodoni Moda", serif !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.sentences {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

@media (min-width: 1281px) {
  .sentences {
    font-size: 1.4rem;
  }
}
@media (min-width: 1000px) and (max-width: 1280px) {
}
@media (min-width: 481px) and (max-width: 999px) {
}
@media (min-width: 200px) and (max-width: 480px) {
}
</style>

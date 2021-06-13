<template>
  <div class="intro col-lg-6 col-sm-12 col-xs-12">
    <img src="../assets/logo.jpg" style="width: 60%" alt="logo" />
    <div class="sentences mt-5">
      <p class="subtitle-intro">Rompre avec l'isolement</p>
      <p class="subtitle-intro">Garder son indépendance</p>
      <p class="subtitle-intro">Préserver son autonomie</p>
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

.subtitle-intro {
  font-style: italic;
}

.sentences {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
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

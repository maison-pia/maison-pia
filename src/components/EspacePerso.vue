<template>
  <div class="espace">
    <h1>VOTRE ESPACE PERSONNEL</h1>
    <div class="photo1 mt-5">
      <p class="legende1 mt-3 col-12">
        Chambre de 13,70m² avec placards. Prises TV et internet. Salle de bain
        (5m²) entièrement équipé, avec W.C. Sortie individuelle donnant sur une
        terrasse privée.
      </p>
      <img
        class="col-xl-6 col-lg-6 col-md-12 col-sm-12"
        src="./../assets/chambre.jpg"
        alt="espacecommun1"
      />
      <img
        class="col-xl-6 col-lg-6 col-md-12 col-sm-12"
        src="./../assets/sbd.jpg"
        alt="espacecommun2"
      />
      <img
        class="col-xl-6 col-lg-6 col-md-12 col-sm-12"
        src="./../assets/wc.jpg"
        alt="espacecommun3"
      />
      <img
        class="col-xl-6 col-lg-6 col-md-12 col-sm-12"
        src="./../assets/terrasseperso.jpg"
        alt="espacecommun1"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "EspacePerso",
  components: {},
  data() {
    return {};
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital@1&display=swap");
.photo1 {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.espace {
  margin-top: 8%;
}

@media (min-width: 1281px) {
  .legende1 {
    font-size: 1.8rem;
  }
}
@media (min-width: 1000px) and (max-width: 1280px) {
}
@media (min-width: 481px) and (max-width: 999px) {
}
@media (min-width: 200px) and (max-width: 480px) {
}
</style>

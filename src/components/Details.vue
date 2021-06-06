<template>
  <div class="mt-5">
    <p class="detail">
      Maison neuve sur un terrain de 840m², conçue pour accueillir 4
      colocataires séniors. Elle est située à Verdalle dans un lotissement à
      200m de la Maison de Santé du Terrefort et vous trouverez également
      supérette, coiffeur et boulangerie.
    </p>
  </div>
</template>

<script>
export default {
  name: "Details",
  components: {},
  data() {
    return {};
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital@1&display=swap");
.detail {
  text-align: justify;
}

@media (min-width: 1281px) {
  .detail {
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

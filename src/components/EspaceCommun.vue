<template>
  <div class="espace">
    <h1>L'ESPACE COMMUN</h1>
    <div class="photo1 mt-5">
      <p class="legende1 mt-3 col-12">
        La pièce de vie 50m² avec une vue imprenable sur la Montagne noire
      </p>
      <img
        class="col-xl-6 col-lg-6 col-md-12 col-sm-12"
        src="./../assets/espacecommun1.jpg"
        alt="espacecommun1"
      />
      <img
        class="col-xl-6 col-lg-6 col-md-12 col-sm-12"
        src="./../assets/espacecommun2.jpg"
        alt="espacecommun2"
      />
      <img
        class="col-xl-6 col-lg-6 col-md-12 col-sm-12"
        src="./../assets/espacecommun3.jpg"
        alt="espacecommun3"
      />
    </div>

    <div class="photo1 mt-5">
      <p class="legende1 mt-3 col-12">La terrasse commune avec un potager</p>
      <img
        class="col-xl-6 col-lg-6 col-md-12 col-sm-12"
        src="./../assets/terrasse3.jpg"
        alt="espacecommun1"
      />
      <img
        class="col-xl-6 col-lg-6 col-md-12 col-sm-12"
        src="./../assets/terrasse2.jpg"
        alt="espacecommun2"
      />
      <img
        class="col-xl-6 col-lg-6 col-md-12 col-sm-12"
        src="./../assets/terrasse1.jpg"
        alt="espacecommun3"
      />
      <img
        class="col-xl-6 col-lg-6 col-md-12 col-sm-12"
        src="./../assets/potager.jpg"
        alt="espacecommun3"
      />
    </div>
  </div>
</template>

<script>
import { mdiMapMarker, mdiCity, mdiPhone, mdiEmail } from "@mdi/js";
export default {
  name: "EspaceCommun",
  components: {},
  data() {
    return {
      icons: {
        mdiMapMarker,
        mdiCity,
        mdiPhone,
        mdiEmail,
      },
    };
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

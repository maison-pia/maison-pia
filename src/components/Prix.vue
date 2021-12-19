<template>
  <div class="espace">
    <h1 class="subtitle-section">
      &nbsp;PRIX &nbsp; DE &nbsp; LA &nbsp; LOCATION
    </h1>
    <div class="photo1 mt-5">
      <p class="legende1 mt-3 col-12">
        450€/chambre meublée + 50€/personne de provisions sur charges (comprenant eau,
        électricité, climatisation, chauffage et internet). 
      </p>
    </div>
    <p class="legende1 mt-3 col-12">
        Nous vous proposons une semaine d'essai à 150€.
      </p>
  </div>
</template>

<script>
import { mdiMapMarker, mdiCity, mdiPhone, mdiEmail } from "@mdi/js";
export default {
  name: "Prix",
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
.subtitle-section {
  background-color: rgba(241, 148, 138, 0.9);
  color: whitesmoke;
}

@media (min-width: 1281px) {
  .subtitle-section {
    font-size: 2.5rem;
  }
}
@media (min-width: 1000px) and (max-width: 1280px) {
  .subtitle-section {
    font-size: 2.3rem;
  }
}
@media (min-width: 481px) and (max-width: 999px) {
  .subtitle-section {
    font-size: 2rem;
  }
}
@media (min-width: 200px) and (max-width: 480px) {
  .subtitle-section {
    font-size: 1.8rem;
  }
}
</style>

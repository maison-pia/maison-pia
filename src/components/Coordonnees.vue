<template>
  <div class="mt-5">
    <ul class="data">
      <li style="font-weight: bold">Sokphea TAN</li>
      <li class="mt-2">
        <v-icon>{{ icons.mdiMapMarker }}</v-icon
        >13 lotissement de la Lauzerdié 81110 VERDALLE
      </li>
      <li class="mt-2">
        <v-icon>{{ icons.mdiCity }}</v-icon
        >A 15 min de CASTRES
      </li>
      <li class="mt-2">
        <v-icon>{{ icons.mdiPhone }}</v-icon
        >07.70.99.63.25
      </li>
      <li class="mt-2">
        <v-icon>{{ icons.mdiEmail }}</v-icon
        >07.70.99.63.25
      </li>
      <li class="mt-2">A votre écoute !</li>
    </ul>
  </div>
</template>

<script>
import { mdiMapMarker, mdiCity, mdiPhone, mdiEmail } from "@mdi/js";
export default {
  name: "Coordonnees",
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
.data {
  list-style-type: none;
}

@media (min-width: 1281px) {
}
@media (min-width: 1000px) and (max-width: 1280px) {
}
@media (min-width: 481px) and (max-width: 999px) {
}
@media (min-width: 200px) and (max-width: 480px) {
}
</style>

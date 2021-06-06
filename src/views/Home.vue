<template>
  <header>
    <div id="home" class="mt-5">
      <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
        <v-row align="center" justify="center">
          <v-col class="text-center">
            <div>
              <p class="title-banner">Bienvenue chez Maison Pia !</p>
              <p class="subtitle-banner">Colocation Senior</p>
            </div>
          </v-col>
        </v-row>
      </v-parallax>
    </div>
  </header>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital@1&display=swap");

.title-banner {
  font-family: "Bodoni Moda", serif !important;
  margin-top: 10%;
  font-size: 5rem;
  text-align: center;
}

.title-banner:hover {
  color: rgb(255, 251, 0);
}

.subtitle-banner {
  font-size: 2.3rem;
}
</style>

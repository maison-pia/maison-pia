<template>
  <header>
    <div id="home" class="mt-5">
      <v-parallax src="./../assets/IMG-20210606-WA0013.jpg">
        <v-row align="center" justify="center">
          <v-col class="text-center">
            <div>
              <p class="title-banner">
                <span class="subtitle-banner"> COLOCATION SENIOR </span>
                <span
                  class="col-8"
                  style="background-color: rgba(241, 148, 138, 0.9)"
                  >Bienvenue chez Maison Pia
                </span>
              </p>
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
  color: whitesmoke;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.subtitle-banner {
  font-family: "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial,
    sans-serif;
  color: whitesmoke;
  font-size: 2.6rem;
  font-weight: normal;
}
</style>

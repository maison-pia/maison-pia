<template>
  <header>
    <div id="home" class="mt-5">
      <v-parallax src="./../assets/banner.webp">
        <v-row align="center" justify="center">
          <v-col class="text-center">
            <div>
              <p class="title-banner">
                <span
                  class="col-8"
                  style="background-color: rgba(241, 148, 138, 0.9)"
                  >Bienvenue chez Maison Pia
                </span>
                <span class="subtitle-banner"> COLOCATION SENIOR </span>
              </p>
            </div>
          </v-col>
        </v-row>
      </v-parallax>
      <div class="container">
        <div class="part1">
          <Coordonnees />
          <Intro />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Coordonnees from "../components/Coordonnees.vue";
import Intro from "../components/Intro.vue";
export default {
  name: "Home",
  components: { Coordonnees, Intro },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital@1&display=swap");
.title-banner {
  font-family: "Bodoni Moda", serif !important;
  text-align: center;
  color: whitesmoke;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.subtitle-banner {
  font-family: "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial,
    sans-serif;
  color: white;
  margin-top: 10%;
}

.part1 {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}

@media (min-width: 1281px) {
  .title-banner {
    margin-top: 10%;
    font-size: 4rem;
  }

  .subtitle-banner {
    font-size: 2.6rem;
  }
}

@media (min-width: 1000px) and (max-width: 1280px) {
  .title-banner {
    margin-top: 10%;
    font-size: 3.6rem;
  }

  .subtitle-banner {
    font-size: 2.6rem;
  }
}

@media (min-width: 481px) and (max-width: 999px) {
  .title-banner {
    margin-top: 10%;
    font-size: 3.2rem;
  }

  .subtitle-banner {
    font-size: 2.6rem;
  }
}
@media (min-width: 200px) and (max-width: 480px) {
  .title-banner {
    margin-top: 10%;
    font-size: 2.6rem;
  }

  .subtitle-banner {
    font-size: 2rem;
  }
}
</style>

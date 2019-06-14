<template>
  <div class="card-wrapper">
    <v-card
      class="card"
    >
      <v-img v-bind:src="catImg" class="fact__img">
        <v-layout
          align-end
          fill-height
          pa-3
          white--text
        >
          <div class="title card__title">Do you know?</div>
        </v-layout>
      </v-img>
      <v-card-title>
        <v-progress-circular
          v-if="catFact === null"
          indeterminate
          color="#FCA311" 
          class="progress"
        ></v-progress-circular>
        <div v-else>{{ catFact }}</div>
      </v-card-title>
      <v-card-actions class="card__button-wrapper">
        <v-spacer></v-spacer>
        <v-btn fab dark small color="#A40E4C">
        <v-icon dark>favorite</v-icon>
      </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import catImg from '../images/cat.jpg';
import axios from 'axios';

export default {
  data() {
    return {
      catImg,
      catFact: null
    }
  },

  mounted() {
    axios
      .get(`https://cors-anywhere.herokuapp.com/cat-fact.herokuapp.com/facts/${this.$route.params.id}`)
      .then(response => {
        this.catFact = response.data.text;
      })
    axios
      .get(`https://cors-anywhere.herokuapp.com/api.thecatapi.com/v1/images/search`)
      .then(response => {
        this.catImg = response.data[0].url;
      })
  }

}
</script>

<style scoped>
  .card-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 293px);
  }
  .card {
    max-width: 345px;
    width: 100%;
    margin: 30px 0;
    font-family: "Poppins", sans-serif;
    padding-bottom: 16px;
    border-radius: 4px;
  }
  .card__title {
    font-family: "Poppins", sans-serif !important;
  }
  .card__button-wrapper {
    padding-right: 16px;
  }
  .fact__img {
    max-height: 300;
  }
  .progress {
    margin: 10px auto;
  }
</style>

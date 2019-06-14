<template>
  <v-card
    class="card"
    max-width="300"
    color="#E5E5E5"
  >
    <v-card-title>
      <div class="card__fact">{{ fact | shorten }}</div>
    </v-card-title>

    <v-card-actions class="card__button-wrapper">
      <v-spacer></v-spacer>
      <router-link v-bind:to="`/facts/${factId}`" class="button__link" >
        <v-btn flat small class="card__button" color="#A40E4C">Learn more</v-btn>
      </router-link>
    </v-card-actions>
  </v-card>
</template>

<script>

export default {

  props: ['fact', 'factId'],

  filters: {
    shorten: (fact) => {
  
      if (fact.length < 200) {
        return fact;
      } else {
        const factWords = fact.split(' ');

        let wordsLengthSum = 0;
        for (let i = 0; wordsLengthSum < 176 && i < factWords.length; i++) {
          wordsLengthSum += factWords[i].length + 1;
        }

        return `${fact.slice(0, wordsLengthSum - 1)}…`;
      }
    }
  }

}
</script>

<style scoped>
  .card {
    width: 200px;
    margin: 16px;
    position: relative;
    padding-bottom: 32px;
    font-family: "Poppins", sans-serif;

  }
  .card:hover {
    transform: rotate(4deg);
  }
  .card__fact {
    font-weight: 400;
    line-height: 1.43;
    letter-spacing: 0.01071em;
  }
  .card__button-wrapper {
    position: absolute;
    bottom: 0;
  }
  .card__button {
  font-weight: 600;
  letter-spacing: 1px;
  }
  .button__link {
    text-decoration: none;
  }
</style>
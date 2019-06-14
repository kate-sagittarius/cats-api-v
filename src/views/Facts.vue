<template>
  <div class="facts">
    <v-progress-circular
      v-if="catFacts.length === 0"
      indeterminate
      color="#A40E4C" 
      class="progress"
      :size="70"
      :width="7"
    ></v-progress-circular>
    <Fact v-else v-for="catFact in catFacts" v-bind:fact="catFact.text" v-bind:key="catFact._id" v-bind:factId="catFact._id" />
  </div>
</template>

<script>
import Fact from '@/components/Fact';
import axios from 'axios';

export default {
  components: {
    Fact
  },
  data () {
    return {
      catFacts: []
  }
  },
  mounted () {
    axios
      .get('https://cors-anywhere.herokuapp.com/cat-fact.herokuapp.com/facts')
      .then(response => {
        this.catFacts = response.data.all.slice(0, 50);
      })
  }
}
</script>

<style>
  .facts {
    margin: 24px;
    min-height: calc(100vh - 327px);
    box-sizing: border-box;
    padding: 8px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: stretch;
  }
  .progress {
    align-self: center;

  }
</style>


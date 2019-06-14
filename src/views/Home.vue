<template>
  <div class="greeting-wrapper">
    <v-sheet
      class="pa-5 greeting"
    >
      <v-sheet
        elevation="2"
        class="mx-auto greeting__message"
        height="100"
        min-width="200"
        max-width="800"
      >
        <h3 class="headline greeting__message__heading">
          Would you like to find out more about cats?
        </h3>
        <p>
          Cats are amazing creatures enhanced with extreme cuteness and beauty. 
          Using the purr power they can heal humans and bring joy.
        </p>
        <router-link to="/facts" class="button__link">
          <v-btn
          color="#f50057"
          class="greeting__button"
          >
          Learn more
          </v-btn>
        </router-link>
      </v-sheet>
    </v-sheet>
  </div>
</template>

<script>
  export default {
    name: 'Home'
  }
</script>

<style>
  .greeting-wrapper {
    margin: 24px;
    min-height: calc(100vh - 327px);
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .greeting {
    width: 100%;
  }
  .greeting__message {
    max-width: 800px;
    min-height: 212px;
    box-sizing: border-box;
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-family: 'Poppins', sans-serif;
  }
  .greeting__message__heading {
    font-family: 'Poppins', sans-serif !important;
  }
  .greeting__button {
    width: 125px;
    font-weight: 600;
    color: #fff !important;
    line-height: 1.75;
    letter-spacing: 0.02857em;
  }
  .button__link {
    text-decoration: none;
  }
</style>

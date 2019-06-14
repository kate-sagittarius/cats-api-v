<template>
  <div class="not-found-wrapper">
    <v-sheet
      class="pa-5 not-found"
    >
      <v-sheet
        elevation="2"
        class="mx-auto not-found__message"
        height="100"
        min-width="200"
        max-width="800"
      >
        <p class="not-found__message__text">
          Unfortunately, the page you are looking for can't be reached:(
          <br>
          But we've got a lot of amazing cat facts for you!
        </p>
        <router-link to="/facts" class="button__link">
          <v-btn
          color="#FCA311"
          class="not-found__button"
          >
          Go back to cat facts
          </v-btn>
        </router-link>
      </v-sheet>
    </v-sheet>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style scoped>
.not-found-wrapper {
    margin: 24px;
    min-height: calc(100vh - 327px);
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .not-found {
    width: 100%;
  }
  .not-found__message {
    max-width: 800px;
    min-height: 212px;
    box-sizing: border-box;
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    font-family: 'Poppins', sans-serif;
  }
  .not-found__message__text {
    font-size: 18px;
    letter-spacing: .5px;
  }
  .not-found__button {
    width: 225px;
    font-weight: 600;
    color: #fff !important;
    line-height: 1.75;
    letter-spacing: 0.02857em;
  }
  .button__link {
    text-decoration: none;
  }
</style>

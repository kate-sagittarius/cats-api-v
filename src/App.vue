<template>
  <v-app>
    <v-content>
      <div class="app-wrapper">
        <Header />
        <router-view></router-view>
        <Footer />
      </div>
    </v-content>
  </v-app>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style>
  .app-wrapper {
    background-color: #ffffff;
    min-height: 96vh;
    box-shadow: 0 0 8px #ccc;
    margin: 12px;
    border-radius: 16px;
    overflow: hidden;
    position: relative;
  }
</style>


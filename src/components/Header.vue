<template>
  <header class="header">
    <router-link to="/" class="header__link">
      <h1 class="header__heading">Cats Universe</h1>
    </router-link>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style>
  .header {
    background: #ffffff url('../images/header.png');
    min-height: 168px;
    background-position-x: right;
    background-position-y: bottom;
    background-repeat: no-repeat;
    background-size: contain;
    padding: 20px 40px;
    display: flex;
    align-items: flex-end;
  }
  .header__link {
    text-decoration: none;
  }
  .header__heading {
    font-family: 'Fredericka the Great', cursive;
    font-size: 80px;
    font-weight: 400;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 16px;
    color: #000;
  }
</style>

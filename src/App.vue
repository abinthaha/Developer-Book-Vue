<template>
    <main id="app">
        <h1>Routing</h1>
        <hr>
        <app-header></app-header>
        <hr>
        <router-view></router-view>
    </main>
</template>

<script>

import Header from './components/Header/Header.vue';

export default {
  components: {
    appHeader: Header
  }
};
</script>

<style lang="scss" scoped>
  @import './styles/global.scss';
</style>>

<template>
    <main id="app">
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

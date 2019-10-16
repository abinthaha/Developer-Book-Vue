<template>
    <section>
        <app-header></app-header>
        <h2>Home</h2>
    </section>
</template>

<script>
    import Header from '../Header/Header.vue';

    export default {
        components: {
            appHeader: Header
        }
    }
</script>
<template>
  <section>
      Home
    <!-- <button @click="addUser()">Click</button> -->

    <!-- <ul>
      <li v-for="user in userList" v-bind:key="user.id">{{user.first_name}} {{user.last_name}}</li>
    </ul> -->
  </section>
</template>

<script>

export default {
  name: "newsfeed",
  components: {},
  data: function() {
    return {
      message: "Newsfeed",
      loading: false,
      reqestEmail: "abin@gmail.com",
      currentUser: {},
      userList: [],
      errored: false,
      info: []
    };
  },
  methods: {
  },
  filters: {},
};
</script>

<style lang="scss">
</style>
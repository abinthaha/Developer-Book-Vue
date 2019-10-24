<template>
  <header class="main-header">
    <div>Developer Book</div>
    <nav v-if="getUserDetails">
      <ul class="col-md-12">
        <router-link tag="li" active-class="active" to="/home" exact>Newsfeed</router-link>
        <router-link tag="li" active-class="active" to="/home/posts">Posts</router-link>
        <router-link tag="li" active-class="active" to="/home/profile">Profile</router-link>
        <span
          class="user-name"
          :class="getCurrentClass()"
          :title="getUserFullName(getUserDetails)"
        >{{getUserDetails.first_name | firstLetter}}</span>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "main-header",
  data: function() {
    return {
      currentClass: "some"
    };
  },
  filters: {
    firstLetter: function(value) {
      return value ? value[0] : "";
    }
  },
  methods: {
    getCurrentClass: function() {
      const colorArray = ["red", "violet", "green", "blue", "orange", "brown"];
      return colorArray[
        Math.floor(Math.random() * Math.floor(colorArray.length))
      ];
    },
    getUserFullName: function(user) {
      return user ? user.first_name + " " + user.last_name : '';
    }
  },
  computed: {
    getUserDetails: function() {
      return this.$store.getters.getUserDetails;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
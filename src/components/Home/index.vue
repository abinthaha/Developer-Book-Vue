<template>
  <section id="home-wrapper">
    <app-header></app-header>
    <div class="content-wrapper">
      <router-view></router-view>
    </div>
  </section>
</template>

<script>
import Header from "../../common/Header/Header.vue";
import { userRef } from "../../firebase/index";

export default {
  name: "home-wrapper",
  components: {
    appHeader: Header
  },
  data: function() {
    return {
      reqestEmail: localStorage.getItem("user_email"),
      currentUser: {}
    };
  },
  methods: {
    getUserData: function() {
      userRef.get().then(data => {
        data.forEach(doc => {
          if (doc.data().email === this.reqestEmail) {
            this.currentUser = doc.data();
          }
        });
        this.$store.dispatch("USER_DATA", this.currentUser);
      });
    }
  },
  computed: {
    getUserDetails: function() {
      this.$store.getters.getUserDetails;
    }
  },
  mounted: function() {
    this.getUserData();
  }
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
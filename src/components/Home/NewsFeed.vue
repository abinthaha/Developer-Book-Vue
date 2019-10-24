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
import { db, userRef } from "../../firebase/index";

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
    // getUserData: function() {
    //   this.userList = [];
    //   userRef.get().then(data => {
    //     data.forEach(doc => {
    //         console.log(this.reqestEmail);
    //         if (doc.data().email === this.reqestEmail) {
    //             this.currentUser = doc.data();
    //         }
    //       this.userList.push(doc.data());
    //     });
    //   });
    // },
    // addUser: function() {
    //   const userData = {
    //     id: new Date().getTime(),
    //     first_name: "Jeffin",
    //     last_name: "Jacob",
    //     role: 1,
    //     email: "jeffin@gmail.com"
    //   };
    //   userRef
    //     .add({
    //       ...userData
    //     })
    //     .then(data => {
    //       this.getUserData();
    //     });
    // }
  },
  filters: {},
//   mounted: function() {
//     this.getUserData();
//   }
};
</script>

<style lang="scss">
</style>
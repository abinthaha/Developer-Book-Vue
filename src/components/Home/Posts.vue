<template>
  <section class="container">
    <add-post @messageFromChild="childMessageReceived"></add-post>
    <ul class="post-wrapper">
      <li class="each-post" v-for="posts in postsData" v-bind:key="posts.id">
        <div class="post-heading">{{posts.post_heading}}</div>
        <div class="post-content">{{posts.post_content}}</div>
      </li>
    </ul>
  </section>
</template>

<script>
import AddPost from "../../common/AddPost";
import { postsRef } from "../../firebase";

export default {
  name: "posts",
  components: {
    addPost: AddPost
  },
  data: function() {
    return {
      postsData: []
    };
  },
  methods: {
    childMessageReceived: function(data) {
      if (data) {
        this.getAllPosts();
      }
    },
    getAllPosts: function() {
      this.postsData = [];
      postsRef.get().then(data => {
        data.forEach(doc => {
          this.postsData.push(doc.data());
        });
      });
    }
  },
  mounted() {
    this.getAllPosts();
  }
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
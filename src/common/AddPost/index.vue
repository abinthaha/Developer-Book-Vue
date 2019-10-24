<template>
  <section class="col-md-12 add-post-wrapper">
    <ul class="nav">
      <li
        class="nav-item"
        v-on:click="setActiveTab('text')"
        :class="[currentActive==='text' ? 'active' : '']"
      >Text</li>
      <li
        class="nav-item"
        v-on:click="setActiveTab('image')"
        :class="[currentActive==='image' ? 'active' : '']"
      >Image</li>
      <li
        class="nav-item"
        v-on:click="setActiveTab('video')"
        :class="[currentActive==='video' ? 'active' : '']"
      >Video</li>
    </ul>
    <textarea
      v-on:keyup="textChange($event)"
      name="add-post"
      class="add-post-textarea"
      :value="postText"
    ></textarea>
    <div class="text-right p-2">
      <button class="btn btn-primary" v-on:click="sendPost()">Post</button>
    </div>
  </section>
</template>

<script>
import { postsRef } from "../../firebase";

export default {
  name: "add-post",
  data: function(params) {
    return {
      currentActive: "text",
      postText: ""
    };
  },
  methods: {
    setActiveTab: function(type) {
      this.currentActive = type;
    },
    textChange: function(ev) {
      this.postText = ev.target.value;
    },
    clearFields: function() {
        this.postText = '';
    },
    sendPost: function() {
      const data = {
        post_type:
          this.currentActive === "text"
            ? 1
            : this.currentActive === "image"
            ? 2
            : 3,
        post_heading: localStorage.getItem('user_email') + " Added a new post",
        post_content: this.postText
      };
      postsRef.add({
          ...data
        })
        .then(data => {
            this.clearFields();
            this.$emit('messageFromChild', true)
        });
    }
  },
  mounted: function() {
    this.currentActive = "text";
  }
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
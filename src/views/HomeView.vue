<template>
  <div class="home">
    <div class="postwindow" ref="postWindowsRef">
      <post v-for = "post in postList" :key="post.id" ref="postRef"
            :post = "post" />
    </div>
    <button class="resetLikes" v-on:click="resetLikes">Reset likes</button>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Post from "@/components/Post";

export default {
  name: 'HomeView',
  components: {
    Post,
    Header
  },
  methods: {
    resetLikes: function () {
      this.$refs.postRef.forEach(post => post.likes = 0)
    }
  },
  computed: {
  postList(){
    return this.$store.getters.postList
  }}
}
</script>

<style>

.postwindow  {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  margin: 10px 10px 10px;
  padding: 10px;
}
.resetLikes {
  width: 100%;
}
</style>

<template>
  <div class="home">
    <div class="postwindow" >
      <post v-for = "post in postList" :key="post.id"
            :post = "post"/>
    </div>
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
</style>

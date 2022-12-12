<template>
  <PostPanel :post-entity="postEntity"></PostPanel>
  <Footer></Footer>
</template>

<script>

import Footer from "@/components/Footer";
import PostPanel from "@/components/PostPanel";
export default {
  name: "PostView",
  components: {Footer, PostPanel},
  data() {
    return {
      postEntity: {
        id: "0",
        body: "EMPTY_POST",
        date: "0000"
      }
    }
  },
  props: {
    id: {
      default: null,
    }
  },
  methods: {
    fetchPost() {
      if (this.id != null) {
        fetch(`http://localhost:3000/api/post/${this.id}`)
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
              this.postEntity = data;
            })
            .catch((err) => console.log(err.message));
      }
    }
  },
  mounted() {
    this.fetchPost();
    console.log("mounted");
  }
}
</script>

<style scoped>

</style>
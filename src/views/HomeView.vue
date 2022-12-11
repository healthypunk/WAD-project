<template>
  <div class="home">
    <div class="container">
      <button v-if = "authResult" @click="Logout" class="center">Logout</button>
    </div>
    <div class="postwindow" ref="postWindowsRef">
      <post v-for = "post in posts" :key="post.id" ref="postRef"
            :post = "post" />
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Post from "@/components/Post";
import Footer from "@/components/Footer";
import auth from "@/auth";

export default {
  name: 'HomeView',
  components: {
    Post,
    Header,
    Footer
  },
  data() {
    return {
      posts: [],
      authResult: auth.authenticated()
    };
  },
  methods: {
    fetchPosts() {
      fetch(`http://localhost:3000/api/posts/`)
          .then((response) => response.json())
          .then((data) => {console.log(data); this.posts = data;})
          .catch((err) => console.log(err.message));
    },

    Logout() {
      fetch("http://localhost:3000/auth/logout", {
        credentials: 'include',
      })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            console.log('jwt removed');
            //console.log('jwt removed:' + auth.authenticated());
            this.$router.push("/login");
            //location.assign("/");
          })
          .catch((e) => {
            console.log(e);
            console.log("error logout");
          });
    },
  },
/*  computed: {*/
/*  postList(){
    return this.$store.getters.postList
  }},*/
  mounted() {
    this.fetchPosts();
    console.log("mounted");
  }
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
.container {
  display: flex;
  justify-content: center;
}

.container button {
  font-family: 'Zilla Slab', sans-serif;
  font-weight: 500;
  padding: 5px;
  min-width: 7%;
  border-radius: 6px;
  border-style: groove;
  border-color: rgba(220, 207, 230, 0.7);
  background-color: rgba(225, 210, 230, 0.4);
}
</style>

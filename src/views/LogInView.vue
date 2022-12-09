<template>
  <div class="loginn">
    <LogIn></LogIn>
    <Footer></Footer>
  </div>
</template>

<script>
import LogIn from "@/components/LogIn";
import Footer from "@/components/Footer";

export default {
  name: "LogInView",
  components: {LogIn, Footer}
}
</script>

<style scoped>

.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
}

</style>
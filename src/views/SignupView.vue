
<template>
  <div class="signup">
    <SignUp></SignUp>
    <Footer></Footer>
  </div>
</template>
<script>
// @ is an alias to /src
import SignUp from "@/components/SignUp";
import Footer from "@/components/Footer";

export default {
  name: 'SignUpView',
  components: {
    SignUp,
    Footer
  },
}
</script>

<style scoped>
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
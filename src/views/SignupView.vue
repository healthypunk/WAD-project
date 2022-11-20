<template>
  <div class="signup">
    <h1>This is a signup</h1>
    <SignUp></SignUp>
  </div>
</template>
<script>
// @ is an alias to /src
import SignUp from "@/components/SignUp";

export default {
  name: 'SignUpView',
  components: {
    SignUp
  },
}
</script>
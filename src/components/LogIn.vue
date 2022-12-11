<template>
  <div class="signup" >
    <form @change="dirty = true">
      <div class="email">
        <label><b>Email</b></label>
        <input name="email" v-model="email" placeholder="email" type="email">
        <br>
      </div>
      <div class="passwd">
        <label><b>Password</b></label>

        <input name="password" v-model="password" placeholder="password" type="password">
        <br>
      </div>
      <div class="buttons">
        <button type="button" v-on:click="LogIn">Login</button>
        <button type="button" v-on:click="this.$router.push('/signup')">Sign Up</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "LogIn",
  data: function () {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    LogIn() {
      var data = {
        email: this.email,
        password: this.password
      };
      // using Fetch - post method - send an HTTP post request to the specified URI with the defined body
      fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: 'include', // to specify this if cookies needed
        body: JSON.stringify(data),
      })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            location.assign("/");
          })
          .catch((e) => {
            console.log(e);
            console.log("error");
          });
    },
  },
}
</script>

<style scoped>
.signup {
  box-sizing: content-box;
  border-style: groove;
  border-radius: 10px;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-top: 5vh;
  margin-inline: 25vw;
  background-color: rgba(220, 207, 230, 0.4);
}

.email{
  margin-right: 2px;
  margin-bottom: 10px;
}

.passwd{
  margin-right: 30px;
  margin-bottom: 10px;
}

.email label{
  padding-right: 8px;
}

.passwd label{
  padding-right: 8px;
}

.buttons{
  margin-left: 40px;
}

button {
  margin-right: 8px;
}
</style>
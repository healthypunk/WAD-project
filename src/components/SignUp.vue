<template>
  <div class="signup">
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
      <div class="signupbut">
        <button type="button" v-on:click="SignUp()">Sign Up</button>
      </div>
      <div v-if="dirty">
        <div v-if="!has_minimum_length">
          <p>Password must be at least 8 chars long, but not longer than 15 chars</p>
        </div>
        <div v-if="!has_number">
          <p>Password must have at least 1 number</p>
        </div>
        <div v-if="!has_lowercase">
          <p>Password must have at least 2 lowercase chars</p>
        </div>
        <div v-if="!has_special">
          <p>Password must have a '_' char</p>
        </div>
        <div v-if="!begins_with_uppercase">
          <p>Password must begin with an uppercase letter</p>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
const regexp = /^(?=.*\d)(?=.+[a-z][a-z])(?=.*[A-Z])(?=.+\_)[A-Z].{7,14}$/
export default {
  name: "SignUp",
  data() {
    return {
      password: '',
      has_minimum_length: false,
      has_number: false,
      has_lowercase: false,
      has_special: false,
      begins_with_uppercase: false,
      dirty: false,

      email: '',
    }
  },
  methods: {
    SignUp() {
      var data = {
        email: this.email,
        password: this.password
      };
      fetch("http://localhost:3000/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: 'include',
        body: JSON.stringify(data),
      })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            this.$router.push("/");
          })
          .catch((e) => {
            console.log(e);
            console.log("error");
          });
    },
  },
  watch: {
    password() {
      this.has_minimum_length = (this.password.length > 8 && this.password.length < 15);
      this.has_number = /\d/.test(this.password);
      this.has_lowercase = /[a-z][a-z]/.test(this.password);
      this.begins_with_uppercase = /^[A-Z]/.test(this.password);
      this.has_special = /_/.test(this.password);
    }
  }
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

.email {
  margin-right: 2px;
  margin-bottom: 10px;
}

.passwd {
  margin-right: 30px;
  margin-bottom: 10px;
}

.email label {
  padding-right: 8px;
}

.passwd label {
  padding-right: 8px;
}

.signupbut {
  margin-left: 20px;
}


</style>

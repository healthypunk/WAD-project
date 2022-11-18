<template>
  <div class="navbar">
    <div>
      <p><router-link to="/">Home</router-link>
    </p>
    </div>
    <div><p>
      <router-link to="/signup">Signup</router-link>
    </p></div>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
.navbar {
  display: flex;
  flex-direction: row;
  margin-top: 12px;
  padding: 10px;
  gap: 10px;
  justify-content: center;
}


.navbar > div {
  flex: 1;
  background-color: #F0FFFF;
  border-radius: 25px;
  border: 3px solid #b8c7e37e;
  padding: 10px 30px;
}

.navbar > div > p {
  text-align: center;
  font-size: large;
  font-weight: bold;
  background: -webkit-linear-gradient(paleturquoise, palevioletred);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

</style>
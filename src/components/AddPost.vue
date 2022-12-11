<template>
<div class="addPost">
  <div class="addPostPanel">
    <h1>Add Post</h1>
    <label>Post Body:</label>
    <form>
      <textarea v-model="postBody" placeholder="Enter post text here..." rows="5" cols="40" minlength="1" maxlength="200"></textarea>
    </form>
    <button @click="AddPost">Confirm</button>
  </div>
</div>
</template>

<script>
export default {
  name: "AddPost",
  data () {
    return {
      postBody: ''
    }
  },
  methods: {
    AddPost() {
      var data = {
        postBody: this.postBody
      }
      if (this.postBody.length > 0) {
        fetch("http://localhost:3000/api/posts", {
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
      }
    }
  }
}
</script>

<style scoped>
  .addPost {
    display: flex;
    justify-content: center;
  }
  .addPostPanel {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-style: groove;
    border-radius: 10px;
    margin: 10px;
    padding: 20px;
  }
  .addPostPanel > button {
    width: 40%;
    background-color: #94b3ce;
    border-color: #34495e;
    margin-top: 10px;
    box-shadow: 0 3px #6a829c;

  }
  .addPostPanel > button:hover {
    background-color: #6a829c;
  }

  .addPostPanel > button:active {
    box-shadow: 0 1px #526983;
    transform: translateY(1px);
  }



</style>
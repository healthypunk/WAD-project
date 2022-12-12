<template>
  <div class="postWindow">
    <div class="postPanel">
      <h1>A Post.</h1>
      <label>Post Body:</label>
      <form>
        <textarea v-model="bodyText" :placeholder="postEntity.body" rows="5" cols="40" minlength="1" maxlength="200"></textarea>
      </form>
      <div class="buttons">
        <button @click="Update">Update</button>
        <button @click="Delete">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostPanel",
  data() {
    return {
      bodyText: ''
    }
  },
  props: ['postEntity'],
  methods: {
    Update() {
      var data = {
        id: this.postEntity.id,
        postBody: this.bodyText
      }
      if (this.bodyText.length > 0) {
        fetch("http://localhost:3000/api/posts", {
          method: "PUT",
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
    },
    Delete() {
      fetch(`http://localhost:3000/api/posts/${this.postEntity.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: 'include'
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
</script>

<style scoped>
  .postWindow {
    display: flex;
    justify-content: center;
  }
  .postPanel {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-style: groove;
    border-radius: 10px;
    margin: 10px;
    padding: 20px;
  }
  .buttons {
    display:flex;
    justify-content: center;
    gap: 20px;
  }
  .buttons > button {
    background-color: #94b3ce;
    border-color: #34495e;
    margin-top: 10px;
    box-shadow: 0 3px #6a829c;
  }

  .buttons > button:hover {
    background-color: #6a829c;
  }

  .buttons > button:active {
    box-shadow: 0 1px #526983;
    transform: translateY(1px);
  }
</style>
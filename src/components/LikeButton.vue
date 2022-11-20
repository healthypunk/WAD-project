<template>
  <div class="likebutton">
    <a class="like" v-on:click="count++">
      <img src="@/assets/heart.png" />
    </a>
    <p>{{count}}</p>
  </div>
</template>

<script>

export default {
  name: "LikeButton",
  props: ['value'],
  data() {
    return {
      count: this.value
    }
  }
}

</script>

<style scoped>
p {
  display: inline;
  font-size: 20px;
  padding-left: 5px;
  padding-bottom: 10px;
}

</style>
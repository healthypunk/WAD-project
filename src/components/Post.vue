<template>
  <div class="post no-img" @click="openPost">
    <h1><a class="logo"><img src="@/assets/ico.png" alt=""></a></h1>
    <h2>{{date}}</h2>
<!--    <a v-if = "pic"
        class="pic1"><img :src="`/pics/${pic}`" :alt="pic" ></a>-->
    <p>{{post.body}}</p>
<!--    <div class="likebutton">-->
<!--      <a class="like" v-on:click="post.likes++">-->
<!--        <img src="@/assets/heart.png" />-->
<!--      </a>-->
<!--      <p>{{post.likes}}</p>-->
<!--    </div>-->
  </div>
</template>

<script>
import post from "@/components/Post";

export default {
  name: "Post",
  props: ['post'],
  computed: {
    // pic(){
    //   return this.post.content.filter(object => object.type === 'pic')[0]?.value
    // },
    // text(){
    //   return this.post.content.filter(object => object.type === 'text')[0]?.value
    // },
    date() {
      console.log(this.date)
      const date = new Date(this.post.post_date.split('T')[0]);
      const date2 = date.toLocaleString('en-UK', {day: "2-digit", month: 'short', year: 'numeric'})
      return date2
    }
  },
  methods: {
    openPost() {
      this.$router.push(`/post/${this.post.id}`)
    }
  }
}


</script>

<style scoped>

.post:hover {
  transform: scale(1.1);
  cursor: pointer;
}
.logo img {
  height: 3.6vw;
  width: 3.6vw;
}

.post {
  display: grid;
  grid-template-areas:
    "l u s d r"
    "l p p p r"
    "l t t h r";
  grid-template-columns: 1px 14fr 27fr 14fr 1px;
  grid-template-rows: 5vw 28vw 5vw;
  grid-gap: 1vw;
  border-style: groove;
  border-color: rgba(220, 207, 230, 0.7);
  box-sizing: content-box;
  width: 50vw;
  border-radius: 8px;
  background-color: rgba(220, 207, 230, 0.4);
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  font-size: 1.4vw;
  box-shadow: 0 15px 30px rgb(0 0 0 / 20%);
}
 .post:first-of-type {
   margin-top: 10px;
 }

.no-img{
  grid-template-areas:
    "l u s d r"
    "l t t h r";
  grid-template-columns: 1px 14fr 27fr 14fr 1px;
  grid-template-rows: 3vw 5vw;
}

.pic1 p {
  grid-area: t;
  justify-self: start;
  font-weight: normal;
  color: #000000;
}

p {
  grid-area: t;
  justify-self: start;
  font-weight: normal;
  color: #000000;
  margin: 10px;
}
.pic1{
  grid-area: p;
}

.pic1 > img {
  width: 100%;
  height: 100%;
}

h1{
  grid-area: u;
  justify-self: start;
  align-self: start;
  margin: 10px;
  font-size: 1.2em;
}

h2{
  justify-self: end;
  grid-area: d;
  vertical-align: top;
  position: relative;
  margin: 10px;
  font-size: 0.85em;
}

</style>
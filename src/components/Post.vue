<template>
  <div class="post" :class="pic?'':'no-img'">
    <h1><a class="logo"><img src="@/assets/ico.png" alt=""></a></h1>
    <h2>{{date}}</h2>
    <a v-if = "pic"
        class="pic1"><img :src="`/pics/${pic}`" :alt="pic" ></a>
    <p>{{text}}</p>
    <like-button :value="`${likes}`" />
  </div>
</template>

<script>
import post from "@/components/Post";
import LikeButton from "@/components/LikeButton";

export default {
  name: "Post",
  components: {LikeButton},
  props: ['post', 'likes'],
  computed: {
    pic(){
      return  this.post.content.filter(object => object.type === 'pic')[0]?.value
    },
    text(){
      return this.post.content.filter(object => object.type === 'text')[0]?.value
    },
    date() {
      const date = new Date(this.post.dateCreated.split('T')[0]);
      const date2 = date.toLocaleString('en-UK', { day : "2-digit", month: 'short', year: 'numeric'})
      return date2
    }
  }
}


</script>

<style scoped>

.post:hover {
  transform: scale(1.1);
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
  border-radius: 10px;
  background-color: rgba(220, 207, 230, 0.4);
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  font-size: 1.4vw;
}
.no-img{
  grid-template-areas:
    "l u s d r"
    "l t t h r";
  grid-template-columns: 1px 14fr 27fr 14fr 1px;
  grid-template-rows: 3vw 5vw;
}

.likebutton {
  grid-area: h;
  justify-self: end;
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
  /*vertical-align: top;*/
  /*padding-left: 50px;*/
  /*position: relative;*/
  /*margin: auto;*/
  /*padding-top: 2px;*/
  /*padding-bottom: 2px;*/
  /*display: flex;*/
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
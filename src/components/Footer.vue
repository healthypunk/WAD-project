<template>
  <footer class="footer">
    <ul>
      <li>
        <a href="https://ois2.ut.ee/">OIS</a>
      </li>
      <li>
        <a href="https://courses.cs.ut.ee/">Courses</a>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
.footer {
  text-align: center;
  text-decoration-color: #34495e;
  font-size: medium;
  font-style: italic;
  border: 3px solid #b8c7e37e;
  background-color: rgba(255, 255, 255, 0.783);
}

ul {
  list-style-type: none;
}
</style>
<template>
  <div class="container">
    <router-link to="/crear">crear</router-link>
    <router-link to="/consultar">consultar</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  display: flex;
  align-content: center;
  justify-content: center;
  background: rgb(51, 138, 138);
}
a{
    background: white;
    text-decoration: none;
    margin: 10px;
    padding: 10px;
    border: 1px solid black;
    border-radius: 5px;

}
</style>
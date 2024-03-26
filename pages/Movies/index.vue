<template>
  <div>
    <h1>Movies</h1>
    <div class="movies">{{ movies }}</div>
  </div>
</template>

<script setup>
const { data: movies } = await useFetch("/api/movies?page=2&language=fr");
</script>

<style lang="scss" scoped></style>

<template>
  <div>
    <!-- create 4 grid tailwind to show images backdrop -->
    <div class="grid grid-cols-4 gap-4">
      <div class="movies" v-for="m in movies.results" @click="goToMovie(m.id)">
        <img
          :src="`https://image.tmdb.org/t/p/original/${m.backdrop_path}`"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const { data: movies } = await useFetch("/api/movies?page=2&language=fr");
console.log(movies.value);
const goToMovie = (id) => {
  router.push(`/movies/${id}`);
};
</script>

<style lang="scss" scoped></style>

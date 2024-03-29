<template>
  <div class="MoviesList">
    <!-- create 4 grid tailwind to show images backdrop -->
    <div class="grid grid-cols-4 gap-4">
      <div class="movies" v-for="m in movies.results" @click="goToMovie(m.id)">
        <img
          :src="`https://image.tmdb.org/t/p/w500/${m.poster_path}`"
          alt=""
          width="200"
          height="auto"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const { data: movies } = await useFetch("/api/movies?page=2&language=fr");
const goToMovie = (id) => {
  router.push(`/movies/${id}`);
};
</script>

<style lang="scss" scoped>
.MoviesList {
  padding: 15px;
  background-color: #111111;
}

.movies {
  cursor: pointer;
  display: flex;
  justify-content: center;
}
</style>

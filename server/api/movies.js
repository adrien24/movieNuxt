export default defineEventHandler(async (event) => {
  const { page, language } = getQuery(event);

  const uri = `https://api.themoviedb.org/3/discover/movie?page=${page}&language=${language}`;

  const { tmdbApiKey } = useRuntimeConfig();

  const data = await $fetch(uri, {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNzY5YWJhNjFiYTNmNDU4NGQzNGE1NmQ1ZjZlY2UxMSIsInN1YiI6IjYyOGU4NTZmNTgwMGM0MDA2NjE4NTVlMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4F_lxzt8xXfwnQXrnDr3e6d4PGrfGtkptXXbiJtoq2g`,
    },
  });

  return data;
});

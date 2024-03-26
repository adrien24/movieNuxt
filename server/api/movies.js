export default defineEventHandler(async (event) => {
  const { page, language } = getQuery(event);

  const uri = `https://api.themoviedb.org/3/discover/movie?page=${page}&language=${language}`;

  const { tmdbApiKey } = useRuntimeConfig();

  const data = await $fetch(uri, {
    headers: {
      Authorization: `Bearer ${tmdbApiKey}`,
    },
  });

  return data;
});

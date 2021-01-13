export const getPokemonsName = async (offset: number) => {
  const TO_URL = `https://pokeapi.co/api/v2/pokemon?limit=5&offset=${offset}`;
  const response = await fetch(TO_URL);
  const data = await response.json();
  return data.results;
};

export const getPokemonsInfo = async (pokemon: any) => {
  const TO_URL = `${pokemon.url}`;
  const response = await fetch(TO_URL);
  const data = await response.json();
  return {
    name: pokemon.name.toUpperCase().replaceAll('-', ' '),
    artwork: data.sprites.other['official-artwork'].front_default,
    stats: data.stats.map((stat: any) => ({
      name: stat.stat.name.toUpperCase().replaceAll('-', ' '),
      value: stat.base_stat,
    })),
  };
};

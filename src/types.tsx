export type Stats = {
  name: string;
  value: number;
};
export type PokemonInfo = {
  name: string;
  artwork: string;
  stats: Stats[];
};
export type InfoProps = {
  display: string;
  pokemonInfo: PokemonInfo;
};

export type PokemonType = {
  name: string;
  url: string;
};
export type PokemonProps = {
  pokemonAPI: PokemonType;
  catched?: string[];
};

export type PokemonsProps = {
  catched?: string[];
};

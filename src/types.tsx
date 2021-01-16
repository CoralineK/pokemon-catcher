export type Stats = {
  name: string;
  value: number;
};
export type PokemonInfo = {
  name: string;
  artwork: string;
  stats: Stats[];
};


export type PokemonType = {
  name: string;
  url: string;
};
export type PokemonProps = {
  pokemon: PokemonType;
  catched?: PokemonInfo[];
};

export type PokemonsProps = {
  catched?: PokemonInfo[];
};

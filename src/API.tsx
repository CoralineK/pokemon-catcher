export const getPokemonsName = async (offset: number) => {
  const TO_URL = `https://pokeapi.co/api/v2/pokemon?limit=5&offset=[${offset}]`
  const response = await fetch(TO_URL)
  const data = await response.json()
  return data.results
}

export const getPokemonsInfo = async (link: any) => {
  const TO_URL = `${link}`
  const response = await fetch(TO_URL)
  const data = await response.json()
  return data
}

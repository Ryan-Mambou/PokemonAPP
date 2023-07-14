export async function getPokemons(){
    const res = await fetch('https://pokeapi.co/api/v2/ability')
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
    const data = await res.json()
    /** */
    let filtered = await data.results.map((pokemon, index) => {
      let paddedIndex = ('00' + (index + 1)).slice(-3)
      const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedIndex}.png`
      return {
        ...pokemon,
        imageUrl: image
      }
    }) 
    // console.log('filtered', filtered)
    return filtered
  }
import React, {useEffect, useState, createContext} from 'react';

export const PokemonsContext = createContext();

export const PokemonsProvider=props=>{
    const [currentPage, setCurrentPage] = useState(18);
    const [pokemonsState, setPokemonsState] = useState();

    useEffect(()=>{
        fetch(`http://localhost:8000/pokemons/?_start=0&_end=${currentPage}`)
        .then(res => res.json())
        .then(data => setPokemonsState(data))
    },[currentPage])

    function getPokemonById(pokemonId) {
        const pokemon = [...pokemonsState].filter(pokemon => {
            return pokemon.id === parseInt(pokemonId);
        });
        return pokemon[0];
    }

    function getCatchedPokemons() {
        if(pokemonsState !== undefined){
         const pokemons = [...pokemonsState].filter(pokemon => {
            return pokemon.catched;
        });
        return pokemons;
        }
        return [];

    }

    function catchPokemon(pokemon) {
       pokemon.catched = !pokemon.catched;
       pokemon.catchDate = new Date().toDateString();
       setPokemonsState([...pokemonsState])
       fetch(`http://localhost:8000/pokemons/${pokemon.id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(pokemon)
        });
    }

    return (
    <PokemonsContext.Provider value={{currentPage, setCurrentPage, pokemonsState, catchPokemon, getPokemonById, getCatchedPokemons}}>
        {props.children}
    </PokemonsContext.Provider>
    );
}
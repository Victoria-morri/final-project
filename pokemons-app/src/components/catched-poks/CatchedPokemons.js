import React, {useContext} from 'react';
import PokemonsList from '../pokemons-list/Pok-list';
import {PokemonsContext} from '../pokemons-context/PokemonsContext';

function CatchedPokemons() {
    const {getCatchedPokemons} = useContext(PokemonsContext);

    return (
       <main className="container">
          <div className="row">
                  <PokemonsList poks = {getCatchedPokemons()}/>
          </div>
        </main>
    )}
export default CatchedPokemons;






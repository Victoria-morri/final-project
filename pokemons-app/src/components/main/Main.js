import React, {useContext} from 'react';
import PokemonsList from '../pokemons-list/Pok-list';
import {PokemonsContext} from '../pokemons-context/PokemonsContext';

function Main () {
    const {currentPage, setCurrentPage, getPokemonsToRender} = useContext(PokemonsContext);
    console.log(getPokemonsToRender);
    return (
            <main className="container">
                <div className="row">
                    <PokemonsList poks = {getPokemonsToRender()}/>
                </div>
                <button type="button" className="btn btn-info" onClick={() => setCurrentPage(currentPage + 18)}>Load more ...</button>
            </main>
        );
}
export default Main;

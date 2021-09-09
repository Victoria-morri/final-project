import React, {useContext} from 'react';
import {PokemonsContext} from '../pokemons-context/PokemonsContext'
function PokemonPage ({match}){
    const {getPokemonById} = useContext(PokemonsContext);
    const pokemon=getPokemonById(match.params.id);
    const pictureQuantity = 720;

    return (
        <div className="card">
            <div className="card-body" id={pokemon.id}>
                <img src={pokemon.id <= pictureQuantity ?
                    require(`../../utils/pokemons/${match.params.id}.png`).default :
                    require(`../../utils/pokemons/25.png`).default}
                    className="rounded float-right img-fluid" alt="..."/>
                <h5 className="card-title">{pokemon.name}</h5>
                {pokemon.catched? <p>Пойман: {pokemon.catchDate}</p>:<p>Гуляет на свободе</p>}
                <p>ID покемона: {pokemon.id}</p>
            </div>
        </div>
    )
};
export default PokemonPage;
import {Link} from 'react-router-dom';
import React, {useContext} from 'react';
import {PokemonsContext} from '../pokemons-context/PokemonsContext'
function PokemonCard (props){
    const {catchPokemon} = useContext(PokemonsContext);
    const pokemon = props.pokemon;
    const pictureQuantity = 720;

    const onClick = () =>{
        catchPokemon(props.pokemon);
    }

    return (
        <div className="col-6 col-lg-3 col-md-4 col-xl-2 mb-4">
        <div className="card">
            <div className="card-body" id={`${pokemon.id}`}>
                <Link to={`/pokemon${pokemon.id}`}>
                    <div href="#" className="btn"> <img src={pokemon.id <= pictureQuantity ? require(`../../utils/pokemons/${pokemon.id}.png`).default : require(`../../utils/pokemons/25.png`).default} className="card-img-top img-fluid" alt="..."/></div>
                </Link>
                <h5 className="card-title">{pokemon.name}</h5>
                <button onClick={onClick}
                type="button"
                 className={"btn btn-primary"
                     // pokemon.catched? "btn btn-primary disabled" :"btn btn-primary"
                     }>
                         {pokemon.catched? `Отпустить` :`Поймать`}
                </button>
            </div>
        </div>
    </div>
    );
};
export default PokemonCard;
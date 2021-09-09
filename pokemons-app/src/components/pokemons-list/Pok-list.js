import PokemonCard from '../pok-card/PokemonCard';

function PokemonsList (props){
    if(props.poks !== undefined && props.poks.length !== 0){
        const pokemonItem = props.poks.map((pok)=>{
            return <PokemonCard key={pok.id.toString()} onClick={props.onClick} pokemon ={pok}/>;
        })
        return (
            <div className="row">
                {pokemonItem}
            </div>
        );
    }else{
       return <div><p>There is no Pokemons</p></div>;
    }
}
export default PokemonsList;
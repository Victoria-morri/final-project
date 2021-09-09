import { BrowserRouter, Route } from 'react-router-dom';
import Header from '../header/Header';
import Main from '../main/Main';
import CatchedPokemons from '../catched-poks/CatchedPokemons';
import PokemonPage from '../pok-page/PokemonPage';
import {PokemonsProvider} from '../pokemons-context/PokemonsContext';

function App() {
  return (
      <BrowserRouter>
        <PokemonsProvider>
          <Header />
            <Route path="/" exact component={Main}/>
            <Route path="/cathed-pokemons" exact component={CatchedPokemons}/>
            <Route path="/pokemon:id" exact component={PokemonPage}/>
        </PokemonsProvider>
      </BrowserRouter>
  );
}

export default App;
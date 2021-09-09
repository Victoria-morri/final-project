import {Link} from 'react-router-dom';

function Header() {
  return (
    <>
      <header className="pokedex-header">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
            <Link className="nav-link" to="/">
                <h3 className="navbar-brand" href="#">Pokedex</h3>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <Link className="nav-link" to="/cathed-pokemons">
                            <li className="nav-item">
                            Пойманные покемоны
                             </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header id="header" className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <img src="./assets/img/logo.png" alt="" className="logo__img" />
          <h1 className="logo__text">Daddy World</h1>
        </Link>
        <nav className="navbar">
          <ul className="navbar__list">
            <li className="navbar__item d-sm-none">
              <Link to="/premium" className="navbar__link">
                Premium
              </Link>
            </li>
            <li className="navbar__item d-lg-none">
              <a href="#explore" className="navbar__link">
                Explore
              </a>
            </li>
            <li className="navbar__item d-lg-none">
              <a href="#feedback" className="navbar__link">
                Feedback
              </a>
            </li>
            <li className="navbar__item d-lg-none">
              <a href="#dev" className="navbar__link">
                Developer
              </a>
            </li>
            <li className="navbar__item d-sm-none">
              <Link to="/auth" className="navbar__link">
                Sign in
              </Link>
            </li>
          </ul>
          <div className="navbar-mobile d-none d-lg-block">
            <div className="navbar-mobile__wrap">
              <button className="js-toggle">
                <img src="./assets/icon/menu.svg" alt="" />
              </button>
            </div>
          </div>
        </nav>
      </div>
      {/* <div>
        <div id="navbar" className="mobile hide d-none d-lg-block">
          <a href="/" className="logo">
            <img src="./assets/img/logo.png" alt="" className="logo__img" />
            <h2 className="logo__text">Daddy World</h2>
          </a>
          <ul className="navbar__list navbar-mobile__wrap">
            <li className="navbar__item d-lg-none d-sm-block">
              <a href="./premium.html" className="navbar__link">
                Premium
              </a>
            </li>
            <li className="navbar__item">
              <a href="#explore" className="navbar__link">
                Explore
              </a>
            </li>
            <li className="navbar__item">
              <a href="#feedback" className="navbar__link">
                Feedback
              </a>
            </li>
            <li className="navbar__item">
              <a href="#dev" className="navbar__link">
                Developer
              </a>
            </li>
            <li className="navbar__item d-lg-none d-sm-block">
              <a href="#!" className="navbar__link">
                Sign in
              </a>
            </li>
          </ul>
        </div>
        <div className="mobile__overlay js-toggle"></div>
      </div> */}
    </header>
  );
};

export default Header;

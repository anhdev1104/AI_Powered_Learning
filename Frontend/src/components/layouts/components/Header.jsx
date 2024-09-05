import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Header = () => {
  const [user, setUser] = useState();

  const handleLogout = () => {
    localStorage.removeItem('user');
    Cookies.remove('access_token');
    toast.success('You have logged out, see you again !!');
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user')) || null;
    if (user) {
      setUser(user.data);
    }
  }, []);

  return (
    <header id="header" className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <img src="./assets/img/logo.png" alt="" className="logo__img" />
          <h1 className="logo__text">Daddy Code</h1>
        </Link>
        <nav className="navbar">
          <ul className="navbar__list">
            <li className="navbar__item d-sm-none">
              <Link to="/premium" className="navbar__link">
                Premium
              </Link>
            </li>
            <li className="navbar__item d-lg-none">
              <Link to="/explore" className="navbar__link">
                Explore
              </Link>
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
            {user && (
              <>
                <li className="navbar__item d-lg-none">
                  <Link to="/chat-ai" className="navbar__link">
                    Chat AI
                  </Link>
                </li>
                <li className="navbar__item d-sm-none hover:border-transparent">
                  <Link to="/profile" class="navbar__link">
                    <img src={user.avatar} alt="" className="navbar__avt" />
                  </Link>
                </li>
              </>
            )}
            {!user && (
              <li className="navbar__item d-sm-none">
                <Link to="/auth" className="navbar__link">
                  Sign in
                </Link>
              </li>
            )}
          </ul>
          {user && (
            <Link to="/auth" onClick={handleLogout}>
              <img src="./assets/icon/logout.svg" alt="" className="navbar__icon" />
            </Link>
          )}
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

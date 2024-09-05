import { login, register } from '@/services/authService';
import Cookies from 'js-cookie';
import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

/* eslint-disable react/no-unescaped-entities */
const AuthPage = () => {
  const [newAccount, setNewAccount] = useState({
    user_name: '',
    email: '',
    password: '',
  });
  const [account, setAccount] = useState({
    email: '',
    password: '',
  });

  const bannerRef = useRef();
  const navigate = useNavigate();
  const moveLeftBanner = () => {
    bannerRef.current.style.left = 0;
  };

  const moveRightBanner = () => {
    bannerRef.current.style.left = '50%';
  };

  const handleChange = async event => {
    const { name, value } = event.target;
    setNewAccount({
      ...newAccount,
      [name]: value,
    });
  };

  const handleChangeLogin = async event => {
    const { name, value } = event.target;
    setAccount({
      ...account,
      [name]: value,
    });
  };

  const handleRegister = async event => {
    event.preventDefault();
    const data = await register(newAccount);
    if (data) {
      localStorage.setItem('user', JSON.stringify(data));
      Cookies.set('access_token', data.access_token);
      toast.success('Create a successful account.');
      navigate('/');
    }
    setNewAccount({
      user_name: '',
      email: '',
      password: '',
    });
  };

  const handleLogin = async event => {
    event.preventDefault();

    const data = await login(account);
    if (data) {
      localStorage.setItem('user', JSON.stringify(data));
      Cookies.set('access_token', data.access_token);
      toast.success('Login successful.');
      navigate('/');
    }
    setAccount({
      email: '',
      password: '',
    });
  };

  return (
    <div className="auth">
      <div id="bannerLogin" className="auth__intro d-md-none transition-all" ref={bannerRef}>
        <img src="./assets/img/auth/intro.jpg" alt="" className="auth__intro-img transition-all" />
      </div>

      <div className="auth__content">
        <div className="auth__content-inner">
          <Link to="/" className="logo">
            <img src="./assets/img/logo.png" alt="" className="logo__img" />
            <h1 className="logo__text logo__text--footer">Daddy World</h1>
          </Link>
          <h1 className="auth__heading">Ohhh! Hello newbie</h1>
          <p className="auth__desc">Hello new friend, have fun</p>
          <form className="form auth__form">
            <div className="form__group">
              <div className="form__text-input">
                <input
                  type="text"
                  name="user_name"
                  id=""
                  placeholder="Username ..."
                  className="form__input"
                  autoFocus
                  required
                  value={newAccount.user_name}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form__group">
              <div className="form__text-input">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="form__input"
                  autoFocus
                  required
                  value={newAccount.email}
                  onChange={handleChange}
                />
                <img src="./assets/icons/message.svg" alt="" className="form__input-icon" />
                <img src="./assets/icons/form-error.svg" alt="" className="form__input-icon-error" />
              </div>
              <p className="form__error">Email is not in correct format</p>
            </div>
            <div className="form__group">
              <div className="form__text-input">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="form__input"
                  required
                  minLength="6"
                  value={newAccount.password}
                  onChange={handleChange}
                />
                <img src="./assets/icons/pass.svg" alt="" className="form__input-icon" />
                <img src="./assets/icons/form-error.svg" alt="" className="form__input-icon-error" />
              </div>
              <p className="form__error">Password must be at least 6 characters</p>
            </div>
            <div className="form__group form__group--inline">
              <label className="form__checkbox">
                <input type="checkbox" name="" id="" className="form__checkbox-input d-none" />
                <span className="form__checkbox-label">Password must be at least 6 characters</span>
              </label>
            </div>
            <div className="form__group auth__btn-group">
              <button className="auth__btn form__submit-btn" onClick={handleRegister}>
                Sign Up
              </button>
              <button className="auth__btn auth__btn--bottom">
                <img src="./assets/icon/google.svg" alt="" className="btn__icon" />
                Sign in with Gmail
              </button>
            </div>
          </form>
          <p className="auth__text">
            Don't have an account yet?
            <button onClick={moveLeftBanner} className="auth__link auth__text-link">
              Sign In
            </button>
          </p>
        </div>
      </div>

      <div className="auth__content">
        <div className="auth__content-inner">
          <Link to="/" className="logo">
            <img src="./assets/img/logo.png" alt="" className="logo__img" />
            <h1 className="logo__text logo__text--footer">Daddy World</h1>
          </Link>
          <h1 className="auth__heading">Hello Again!</h1>
          <p className="auth__desc">
            Welcome back to sign in. As a returning customer, you have access to your previously saved all information.
          </p>

          <form action="./index-login.html" className="form auth__form">
            <div className="form__group">
              <div className="form__text-input">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="form__input"
                  autoFocus
                  required
                  value={account.email}
                  onChange={handleChangeLogin}
                />
                <img src="./assets/icon/mail.svg" alt="" className="form__input-icon" />
                <img src="./assets/icon/form-error.svg" alt="" className="form__input-icon-error" />
              </div>
              <p className="form__error">Email is not in correct format</p>
            </div>
            <div className="form__group">
              <div className="form__text-input">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="form__input"
                  required
                  minLength="6"
                  value={account.password}
                  onChange={handleChangeLogin}
                />
                <img src="./assets/icon/pass.svg" alt="" className="form__input-icon" />
                <img src="./assets/icon/form-error.svg" alt="" className="form__input-icon-error" />
              </div>
              <p className="form__error">Password must be at least 6 characters</p>
            </div>
            <div className="form__group form__group--inline">
              <label className="form__checkbox">
                <input type="checkbox" name="" id="" className="d-none" />
                <span className="form__checkbox-label">Set as default card</span>
              </label>
              <a href="./reset-password.html" className="auth__link form__pull-right">
                Forgot Password?
              </a>
            </div>
            <div className="form__group auth__btn-group">
              <button className="auth__btn form__submit-btn" onClick={handleLogin}>
                Sign In
              </button>
              <button className="auth__btn auth__btn--bottom">
                <img src="./assets/icon/google.svg" alt="" className="btn__icon" />
                Sign in with Gmail
              </button>
            </div>
          </form>

          <p className="auth__text">
            Don't have an account yet?
            <button onClick={moveRightBanner} className="auth__link auth__text-link">
              Sign Up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;

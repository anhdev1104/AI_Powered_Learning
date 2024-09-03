import { useRef } from 'react';
import { Link } from 'react-router-dom';

/* eslint-disable react/no-unescaped-entities */
const AuthPage = () => {
  const bannerRef = useRef();
  const moveLeftBanner = () => {
    console.log(bannerRef.current);

    bannerRef.current.style.left = 0;
    console.log((bannerRef.current.style.left = 0));
  };

  const moveRightBanner = () => {
    bannerRef.current.style.left = '759px';
    console.log(bannerRef.current);
  };
  return (
    <div className="auth">
      <div id="bannerLogin" className="auth__intro d-md-none" ref={bannerRef}>
        <img src="./assets/img/auth/intro.jpg" alt="" className="auth__intro-img" />
      </div>

      <div className="auth__content">
        <div className="auth__content-inner">
          <Link to="/" className="logo">
            <img src="./assets/img/logo.png" alt="" className="logo__img" />
            <h1 className="logo__text logo__text--footer">Daddy World</h1>
          </Link>
          <h1 className="auth__heading">Ohhh! Hello newbie</h1>
          <p className="auth__desc">Hello new friend, have fun</p>
          <form action="./index-login.html" className="form auth__form">
            <div className="form__group">
              <div className="form__text-input">
                <input type="email" name="" id="" placeholder="Email" className="form__input" autoFocus required />
                <img src="./assets/icons/message.svg" alt="" className="form__input-icon" />
                <img src="./assets/icons/form-error.svg" alt="" className="form__input-icon-error" />
              </div>
              <p className="form__error">Email is not in correct format</p>
            </div>
            <div className="form__group">
              <div className="form__text-input">
                <input
                  type="password"
                  name=""
                  id=""
                  placeholder="Password"
                  className="form__input"
                  required
                  minLength="6"
                />
                <img src="./assets/icons/pass.svg" alt="" className="form__input-icon" />
                <img src="./assets/icons/form-error.svg" alt="" className="form__input-icon-error" />
              </div>
              <p className="form__error">Password must be at least 6 characters</p>
            </div>
            <div className="form__group">
              <div className="form__text-input">
                <input
                  type="password"
                  name=""
                  id=""
                  placeholder="Confirm Password"
                  className="form__input"
                  required
                  minLength="6"
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
              <button className="auth__btn form__submit-btn">Sign Up</button>
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
                <input type="email" name="" id="" placeholder="Email" className="form__input" autoFocus required />
                <img src="./assets/icon/mail.svg" alt="" className="form__input-icon" />
                <img src="./assets/icon/form-error.svg" alt="" className="form__input-icon-error" />
              </div>
              <p className="form__error">Email is not in correct format</p>
            </div>
            <div className="form__group">
              <div className="form__text-input">
                <input
                  type="password"
                  name=""
                  id=""
                  placeholder="Password"
                  className="form__input"
                  required
                  minLength="6"
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
              <button className="auth__btn form__submit-btn">Sign In</button>
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

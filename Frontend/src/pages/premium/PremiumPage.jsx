const PremiumPage = () => {
  const deleteBanner = e => {
    e.currentTarget.parentElement.classList.add('!hidden');
  };
  return (
    <div className="prem">
      <div className="container">
        <div id="banner" className="prem-banner d-lg-none">
          <div className="prem-banner__wrap">
            <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="40" height="33" viewBox="0 0 40 33">
              <path d="M23.26 3.375C23.26 4.68322 22.487 5.81092 21.373 6.32628L28 12.125L34.5244 10.8201C34.1936 10.3378 34 9.75404 34 9.125C34 7.46814 35.3432 6.125 37 6.125C38.6568 6.125 40 7.46814 40 9.125C40 10.7481 38.711 12.0702 37.1008 12.1233L30.0614 27.7664C29.4154 29.2018 27.9878 30.125 26.4136 30.125H13.5863C12.0123 30.125 10.5846 29.2018 9.93866 27.7664L2.89926 12.1233C1.28904 12.0702 0 10.7481 0 9.125C0 7.46814 1.34315 6.125 3 6.125C4.65686 6.125 6 7.46814 6 9.125C6 9.75404 5.8064 10.3378 5.47554 10.8201L12 12.125L18.634 6.32022C17.5269 5.8021 16.76 4.67812 16.76 3.375C16.76 1.58007 18.2151 0.125 20.01 0.125C21.805 0.125 23.26 1.58007 23.26 3.375Z" />
            </svg>
            <p className="prem-banner__text">Say hello to Web Daddy World, the best website for AI teaching.</p>
          </div>
          <div className="prem-banner__btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path
                d="M11.4805 0.130005C14.2652 0.130005 16.936 1.23625 18.9051 3.20538C20.8742 5.17452 21.9805 7.84523 21.9805 10.63C21.9805 13.4148 20.8742 16.0855 18.9051 18.0546C16.936 20.0238 14.2652 21.13 11.4805 21.13C8.6957 21.13 6.02498 20.0238 4.05585 18.0546C2.08672 16.0855 0.980469 13.4148 0.980469 10.63C0.980469 7.84523 2.08672 5.17452 4.05585 3.20538C6.02498 1.23625 8.6957 0.130005 11.4805 0.130005ZM10.4961 5.05188V10.63C10.4961 10.9581 10.6602 11.2657 10.935 11.4503L14.8725 14.0753C15.3236 14.3788 15.9348 14.2558 16.2383 13.8005C16.5418 13.3452 16.4187 12.7382 15.9635 12.4347L12.4648 10.105V5.05188C12.4648 4.50637 12.026 4.0675 11.4805 4.0675C10.935 4.0675 10.4961 4.50637 10.4961 5.05188Z"
                fill="#c6a905"
              />
            </svg>
            <p className="prem-banner__btn-text">Pre-order today!</p>
          </div>
          <button onClick={deleteBanner} className="prem-banner__delete">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
              <path
                d="M0 15C0 18.9782 1.58035 22.7936 4.3934 25.6066C7.20644 28.4196 11.0218 30 15 30C18.9782 30 22.7936 28.4196 25.6066 25.6066C28.4196 22.7936 30 18.9782 30 15C30 11.0218 28.4196 7.20644 25.6066 4.3934C22.7936 1.58035 18.9782 0 15 0C11.0218 0 7.20644 1.58035 4.3934 4.3934C1.58035 7.20644 0 11.0218 0 15ZM9.84961 18.6152C9.85547 18.5742 9.86133 18.5273 9.86719 18.4805C9.88477 18.3926 9.9082 18.3047 9.94336 18.2227C10.0137 18.0527 10.1133 17.8945 10.2539 17.7598C11.1738 16.8398 12.0937 15.9199 13.0078 15.0059C12.0879 14.0859 11.1738 13.1719 10.2539 12.252C9.70313 11.7012 9.70313 10.8105 10.2539 10.2656C10.5293 9.99023 10.8867 9.85547 11.25 9.85547C11.6133 9.85547 11.9707 9.99023 12.2461 10.2656C13.166 11.1855 14.0859 12.1055 15 13.0195C15.9199 12.0996 16.8398 11.1797 17.7539 10.2656C18.0293 9.99023 18.3867 9.85547 18.75 9.85547C19.1133 9.85547 19.4707 9.99023 19.7461 10.2656C20.2969 10.8164 20.2969 11.707 19.7461 12.252C18.8262 13.1719 17.9121 14.0859 16.9922 15.0059C17.9121 15.9258 18.832 16.8457 19.7461 17.7598C20.0215 18.0352 20.1562 18.3926 20.1562 18.7559C20.1562 19.1191 20.0215 19.4766 19.7461 19.752C19.4707 20.0273 19.1133 20.1621 18.75 20.1621C18.3867 20.1621 18.0293 20.0273 17.7539 19.752L15 16.998C14.0801 17.918 13.166 18.832 12.2461 19.752C11.9707 20.0273 11.6133 20.1621 11.25 20.1621C10.8867 20.1621 10.5293 20.0273 10.2539 19.752C10.1191 19.6172 10.0137 19.4531 9.94336 19.2891C9.9082 19.207 9.88477 19.1191 9.86719 19.0312C9.85547 18.9668 9.84375 18.8965 9.84961 18.9023C9.84375 18.832 9.84375 18.832 9.84375 18.7617C9.84375 18.6738 9.84961 18.6504 9.84961 18.627V18.6152Z"
                fill="#fff"
              />
              <path
                d="M12.2461 10.2539C11.6953 9.70312 10.8047 9.70312 10.2598 10.2539C9.71484 10.8047 9.70898 11.6953 10.2598 12.2402L13.0137 14.9941L10.2598 17.748C9.70898 18.2988 9.70898 19.1895 10.2598 19.7344C10.8105 20.2793 11.7012 20.2852 12.2461 19.7344L15 16.9805L17.7539 19.7344C18.3047 20.2852 19.1953 20.2852 19.7402 19.7344C20.2852 19.1836 20.291 18.293 19.7402 17.748L16.9863 14.9941L19.7402 12.2402C20.291 11.6895 20.291 10.7988 19.7402 10.2539C19.1895 9.70898 18.2988 9.70312 17.7539 10.2539L15 13.0078L12.2461 10.2539Z"
                fill="#c6a905"
              />
            </svg>
          </button>
        </div>

        <section className="prem-content">
          <h2 className="section-heading">Here are the plans!</h2>
          <p className="section-desc">
            Our free plan lets you get started right away. Switch to the Pro plan to get more workouts.
          </p>
        </section>
      </div>

      <div className="prem-containers">
        <div className="container">
          <div className="prem-containers__wrap">
            <article className="prem-container">
              <div className="prem-container__box">
                <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29">
                  <path d="M21.8252 21.2609C20.6166 19.1609 18.3471 17.75 15.7549 17.75H12.2549C9.6627 17.75 7.39316 19.1609 6.18457 21.2609C8.10957 23.4047 10.8986 24.75 14.0049 24.75C17.1111 24.75 19.9002 23.3992 21.8252 21.2609ZM0.00488281 14.25C0.00488281 10.537 1.47988 6.97601 4.10539 4.35051C6.7309 1.725 10.2919 0.25 14.0049 0.25C17.7179 0.25 21.2789 1.725 23.9044 4.35051C26.5299 6.97601 28.0049 10.537 28.0049 14.25C28.0049 17.963 26.5299 21.524 23.9044 24.1495C21.2789 26.775 17.7179 28.25 14.0049 28.25C10.2919 28.25 6.7309 26.775 4.10539 24.1495C1.47988 21.524 0.00488281 17.963 0.00488281 14.25ZM14.0049 15.125C15.0492 15.125 16.0507 14.7102 16.7891 13.9717C17.5275 13.2333 17.9424 12.2318 17.9424 11.1875C17.9424 10.1432 17.5275 9.14169 16.7891 8.40327C16.0507 7.66484 15.0492 7.25 14.0049 7.25C12.9606 7.25 11.9591 7.66484 11.2207 8.40327C10.4822 9.14169 10.0674 10.1432 10.0674 11.1875C10.0674 12.2318 10.4822 13.2333 11.2207 13.9717C11.9591 14.7102 12.9606 15.125 14.0049 15.125Z" />
                </svg>
                <p className="prem-container__text">Already have a Daddy World account?</p>
                <a href="#!" className="prem-container__link">
                  Sign in and view your plan!
                </a>
              </div>

              <div className="prem-container__box">
                <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29">
                  <path d="M14.0049 28.75C17.7179 28.75 21.2789 27.275 23.9044 24.6495C26.5299 22.024 28.0049 18.463 28.0049 14.75C28.0049 11.037 26.5299 7.47601 23.9044 4.85051C21.2789 2.225 17.7179 0.75 14.0049 0.75C10.2919 0.75 6.7309 2.225 4.10539 4.85051C1.47988 7.47601 0.00488281 11.037 0.00488281 14.75C0.00488281 18.463 1.47988 22.024 4.10539 24.6495C6.7309 27.275 10.2919 28.75 14.0049 28.75ZM9.29082 9.78984C9.72285 8.57031 10.8822 7.75 12.1783 7.75H15.3666C17.2752 7.75 18.8174 9.29766 18.8174 11.2008C18.8174 12.4367 18.1557 13.5797 17.0838 14.1977L15.3174 15.2094C15.3064 15.9203 14.7213 16.5 14.0049 16.5C13.2775 16.5 12.6924 15.9148 12.6924 15.1875V14.4492C12.6924 13.9789 12.9439 13.5469 13.3541 13.3117L15.7768 11.9227C16.0338 11.775 16.1924 11.5016 16.1924 11.2062C16.1924 10.7469 15.8205 10.3805 15.3666 10.3805H12.1783C11.9924 10.3805 11.8283 10.4953 11.7682 10.6703L11.7463 10.7359C11.5057 11.4195 10.751 11.775 10.0729 11.5344C9.39473 11.2937 9.03379 10.5391 9.27441 9.86094L9.29629 9.79531L9.29082 9.78984ZM12.2549 20C12.2549 19.5359 12.4393 19.0908 12.7674 18.7626C13.0956 18.4344 13.5408 18.25 14.0049 18.25C14.469 18.25 14.9141 18.4344 15.2423 18.7626C15.5705 19.0908 15.7549 19.5359 15.7549 20C15.7549 20.4641 15.5705 20.9092 15.2423 21.2374C14.9141 21.5656 14.469 21.75 14.0049 21.75C13.5408 21.75 13.0956 21.5656 12.7674 21.2374C12.4393 20.9092 12.2549 20.4641 12.2549 20Z" />
                </svg>
                <p className="prem-container__text">Have questions? Need help or something special?</p>
                <a href="#!" className="prem-container__link">
                  Get in touch!
                </a>
              </div>
            </article>

            <article className="prem-container--left">
              <p className="prem-container__nameplate d-lg-none">Most Popular</p>

              <article className="prem-container__wrap">
                <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                  <path
                    d="M16.5947 29.25C9.41348 29.25 3.59473 23.4313 3.59473 16.25C3.59473 14.875 3.80723 13.5562 4.20098 12.3125L4.78848 13.3375C5.30723 14.2437 6.15723 14.9125 7.16348 15.2L10.7822 16.2312C11.8572 16.5375 12.5947 17.5188 12.5947 18.6375V21.1313C12.5947 21.8188 12.9822 22.4437 13.5947 22.75C14.2072 23.0563 14.5947 23.6812 14.5947 24.3687V26.2687C14.5947 27.2625 15.5447 27.975 16.501 27.7062C17.4947 27.425 18.2697 26.6438 18.551 25.6562L18.6447 25.3188C18.9322 24.3125 19.601 23.4625 20.5072 22.9438L21.0822 22.6125C22.0197 22.0812 22.5947 21.0813 22.5947 20.0063V19.4875C22.5947 18.6937 22.276 17.9312 21.7135 17.3687L21.4697 17.125C20.9072 16.5625 20.1447 16.2437 19.351 16.2437L16.6572 16.25C15.9635 16.25 15.276 16.0688 14.6697 15.725L12.5135 14.4937C12.2447 14.3375 12.0385 14.0875 11.9385 13.7937C11.7385 13.1937 12.0072 12.5437 12.576 12.2625L12.9447 12.075C13.3572 11.8687 13.8385 11.8312 14.276 11.9812L15.726 12.4625C16.2385 12.6312 16.801 12.4375 17.0947 11.9937C17.3885 11.5562 17.3572 10.975 17.0197 10.5688L16.1697 9.55C15.5447 8.8 15.551 7.70625 16.1885 6.96875L17.1697 5.825C17.7197 5.18125 17.8072 4.2625 17.3885 3.53125L17.2385 3.26875C21.8385 3.49375 25.8135 6.11875 27.9385 9.9125L26.3447 10.55C25.3635 10.9438 24.8572 12.0375 25.1885 13.0375L26.2447 16.2063C26.4635 16.8563 26.9947 17.35 27.6572 17.5125L29.476 17.9688C28.6385 24.3375 23.1885 29.25 16.5947 29.25ZM16.5947 32.25C20.8382 32.25 24.9079 30.5643 27.9084 27.5637C30.909 24.5631 32.5947 20.4935 32.5947 16.25C32.5947 12.0065 30.909 7.93687 27.9084 4.93629C24.9079 1.93571 20.8382 0.25 16.5947 0.25C12.3513 0.25 8.2816 1.93571 5.28102 4.93629C2.28044 7.93687 0.594727 12.0065 0.594727 16.25C0.594727 20.4935 2.28044 24.5631 5.28102 27.5637C8.2816 30.5643 12.3513 32.25 16.5947 32.25Z"
                    fill="#242424"
                  />
                </svg>
                <h3 className="prem-container__title section-heading">Free</h3>
                <p className="prem-container__desc">
                  Best for individuals and small teams with minimal exercises Need someone to like it for free sample.
                </p>
                <a href="#!" className="prem-container__btn">
                  Get Started
                </a>
                <p className="prem-container__price">
                  0<span>$</span>
                </p>
                <div className="prem-container__boxer">
                  <img src="./assets/icon/bravo.svg" alt="" />
                  <p className="prem-container__text-small">forever!</p>
                </div>
              </article>

              <article className="prem-container__wrap">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="33" viewBox="0 0 25 33" fill="none">
                  <path
                    d="M9.22832 6.4187C7.91582 8.54995 7.15957 11.0625 7.15957 13.75C7.15957 19.875 11.0846 25.0875 16.5596 26.9812C15.7846 27.1562 14.9783 27.25 14.1471 27.25C8.09707 27.25 3.18457 22.3312 3.18457 16.25C3.18457 11.9437 5.64707 8.22495 9.23457 6.4187H9.22832ZM13.1096 2.2937C5.87832 2.82495 0.18457 8.8687 0.18457 16.25C0.18457 23.9812 6.43457 30.25 14.1533 30.25C17.1408 30.25 19.9033 29.3125 22.1783 27.7125C22.2971 27.6312 22.4096 27.5437 22.5221 27.4625C22.8221 27.2375 23.1096 27 23.3908 26.75C23.5596 26.6 23.7221 26.45 23.8846 26.2937C24.1971 25.9875 24.2783 25.5125 24.0783 25.125C23.8783 24.7375 23.4471 24.5187 23.0158 24.5937C22.7846 24.6312 22.5533 24.6687 22.3221 24.6937C22.0096 24.725 21.6908 24.75 21.3658 24.7562C21.2908 24.7562 21.2096 24.7562 21.1346 24.7562H21.1158C15.0658 24.7437 10.1658 19.825 10.1658 13.7562C10.1658 10.3312 11.7221 7.27495 14.1721 5.2562C14.2346 5.19995 14.3033 5.14995 14.3721 5.0937C14.6221 4.8937 14.8846 4.7062 15.1533 4.5312C15.3471 4.4062 15.5471 4.2812 15.7533 4.1687C16.1346 3.94995 16.3283 3.51245 16.2346 3.08745C16.1408 2.66245 15.7783 2.3437 15.3408 2.3062C15.1158 2.28745 14.8971 2.27495 14.6721 2.2687C14.5033 2.26245 14.3283 2.26245 14.1596 2.26245C13.9533 2.26245 13.7533 2.2687 13.5471 2.27495C13.4033 2.2812 13.2596 2.28745 13.1158 2.29995L13.1096 2.2937Z"
                    fill="#242424"
                  />
                </svg>
                <h3 className="prem-container__title section-heading">Pro Lite</h3>
                <p className="prem-container__desc">
                  Best for individuals want Pro exercises, but only want to try for 1 month
                </p>
                <a href="#!" className="prem-container__btn prem-container__btn--color">
                  Get Pro Lite
                </a>
                <p className="prem-container__price">
                  49<span>$</span>
                </p>
                <div className="prem-container__boxer">
                  <img src="./assets/icon/date.svg" alt="" />
                  <p className="prem-container__text-small">per 1 month</p>
                </div>
              </article>

              <article className="prem-container__wrap">
                <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                  <path
                    d="M29.7947 2.19369C29.7947 2.19369 29.801 2.20619 29.801 2.24369C29.7947 2.21244 29.7947 2.19369 29.7947 2.19369ZM29.4697 3.57494C28.726 3.84994 27.7822 4.29369 26.6572 4.94369C25.8197 4.20619 24.9135 3.58119 23.9697 3.06869C27.9572 0.537441 31.0885 -0.443809 32.2885 0.756191C33.6697 2.13744 32.1447 6.10619 28.6885 10.9874C29.401 12.5999 29.7947 14.3749 29.7947 16.2499C29.7947 23.4312 23.976 29.2499 16.7947 29.2499C14.9197 29.2499 13.1447 28.8562 11.5322 28.1437C6.65099 31.5999 2.68849 33.1249 1.30099 31.7437C0.10099 30.5437 1.08849 27.4124 3.61349 23.4249C4.13224 24.3687 4.75724 25.2749 5.48849 26.1124C4.83849 27.2374 4.38849 28.1749 4.11974 28.9249C4.90724 28.6374 5.91349 28.1562 7.12599 27.4374C7.63849 27.1374 8.16974 26.7999 8.71349 26.4374C5.71974 24.0562 3.79474 20.3749 3.79474 16.2499C3.79474 9.06869 9.61349 3.24994 16.7947 3.24994C20.9197 3.24994 24.601 5.17494 26.9822 8.17494C27.3447 7.62494 27.6822 7.09369 27.9822 6.58744C28.6947 5.37494 29.1822 4.36869 29.4697 3.58119V3.57494ZM25.1447 10.7437C23.3572 8.03744 20.2822 6.24994 16.7947 6.24994C11.2697 6.24994 6.79474 10.7249 6.79474 16.2499C6.79474 19.7374 8.58224 22.8124 11.2885 24.5999C13.6072 22.8374 16.126 20.6374 18.651 18.1124C21.176 15.5874 23.376 13.0624 25.1385 10.7499L25.1447 10.7437ZM14.4135 25.9624C15.176 26.1499 15.976 26.2499 16.7947 26.2499C22.3197 26.2499 26.7947 21.7749 26.7947 16.2499C26.7947 15.4312 26.6947 14.6312 26.5072 13.8687C24.851 15.9312 22.9197 18.0874 20.776 20.2312C18.6322 22.3749 16.476 24.3062 14.4135 25.9624ZM2.73849 29.2499C2.73849 29.2499 2.75724 29.2499 2.78849 29.2562C2.75099 29.2562 2.73849 29.2562 2.73849 29.2499ZM3.78849 30.2499C3.79474 30.2812 3.79474 30.2999 3.79474 30.2999C3.79474 30.2999 3.78849 30.2874 3.78849 30.2499ZM30.7947 3.24369C30.8322 3.24369 30.8447 3.24369 30.8447 3.24994C30.8447 3.25619 30.826 3.24994 30.7947 3.24369Z"
                    fill="#242424"
                  />
                </svg>
                <h3 className="prem-container__title section-heading">Pro</h3>
                <p className="prem-container__desc">
                  Best for Collaborative developers, many outstanding features and diverse exercises
                </p>
                <a href="#!" className="prem-container__btn prem-container__btn--color">
                  Get Pro
                </a>
                <p className="prem-container__price">
                  99<span>$</span>
                </p>
                <div className="prem-container__boxer">
                  <img src="./assets/icon/date.svg" alt="" />
                  <p className="prem-container__text-small">per 3 month</p>
                </div>
              </article>

              <article className="prem-container__wrap">
                <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                  <path
                    d="M29.3848 16.25C29.3848 18.8812 28.6035 21.3313 27.2598 23.3813C26.9848 23.3 26.691 23.25 26.3848 23.25C24.7285 23.25 23.3848 24.5938 23.3848 26.25C23.3848 27.9062 24.7285 29.25 26.3848 29.25C28.041 29.25 29.3848 27.9062 29.3848 26.25C29.3848 26.05 29.366 25.85 29.3285 25.6625C31.2473 23.0188 32.3848 19.7687 32.3848 16.25C32.3848 7.4125 25.2223 0.25 16.3848 0.25C13.741 0.25 11.2535 0.8875 9.05977 2.025C9.94727 2.5875 10.641 3.41875 11.0348 4.4C12.666 3.6625 14.4785 3.25 16.3848 3.25C23.566 3.25 29.3848 9.06875 29.3848 16.25ZM16.3848 29.25C9.20352 29.25 3.38477 23.4313 3.38477 16.25C3.38477 13.6188 4.16602 11.1687 5.50977 9.11875C5.78477 9.2 6.07852 9.25 6.38477 9.25C8.04102 9.25 9.38477 7.90625 9.38477 6.25C9.38477 4.59375 8.04102 3.25 6.38477 3.25C4.72852 3.25 3.38477 4.59375 3.38477 6.25C3.38477 6.45 3.40352 6.65 3.44102 6.8375C1.52227 9.48125 0.384766 12.7313 0.384766 16.25C0.384766 25.0875 7.54727 32.25 16.3848 32.25C19.016 32.25 21.491 31.6187 23.6848 30.4937C22.8035 29.925 22.116 29.0938 21.7285 28.1063C20.0973 28.8438 18.291 29.25 16.3848 29.25ZM24.8098 10.8625C24.8598 10.6688 24.8848 10.4625 24.8848 10.25C24.8848 8.86875 23.766 7.75 22.3848 7.75C22.1723 7.75 21.9723 7.775 21.7723 7.825C20.216 6.825 18.3723 6.25 16.3848 6.25C10.8598 6.25 6.38477 10.725 6.38477 16.25C6.38477 21.775 10.8598 26.25 16.3848 26.25C21.9098 26.25 26.3848 21.775 26.3848 16.25C26.3848 14.2625 25.8035 12.4188 24.8098 10.8625ZM19.8848 10.1875C19.8848 10.2063 19.8848 10.2312 19.8848 10.25C19.8848 11.6313 21.0035 12.75 22.3848 12.75C22.4035 12.75 22.4285 12.75 22.4473 12.75C23.041 13.7812 23.3848 14.975 23.3848 16.25C23.3848 20.1188 20.2535 23.25 16.3848 23.25C12.516 23.25 9.38477 20.1188 9.38477 16.25C9.38477 12.3812 12.516 9.25 16.3848 9.25C17.6598 9.25 18.8535 9.59375 19.8848 10.1875ZM16.3848 15.25C16.65 15.25 16.9043 15.3554 17.0919 15.5429C17.2794 15.7304 17.3848 15.9848 17.3848 16.25C17.3848 16.5152 17.2794 16.7696 17.0919 16.9571C16.9043 17.1446 16.65 17.25 16.3848 17.25C16.1195 17.25 15.8652 17.1446 15.6777 16.9571C15.4901 16.7696 15.3848 16.5152 15.3848 16.25C15.3848 15.9848 15.4901 15.7304 15.6777 15.5429C15.8652 15.3554 16.1195 15.25 16.3848 15.25ZM16.3848 20.25C17.4456 20.25 18.463 19.8286 19.2132 19.0784C19.9633 18.3283 20.3848 17.3109 20.3848 16.25C20.3848 15.1891 19.9633 14.1717 19.2132 13.4216C18.463 12.6714 17.4456 12.25 16.3848 12.25C15.3239 12.25 14.3065 12.6714 13.5563 13.4216C12.8062 14.1717 12.3848 15.1891 12.3848 16.25C12.3848 17.3109 12.8062 18.3283 13.5563 19.0784C14.3065 19.8286 15.3239 20.25 16.3848 20.25Z"
                    fill="#242424"
                  />
                </svg>
                <h3 className="prem-container__title section-heading">Pro Max</h3>
                <p className="prem-container__desc">
                  Great for larger developers, organizations with many projects or application.
                </p>
                <a href="#!" className="prem-container__btn prem-container__btn--color">
                  Get Pro Max
                </a>
                <p className="prem-container__price">
                  499<span>$</span>
                </p>
                <div className="prem-container__boxer">
                  <img src="./assets/icon/date.svg" alt="" />
                  <p className="prem-container__text-small">per year</p>
                </div>
              </article>
            </article>
          </div>

          <div className="prem-containers__wrap--bot">
            <div className="prem-container__box prem-container__box--bot">
              <p className="prem-container__title-small">Free AI Chat</p>
              <p className="prem-container__text">Chat AI for free use, plus 3-day trial exercises</p>
            </div>

            <div className="prem-container__wrap-icon">
              <div className="prem-container__icon">
                <img src="./assets/icon/check.svg" alt="" />
                <p className="prem-container__text--small d-none d-lg-block">Free</p>
              </div>

              <div className="prem-container__icon">
                <img src="./assets/icon/check.svg" alt="" />
                <p className="prem-container__text--small d-none d-lg-block">Pro Lite</p>
              </div>

              <div className="prem-container__icon">
                <img src="./assets/icon/check.svg" alt="" />
                <p className="prem-container__text--small d-none d-lg-block">Pro</p>
              </div>

              <div className="prem-container__icon">
                <img src="./assets/icon/check.svg" alt="" />
                <p className="prem-container__text--small d-none d-lg-block">Pro Max</p>
              </div>
            </div>
          </div>

          <div className="prem-containers__wrap--bot">
            <div className="prem-container__box prem-container__box--bot">
              <p className="prem-container__title-small">Diverse exercises</p>
              <p className="prem-container__text">Many interesting and diverse exercises, with AI correcting them</p>
            </div>
            <div className="prem-container__wrap-icon">
              <div className="prem-container__icon">
                <img src="./assets/icon/minus.svg" alt="" />
                <p className="prem-container__text--small d-none d-lg-block">Free</p>
              </div>

              <div className="prem-container__icon">
                <img src="./assets/icon/check.svg" alt="" />
                <p className="prem-container__text--small d-none d-lg-block">Pro Lite</p>
              </div>

              <div className="prem-container__icon">
                <img src="./assets/icon/check.svg" alt="" />
                <p className="prem-container__text--small d-none d-lg-block">Pro</p>
              </div>

              <div className="prem-container__icon">
                <img src="./assets/icon/check.svg" alt="" />
                <p className="prem-container__text--small d-none d-lg-block">Pro Max</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumPage;

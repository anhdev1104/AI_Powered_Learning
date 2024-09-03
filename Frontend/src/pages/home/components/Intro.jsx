const Intro = () => {
  return (
    <div id="explore" className="container">
      <div className="intro">
        <section className="intro-content">
          <div className="intro-content__wrap">
            <h2 className="section-heading">Start Exploring</h2>
            <p className="section-desc">
              Explore is a well-organized tool that helps you get the most out of
              <span className="intro-content__color !text-3xl"> DaddyWorld </span>
              by providing structure to guide your progress towards the next step in your programming career.
            </p>
          </div>
          <button className="btn intro-content__btn d-lg-none">
            <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.7072 2.42896H17.5712V9.29195H16.5712V4.13596L3.2832 17.424L2.5752 16.717L15.8652 3.42996H10.7072V2.42996V2.42896Z"
              />
            </svg>
          </button>
        </section>

        <div className="intro-container">
          <article className="intro-container__wrap">
            <img src="./assets/img/intro/intro1.jpg" alt="" className="intro-container__thumb" />
            <section className="intro-container__content">
              <p className="intro-container__position section-desc">Javascript</p>
              <h3 className="section-heading">Front-end</h3>
            </section>
          </article>

          <article className="intro-container__wrap">
            <img src="./assets/img/intro/intro2.png" alt="" className="intro-container__thumb" />
            <section className="intro-container__content">
              <p className="intro-container__position section-desc">PHP</p>
              <h3 className="section-heading">Back-end</h3>
            </section>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Intro;

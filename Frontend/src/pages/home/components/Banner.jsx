const Banner = () => {
  return (
    <div id="home" className="home">
      <div className="home__container">
        <div className="h-[700px] overflow-hidden ">
          <img className="w-full h-full object-cover" src="/assets/img/home/coder-ai.png"></img>
        </div>
        {/* <div className="home__wrap-img d-md-none">
          <img src="./assets/img/logo.png" alt="" className="home__logo " />
          <h2 className="home__title section-heading">AI FOR EDUCATION</h2>
        </div> */}
      </div>
      <div className="home__wrap d-sm-none z-[-1]">
        <div className="home__slide">
          <div className="home__box">
            <span className="home__text section-desc">Hello</span>
            <span className="home__text section-desc">Merhaba</span>
            <span className="home__text section-desc">Habari</span>
            <span className="home__text section-desc">Zdravo</span>
            <span className="home__text section-desc">Griassdi</span>
          </div>
        </div>
        <div className="home__slide home__slide1">
          <div className="home__box home__box1">
            <span className="home__text section-desc">Hallo</span>
            <span className="home__text section-desc">Përshëndetje</span>
            <span className="home__text section-desc">مرحبا</span>
            <span className="home__text section-desc">Bula</span>
            <span className="home__text section-desc">Bonjour</span>
          </div>
        </div>
        <div className="home__slide home__slide2">
          <div className="home__box home__box2">
            <span className="home__text section-desc">Szia</span>
            <span className="home__text section-desc">Ciao</span>
            <span className="home__text section-desc">こんにちは</span>
            <span className="home__text section-desc">안녕하세요</span>
            <span className="home__text section-desc">ສະບາຍດີ</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

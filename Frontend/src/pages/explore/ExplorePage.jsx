import { Link } from 'react-router-dom';

const ExplorePage = () => {
  return (
    <main className="container">
      <div className="explore">
        <div className="explore-container">
          <h2 className="section-heading">Front-end exercises</h2>
          <div className="explore-container__list">
            <article className="explore-item">
              <Link to="/explore-item">
                <img src="./assets/img/explore/javascript.jpg" alt="" className="explore-item__thumb" />
                <section className="explore-item__content">
                  <h3 className="explore-item__title section-heading">JavaScript</h3>
                  <p className="explore-item__desc section-desc">
                    There are more than 500 exercises waiting for you to conquer.
                  </p>
                </section>
              </Link>
            </article>

            <article className="explore-item">
              <a href="#!">
                <img src="./assets/img/explore/html-css.webp" alt="" className="explore-item__thumb" />
                <section className="explore-item__content">
                  <h3 className="explore-item__title section-heading">HTML & CSS</h3>
                  <p className="explore-item__desc section-desc">
                    There are more than 1200 exercises waiting for you to conquer.
                  </p>
                </section>
              </a>
            </article>
          </div>
        </div>

        <div className="explore-container">
          <h2 className="section-heading">Back-end exercises</h2>
          <div className="explore-container__list">
            <article className="explore-item">
              <a href="#!">
                <img src="./assets/img/explore/php.png" alt="" className="explore-item__thumb" />
                <section className="explore-item__content">
                  <h3 className="explore-item__title section-heading">PHP</h3>
                  <p className="explore-item__desc section-desc">
                    There are more than 100 exercises waiting for you to conquer.
                  </p>
                </section>
              </a>
            </article>

            <article className="explore-item">
              <a href="#!">
                <img src="./assets/img/explore/cshape.png" alt="" className="explore-item__thumb" />
                <section className="explore-item__content">
                  <h3 className="explore-item__title section-heading">C#</h3>
                  <p className="explore-item__desc section-desc">There are more than 10 exercises waiting</p>
                </section>
              </a>
            </article>

            <article className="explore-item">
              <a href="#!">
                <img src="./assets/img/explore/python.jpg" alt="" className="explore-item__thumb" />
                <section className="explore-item__content">
                  <h3 className="explore-item__title section-heading">Python</h3>
                  <p className="explore-item__desc section-desc">There are more than 10 exercises waiting</p>
                </section>
              </a>
            </article>

            <article className="explore-item">
              <a href="#!">
                <img src="./assets/img/explore/java.webp" alt="" className="explore-item__thumb" />
                <section className="explore-item__content">
                  <h3 className="explore-item__title section-heading">Java</h3>
                  <p className="explore-item__desc section-desc">
                    There are more than 50 exercises waiting for you to conquer.
                  </p>
                </section>
              </a>
            </article>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ExplorePage;

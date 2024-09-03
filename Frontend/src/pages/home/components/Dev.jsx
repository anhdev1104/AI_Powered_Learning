import { useEffect } from 'react';

const Dev = () => {
  useEffect(() => {
    const items = document.querySelectorAll('.dev-container__item');

    items.forEach(item => {
      item.addEventListener('click', changeValueDev);
    });

    return () => {
      items.forEach(item => {
        item.removeEventListener('click', changeValueDev);
      });
    };
  }, []);

  const changeValueDev = e => {
    const items = document.querySelectorAll('.dev-container__item');
    items.forEach(item => item.classList.remove('dev-container__item--active'));
    e.currentTarget.classList.add('dev-container__item--active');

    const textItems = document.querySelectorAll('.dev-container__text');
    textItems.forEach(item => {
      item.classList.remove('dev-container__text--active');
      const dataTextIndex = item.getAttribute('data-text');
      console.log('e.currentTarget.dataset.label', e.currentTarget.dataset.label);

      if (dataTextIndex === e.currentTarget.dataset.label) {
        item.classList.add('dev-container__text--active');
      }
    });
  };

  return (
    <div className="container">
      <div id="dev" className="dev">
        <section className="dev-content">
          <div className="dev-content__wrap">
            <img src="./assets/img/dev/logo.png" alt="" className="dev-content__img text-center mx-auto" />
            <h2 className="dev-content__title section-heading">Developer</h2>
            <p className="section-desc">
              We currently support 2 popular coding languages. At our core, DaddyWorld is about developers. Our powerful
              development tools like Playground help you test, debug, and even write your own projects online.
            </p>
          </div>
        </section>

        <div className="dev-container">
          <div className="row g-2 js-tabs">
            <article className="col-4">
              <div className="row">
                <div className="col-12">
                  <div
                    className="dev-container__item dev-container__item--active"
                    onClick={changeValueDev}
                    data-label="1"
                  >
                    <img src="./assets/img/dev/border.png" alt="" className="dev-container__code" />
                    <h3 className="dev-container__language">LiveCode</h3>
                  </div>
                </div>
                <div className="col-12">
                  <div className="dev-container__item " onClick={changeValueDev} data-label="2">
                    <img src="./assets/img/dev/border.png" alt="" className="dev-container__code" />
                    <h3 className="dev-container__language">JavaScript</h3>
                  </div>
                </div>
                <div className="col-12">
                  <div className="dev-container__item" onClick={changeValueDev} data-label="3">
                    <img src="./assets/img/dev/border.png" alt="" className="dev-container__code" />
                    <h3 className="dev-container__language">PHP</h3>
                  </div>
                </div>
              </div>
            </article>
            <article className="col-8">
              <div className="dev-container__wrap">
                <img src="./assets/img/dev/code.png" alt="" className="dev-container__bg" />
                <div className="dev-container__box">
                  <p className="dev-container__text dev-container__text--active" data-text="1">
                    sort lines of theText descending by last item of each
                    <a href="#!" className="dev-container__text--link">
                      Create Playground
                    </a>
                  </p>

                  <p className="dev-container__text" data-text="2">
                    <span>theText = theText.split("\n");</span>
                    <br />
                    <span>theText =</span>
                    <span>theText.sort(sort_item_3).join("\n");</span>
                    <br />
                    <span>function sort_item_3(line1, line2){`{`}</span>
                    <br />
                    <span>line1 = line1.split(",");</span>
                    <br />
                    <span>line2 = line2.split(",");</span>
                    <br />
                    <span>if(line1[2] ==line2[2]) return 0;</span>
                    <br />
                    <span>else if(line1[2] {'>'} line2[2]) return</span>
                    <span>-1;</span>
                    <br />
                    <span>else return 1; {'}'}</span>
                  </p>

                  <p className="dev-container__text" data-text="3">
                    <span>$theText = explode("\n",</span>
                    <span>$theText);</span>
                    <br />
                    <span>uasort($theText, "sort_item_3");</span>
                    <br />
                    <span>$theText = implode("\n",</span>
                    <span> $theText);</span>
                    <br />
                    <span>function sort_item_3($line1, $line2)</span>
                    <>
                      <>
                        <>
                          <br />
                          <span>$line1 = explode(",", $line1);</span>
                          <br />
                        </>
                        <span>$line2 = explode(",", $line2);</span>
                        <br />
                      </>
                      <span>if($line1[2] == $line2[2]) return</span>
                      <span>0;</span>
                      <br />
                      <span>else if($line1[2] {'>'} $line2[2])</span>
                      <span>return -1;</span>
                      <br />
                      <span>else return 1; {'}'}</span>
                    </>
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dev;

import { listExercises } from '@/services/exercises';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ExploreItem = () => {
  const [listExercise, setListExercise] = useState([]);
  console.log('🚀 ~ ExploreItem ~ listExercise:', listExercise);

  useEffect(() => {
    (async () => {
      const data = await listExercises();
      data && setListExercise(data.data[0].exercises);
    })();
  }, []);

  return (
    <main className="container">
      <div className="explore">
        <div className="explore-container">
          <div className="explore-content">
            <div>
              <h2 className="section-heading">JavaScript</h2>
              <p className="section-desc explore-content__desc">
                Learn Back-end with JavaScript, there are more than 500 exercises from easy to difficult waiting for you
              </p>
            </div>
            <img src="./assets/img/explore/javascript.jpg" alt="" className="explore-content__img" />
          </div>
        </div>

        <div className="explore-container">
          <div className="explore-exercise">
            <div className="explore-exercise__content">
              <div className="explore-exercise__box">
                <img src="./assets/icon/minus.svg" alt="" className="explore-exercise__icon" />
                <h3 className="explore-exercise__title">Javascript Basic</h3>
              </div>
              <p className="explore-exercise__desc">{listExercise.length} Exercise</p>
            </div>
            <ul className="explore-exercise__list">
              {listExercise.map((item, index) => (
                <li className="explore-exercise__item" key={item.id}>
                  <Link to={`/learning/${item.slug}`} className="explore-exercise__link">
                    {index + 1}. {item.title}
                  </Link>
                  <div className="flex gap-20">
                    <div className={` capitalize ${item.difficulty === 'easy' ? 'text-green-500' : 'text-yellow-500'}`}>
                      {item.difficulty}
                    </div>
                    <span className="explore-exercise__un-check"></span>
                    {/* <img src="./assets/icon/check.svg" alt="" className="explore-exercise__check" /> */}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="explore-container">
          <div className="explore-wrap">
            <h3 className="explore-wrap__title section-heading">Request</h3>
            <ul className="explore-wrap__list">
              <li className="explore-wrap__item">
                <img src="./assets/icon/check.svg" alt="" />
                <p className="explore-wrap__request">Have basic knowledge of Javascript</p>
              </li>
              <li className="explore-wrap__item">
                <img src="./assets/icon/check.svg" alt="" />
                <p className="explore-wrap__request">Master the features in Javascript ES6</p>
              </li>

              <li className="explore-wrap__item">
                <img src="./assets/icon/check.svg" alt="" />
                <p className="explore-wrap__request">Have knowledge of asynchronous programming in Javascript</p>
              </li>
              <li className="explore-wrap__item">
                <img src="./assets/icon/check.svg" alt="" />
                <p className="explore-wrap__request">
                  Own a computer with internet connection running Windows, Ubuntu or MacOS
                </p>
              </li>
              <li className="explore-wrap__item">
                <img src="./assets/icon/check.svg" alt="" />
                <p className="explore-wrap__request">
                  High awareness and responsibility in self-study. Practice many times with exercises.
                </p>
              </li>
              <li className="explore-wrap__item">
                <img src="./assets/icon/check.svg" alt="" />
                <p className="explore-wrap__request">
                  If you have any questions while doing the exercises, please join the Q&A at Chat AI below each
                  exercise section.
                </p>
              </li>
              <li className="explore-wrap__item">
                <img src="./assets/icon/check.svg" alt="" />
                <p className="explore-wrap__request">
                  You don't need to know anything more, in the exercises I will show you what you need to know.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ExploreItem;

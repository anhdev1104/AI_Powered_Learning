import { Swiper, SwiperSlide } from 'swiper/react';

const Feedback = () => {
  return (
    <div id="feedback" className="feedback">
      <div className="container">
        <section className="feedback-content">
          <h2 className="feedback-content__title section-heading">All Things</h2>
        </section>
      </div>

      <div className="feedback-container">
        <div className="feedback-container__carousel">
          <Swiper grabCursor={'true'} slidesPerView={'auto'}>
            <SwiperSlide>
              <article className="feedback-container__box" draggable="false">
                <div className="feedback-container__wrap">
                  <img src="./assets/img/feedback/avt1.jpg" alt="" className="feedback-container__avt" />
                  <div className="feedback-container__stars">
                    <img src="./assets/icon/star.svg" alt="" />
                    <img src="./assets/icon/star.svg" alt="" />
                    <img src="./assets/icon/star.svg" alt="" />
                    <img src="./assets/icon/star.svg" alt="" />
                    <img src="./assets/icon/star.svg" alt="" />
                  </div>
                </div>
                <h3 className="feedback-container__title section-heading">#Thank you</h3>
                <p className="feedback-container__desc">Thank you Daddy World team for creating a great learning app</p>
              </article>
            </SwiperSlide>
            <SwiperSlide>
              <article className="feedback-container__box" draggable="false">
                <div className="feedback-container__wrap">
                  <img src="./assets/img/feedback/avt2.jpg" alt="" className="feedback-container__avt" />
                  <div className="feedback-container__stars">
                    <img src="./assets/icon/star.svg" alt="" />
                    <img src="./assets/icon/star.svg" alt="" />
                    <img src="./assets/icon/star.svg" alt="" />
                    <img src="./assets/icon/star-blank.svg" alt="" />
                    <img src="./assets/icon/star-blank.svg" alt="" />
                  </div>
                </div>
                <h3 className="feedback-container__title section-heading">#Contribute</h3>
                <p className="feedback-container__desc">
                  The application is great, helps me review old knowledge, I hope the team develops more new languages
                </p>
              </article>
            </SwiperSlide>
            <SwiperSlide>
              <article className="feedback-container__box" draggable="false">
                <div className="feedback-container__wrap">
                  <img src="./assets/img/feedback/avt3.jpg" alt="" className="feedback-container__avt" />
                  <div className="feedback-container__stars">
                    <img src="./assets/icon/star.svg" alt="" />
                    <img src="./assets/icon/star.svg" alt="" />
                    <img src="./assets/icon/star.svg" alt="" />
                    <img src="./assets/icon/star.svg" alt="" />
                    <img src="./assets/icon/star-blank.svg" alt="" />
                  </div>
                </div>
                <h3 className="feedback-container__title section-heading">#Question</h3>
                <p className="feedback-container__desc">
                  Will the team continue to develop new languages ​​in the future? If so, that would be great for
                  students like us.
                </p>
              </article>
            </SwiperSlide>
            <SwiperSlide>
              <article className="feedback-container__box" draggable="false">
                <div className="feedback-container__wrap">
                  <img src="./assets/img/feedback/avt1.jpg" alt="" className="feedback-container__avt" />
                  <div className="feedback-container__stars">
                    <img src="./assets/icon/star.svg" alt="" />
                    <img src="./assets/icon/star.svg" alt="" />
                    <img src="./assets/icon/star.svg" alt="" />
                    <img src="./assets/icon/star.svg" alt="" />
                    <img src="./assets/icon/star.svg" alt="" />
                  </div>
                </div>
                <h3 className="feedback-container__title section-heading">#Thank you</h3>
                <p className="feedback-container__desc">Thank you Daddy World team for creating a great learning app</p>
              </article>
            </SwiperSlide>
            <SwiperSlide>
              <article className="feedback-container__box" draggable="false">
                <div className="feedback-container__wrap">
                  <img src="./assets/img/feedback/avt2.jpg" alt="" className="feedback-container__avt" />
                  <div className="feedback-container__stars">
                    <img src="./assets/icon/star.svg" alt="" />
                    <img src="./assets/icon/star.svg" alt="" />
                    <img src="./assets/icon/star.svg" alt="" />
                    <img src="./assets/icon/star-blank.svg" alt="" />
                    <img src="./assets/icon/star-blank.svg" alt="" />
                  </div>
                </div>
                <h3 className="feedback-container__title section-heading">#Contribute</h3>
                <p className="feedback-container__desc">
                  The application is great, helps me review old knowledge, I hope the team develops more new languages
                </p>
              </article>
            </SwiperSlide>
            <SwiperSlide>
              <article className="feedback-container__box" draggable="false">
                <div className="feedback-container__wrap">
                  <img src="./assets/img/feedback/avt3.jpg" alt="" className="feedback-container__avt" />
                  <div className="feedback-container__stars">
                    <img src="./assets/icon/star.svg" alt="" />
                    <img src="./assets/icon/star.svg" alt="" />
                    <img src="./assets/icon/star.svg" alt="" />
                    <img src="./assets/icon/star.svg" alt="" />
                    <img src="./assets/icon/star-blank.svg" alt="" />
                  </div>
                </div>
                <h3 className="feedback-container__title section-heading">#Question</h3>
                <p className="feedback-container__desc">
                  Will the team continue to develop new languages ​​in the future? If so, that would be great for
                  students like us.
                </p>
              </article>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Feedback;

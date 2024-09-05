import { Swiper, SwiperSlide } from 'swiper/react';

const Feedback = () => {
  return (
    <div id="feedback" className="feedback">
      <div className="container">
        <section className="feedback-content">
          <h2 className="feedback-content__title section-heading">All Things</h2>
        </section>
      </div>

      <div className="feedback-container !mt-10">
        <div className="feedback-container__carousel">
          <Swiper grabCursor={'true'} slidesPerView={'auto'} spaceBetween={'10px'}>
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
                <div className="mt-10 leading-8">Thank you Daddy World team for creating a great learning app</div>
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
                <div className="mt-10 leading-8">
                  The application is great, helps me review old knowledge, I hope the team develops more new languages
                </div>
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
                <div className="mt-10 leading-8">
                  Will the team continue to develop new languages ​​in the future? If so, that would be great for
                  students like us.
                </div>
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
                <div className="mt-10 leading-8">Thank you Daddy World team for creating a great learning app</div>
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
                <div className="mt-10 leading-8">
                  The application is great, helps me review old knowledge, I hope the team develops more new languages
                </div>
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
                <div className="mt-10 leading-8">
                  Will the team continue to develop new languages ​​in the future? If so, that would be great for
                  students like us.
                </div>
              </article>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Feedback;

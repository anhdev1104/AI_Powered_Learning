import { chatAI } from '@/services/AI';
import { useEffect, useState } from 'react';

const ChatAIPage = () => {
  const [question, setQuestion] = useState('');
  const [user, setUser] = useState();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user')) || null;
    user && setUser(user.data.id);
  }, []);

  const handleQuestionChatAI = async () => {
    const dataQuestion = {
      prompt: question,
      user_id: user,
    };
    const data = await chatAI(dataQuestion);
    console.log(data);
  };
  return (
    <div className="chat">
      <div className="row">
        <article className="col-3 d-md-none">
          <div className="chat__container">
            <article className="chat-info">
              <img src="./assets/img/feedback/avt1.jpg" alt="" className="chat-info__avatar" />
              <h2 className="chat-info__name">Hoàng Bảo Trung</h2>
              <p className="chat-info__mail">trunghbpd07238@fpt.edu.vn</p>
            </article>

            <article id="chat-block" className="chat-block">
              <div className="chat-block__item">
                <p className="chat-block__date">Today</p>
                <h3 className="chat-block__title">Làm thế nào để tăng tư duy thuật toán</h3>
              </div>

              <div className="chat-block__item">
                <p className="chat-block__date">Tomorrow</p>
                <h3 className="chat-block__title">Lập trình hướng đối tượng là gì</h3>
              </div>
            </article>
          </div>
        </article>

        <article className="col-9 col-md-12">
          <div className="chat-box !bg-gray-50/10">
            <div id="chat-box__message" className="chat-box__message">
              <div id="chat" className="chat-message">
                <p id="messageUser" className="chat-message__text">
                  xin chào
                </p>

                <div id="messageAI" className="chat-message__text chat-message__text--AI messageAI">
                  <p>Yes i am happy to help you</p>
                  <div className="chat-message__icons">
                    <button className="chat-message__icon" onclick="speakText()" id="toSpeach" type="button">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                        <path
                          fill="#e7f3e2"
                          d="M533.6 32.5C598.5 85.2 640 165.8 640 256s-41.5 170.7-106.4 223.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C557.5 398.2 592 331.2 592 256s-34.5-142.2-88.7-186.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM473.1 107c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C475.3 341.3 496 301.1 496 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM301.1 34.8C312.6 40 320 51.4 320 64l0 384c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352 64 352c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l67.8 0L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3z"
                        />
                      </svg>
                    </button>

                    <button className="chat-message__icon" onclick="like()" type="button">
                      <svg className="like" fill="#e7f3e2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2l144 0c26.5 0 48 21.5 48 48c0 18.5-10.5 34.6-25.9 42.6C497 275.4 504 288.9 504 304c0 23.4-16.8 42.9-38.9 47.1c4.4 7.3 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48l-97.5 0c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3l0-38.3 0-48 0-24.9c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192l64 0c17.7 0 32 14.3 32 32l0 224c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32L0 224c0-17.7 14.3-32 32-32z" />
                      </svg>
                    </button>

                    <button className="chat-message__icon" onclick="unLike()" type="button">
                      <svg className="unLike" fill="#e7f3e2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2l144 0c26.5 0 48-21.5 48-48c0-18.5-10.5-34.6-25.9-42.6C497 236.6 504 223.1 504 208c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48l-97.5 0c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7l0 38.3 0 48 0 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 384l64 0c17.7 0 32-14.3 32-32l0-224c0-17.7-14.3-32-32-32L32 96C14.3 96 0 110.3 0 128L0 352c0 17.7 14.3 32 32 32z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <div id="chat-box__wrap" className="chat-box__wrap">
                <img src="./assets/img/logo.png" alt="" className="chat-box__logo !opacity-[0.2] !ml-28 !w-60" />
              </div>

              <form action="" className="chat-box__form">
                <input
                  className="chat-box__input"
                  type="text"
                  name=""
                  id="inputMessage"
                  placeholder="Aa"
                  value={question}
                  onChange={e => setQuestion(e.target.value)}
                />

                <div className="chat-box__icons">
                  <img id="pushImage" src="./assets/icon/image.svg" alt="" className="chat-box__icon" />
                  <img id="mic" src="./assets/icon/mic.svg" alt="" className="chat-box__icon" />
                  <button type="button" onClick={handleQuestionChatAI}>
                    <img id="send" src="./assets/icon/send.svg" alt="" className="chat-box__icon" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ChatAIPage;

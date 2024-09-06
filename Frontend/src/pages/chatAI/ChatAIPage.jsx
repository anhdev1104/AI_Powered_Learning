import DotLoading from '@/components/loading/DotLoading';
import { chatAI, oldChatAI, oldMessageChatDetails } from '@/services/AI';
import { useEffect, useState } from 'react';

const ChatAIPage = () => {
  const [question, setQuestion] = useState('');
  const [user, setUser] = useState();
  const [chatDetails, setChatDetails] = useState();
  const [listOldChat, setListOldChat] = useState([]);
  const [account, setAccount] = useState();
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  console.log('🚀 ~ ChatAIPage ~ isLoading:', isLoading);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    setAccount(user);
    user && setUser(user.data.id);
  }, []);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    (async () => {
      const data = await oldChatAI(user.data.id);
      data && setListOldChat(data.data);
    })();
  }, []);

  const handleMessageDetails = async id => {
    const dataChatOld = await oldMessageChatDetails(id, user);
    setChatDetails(dataChatOld);
    const { data } = dataChatOld;
    const { messages } = data;
    setMessages(messages);
  };

  const handleQuestionChatAI = async e => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const dataQuestion = {
        prompt: question,
        user_id: user,
      };

      const newMessage = {
        message_text: question,
        sender_type: 'user', // Đánh dấu tin nhắn là của người dùng
      };
      setMessages([...messages, newMessage]);
      setQuestion('');

      // Gửi câu hỏi đến API
      const dataResAi = await chatAI(dataQuestion);

      // Thêm tin nhắn của AI vào danh sách messages sau khi nhận phản hồi
      const newMessageAI = {
        message_text: dataResAi.data,
        sender_type: 'AI',
      };
      setMessages(prevMessages => [...prevMessages, newMessageAI]);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="chat">
      <div className="row">
        <article className="col-3 d-md-none">
          <div className="chat__container">
            <article className="chat-info">
              <img src={account?.data.avatar} alt="" className="chat-info__avatar" />
              <h2 className="chat-info__name">{account?.data.user_name}</h2>
              <p className="chat-info__mail">{account?.data.email}</p>
            </article>

            <article id="chat-block" className="chat-block">
              {listOldChat.length > 0 &&
                listOldChat
                  .map(item => (
                    <div
                      className="chat-block__item cursor-pointer"
                      key={item.id}
                      onClick={() => handleMessageDetails(item.id)}
                    >
                      <p className="chat-block__date !leading-[1.8] line-clamp-2">{item.title}</p>
                    </div>
                  ))
                  .reverse()}
            </article>
          </div>
        </article>

        <article className="col-9 col-md-12">
          <div className="chat-box !bg-gray-50/10">
            <div id="chat-box__message" className="chat-box__message">
              <div id="chat" className="chat-message">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`chat-message__text ${
                      message.sender_type === 'AI' ? 'chat-message__text--AI' : 'chat-message__text--user'
                    }`}
                  >
                    <p>{message.message_text}</p>
                  </div>
                ))}
              </div>
              {isLoading && <DotLoading />}

              <div id="chat-box__wrap" className="chat-box__wrap">
                <img src="./assets/img/logo.png" alt="" className="chat-box__logo !opacity-[0.2] !ml-28 !w-60" />
              </div>

              <div className="chat-box__form">
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
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ChatAIPage;

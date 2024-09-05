import LanguageSelect from '@/components/languageSelect/LanguageSelect';
import { Editor } from '@monaco-editor/react';
import { useEffect, useRef, useState } from 'react';
import Output from './components/Output';
import { exerciseDetails } from '@/services/exercises';
import { useParams } from 'react-router-dom';

const LearningPage = () => {
  const [value, setValue] = useState('');
  const editorRef = useRef();
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');
  const [question, setQuestion] = useState([]);
  console.log('🚀 ~ LearningPage ~ question:', question);
  const { slug } = useParams();

  useEffect(() => {
    (async () => {
      const data = await exerciseDetails(slug);
      data && setQuestion(data);
    })();
  }, [slug]);

  const handleLanguageSelect = selectedLanguage => {
    setSelectedLanguage(selectedLanguage);
  };
  const onMount = editor => {
    editorRef.current = editor;
    editor.focus();
  };

  return (
    <section className="flex px-14 gap-10">
      <div className="w-2/4">
        <div className="mt-9">
          <div className="flex items-center justify-between mb-5">
            <span className="font-semibold">Question</span>
          </div>
          <div className="h-[60vh] bg-[#1e1e1e] p-10 overflow-y-auto question-box">
            <article class="code-container">
              <section class="code-container__content">
                <h3 class="code-container__title capitalize !text-4xl">{question?.data?.title}</h3>
                <p
                  class={`code-container__level capitalize ${
                    question?.data?.difficulty === 'easy' ? '!text-[#46c6c2]' : '!text-yellow-500'
                  }`}
                >
                  {question?.data?.difficulty}
                </p>
                <p class="code-container__desc">{question?.data?.description}</p>
              </section>

              <div class="code-boxer">
                {question?.data?.exercise_example.map((item, index) => (
                  <div class="code-boxer__row" key={item?.id}>
                    <h4 class="code-boxer__title">{`Example ${index + 1}`}</h4>
                    <div class="code-boxer__wrap">
                      <p class="code-boxer__sub-title">Input:</p>
                      <p class="code-boxer__desc">{item?.input}</p>
                      <p class="code-boxer__sub-title">
                        Output:
                        <span class="code-boxer__desc"> {item?.output}</span>
                      </p>
                      <p class="code-boxer__sub-title">Explanation:</p>
                      <p class="code-boxer__desc">{item?.description}</p>
                    </div>
                  </div>
                ))}

                {/* <div class="code-boxer__row">
                  <h4 class="code-boxer__title">Example 2:</h4>
                  <div class="code-boxer__wrap">
                    <p class="code-boxer__sub-title">Input:</p>
                    <p class="code-boxer__desc">n = -2</p>
                    <p class="code-boxer__desc">["call","call","call","call","call"]</p>
                    <p class="code-boxer__sub-title">
                      Output:
                      <span class="code-boxer__desc">[-2,-1,0,1,2]</span>
                    </p>
                    <p class="code-boxer__sub-title">Explanation:</p>
                    <p class="code-boxer__desc">
                      counter() initially returns -2. Then increases after each sebsequent call.
                    </p>
                  </div>
                </div> */}
              </div>
              <div class="code-boxer">
                <p class="code-boxer__sub-title">Explanation:</p>
                <ul class="code-boxer__list">
                  <li class="code-boxer__item">{question?.data?.constraints}</li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
      <div className="w-2/4">
        <div>
          <div className="flex items-center justify-between">
            <div className="flex gap-5 font-semibold items-center">
              <span className="text-green-700 text-3xl">{'</>'}</span>
              <span className="font-semibold">Code</span>
            </div>
            <LanguageSelect
              selectedLanguage={selectedLanguage}
              handleLanguageSelect={handleLanguageSelect}
            ></LanguageSelect>
          </div>
          <Editor
            height="60vh"
            language={selectedLanguage}
            defaultValue="// Enter code here"
            theme="vs-dark"
            value={value}
            onChange={value => setValue(value)}
            onMount={onMount}
          />
        </div>
        <Output editorRef={editorRef} selectedLanguage={selectedLanguage} />
      </div>
    </section>
  );
};

export default LearningPage;

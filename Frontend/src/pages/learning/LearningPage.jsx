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
          <div className="h-[60vh] bg-[#1e1e1e] p-10 "></div>
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

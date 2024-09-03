import LanguageSelect from '@/components/languageSelect/LanguageSelect';
import { Editor } from '@monaco-editor/react';
import { useRef, useState } from 'react';
import Output from './components/Output';

const LearningPage = () => {
  const [value, setValue] = useState('');
  const editorRef = useRef();
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');

  const handleLanguageSelect = selectedLanguage => {
    setSelectedLanguage(selectedLanguage);
  };
  const onMount = editor => {
    editorRef.current = editor;
    editor.focus();
  };

  return (
    <section className="flex px-14">
      <div className="w-2/4"></div>
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

import { executeCode } from '@/services/apiEditor';
import { useState } from 'react';

const Output = ({ editorRef, selectedLanguage }) => {
  const [output, setOutput] = useState();
  const runCode = async () => {
    const sourceCode = editorRef.current.getValue();
    if (!sourceCode) return;
    try {
      const { run } = await executeCode(selectedLanguage, sourceCode);

      run && setOutput(run.output);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="my-10">
      <div>
        <div className="flex items-center justify-between">
          <span className="font-semibold">Output</span>
          <button
            className="py-4 px-3 bg-green-700 hover:bg-green-500 transition-all text-white rounded-md font-semibold text-2xl"
            onClick={runCode}
          >
            Run code
          </button>
        </div>
        <div className="h-[50vh] bg-[#1e1e1e] p-10 ">
          <p className="!leading-6 font-semibold text-2xl">{output}</p>
        </div>
      </div>
    </div>
  );
};

export default Output;

import { executeCode } from '@/services/apiEditor';
import { checkResult } from '@/services/exercises';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const Output = ({ editorRef, selectedLanguage, exercise_id }) => {
  console.log('🚀 ~ Output ~ exercise_id:', exercise_id);
  const [output, setOutput] = useState();
  const [userId, setUserId] = useState();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    user && setUserId(user?.data?.id);
  }, []);

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

  const submitCode = async () => {
    const sourceCode = editorRef.current.getValue();
    const promptQuestion = {
      exercise_id,
      prompt: sourceCode,
      user_id: userId,
      language: 'javascript',
    };
    const data = await checkResult(promptQuestion);

    if (data.data === 'failed') {
      toast.error('Chưa đúng output, vui lòng kiểm tra lại !');
    } else {
      toast.success('Chính xác. Bạn đã hoàn thành bài tập ^^');
    }
  };
  return (
    <div className="my-10">
      <div>
        <div className="flex items-center justify-between">
          <span className="font-semibold">Output</span>
          <div className="flex gap-10">
            <button
              className="py-4 px-3 bg-gray-700 hover:bg-gray-500 transition-all text-white rounded-md font-semibold text-2xl"
              onClick={runCode}
            >
              Run code
            </button>
            <button
              className="py-4 px-7 bg-green-700 hover:bg-green-500 transition-all text-white rounded-md font-semibold text-2xl"
              onClick={submitCode}
            >
              Submit
            </button>
          </div>
        </div>
        <div className="h-[50vh] bg-[#1e1e1e] p-10 ">
          <p className="!leading-6 font-semibold text-2xl">{output}</p>
        </div>
      </div>
    </div>
  );
};

export default Output;

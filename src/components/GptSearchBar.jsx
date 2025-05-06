import React from 'react';
import lang from '../utilits/LanguageConstant';
import { useSelector } from 'react-redux';

const GptSearchBar = () => {
    const language=useSelector(state=>state.config?.lang);
    console.log(language)

    

  return (
    <div className="pt-[10%] flex justify-center w-screen px-4">
      <form className="flex w-full max-w-2xl bg-black p-4 rounded-lg">
        <input
          type="text"
          className="flex-grow p-3 rounded-md focus:outline-none bg-white"
          placeholder={lang[language].gptSearchPlaceholder}
        />
        <button className="ml-4 px-4 py-2 bg-red-700 text-white rounded-md hover:bg-red-600 transition">
          {lang[language].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;


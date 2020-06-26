import React, { useState } from "react";

const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  };

  return (
    <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
      <form onSubmit={onFormSubmit} className="w-full max-w-sm flex ">
        <div className="items-center border-b border-b-2 border-teal-500 mr-5">
          <input
            onChange={(e) => setText(e.target.value)}
            type="text"
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-0 px-2 leading-tight focus:outline-none"
            placeholder="Search Image Term..."
          />
        </div>
        <button
          className="rounded inline-block px-2 text-white border-4 text-sm hover:border-teal-700 border-teal-500 hover:bg-teal-700 bg-teal-500 flex-shrink-0"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default ImageSearch;

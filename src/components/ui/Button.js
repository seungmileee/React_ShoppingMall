import React from "react";

function Button({ text, onClick }) {
  return (
    <button
      className="bg-orange-400 text-white px-3 py-1.5 border-solid border-2 border-orange-400 ease-in duration-200 hover:bg-white hover:text-orange-400"
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;

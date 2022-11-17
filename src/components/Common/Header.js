import React from "react";
import { useNavigate } from "react-router-dom";
import { AiFillShop } from "react-icons/ai";

function Header() {
  const navigate = useNavigate();

  return (
    <header className="w-full flex p-4 border-b">
      <div className="flex items-center">
        <button onClick={() => navigate("/")} className="mr-2 text-4xl">
          <AiFillShop />
        </button>
        <h1 className="font-bold text-2xl">Shoppy</h1>
      </div>
    </header>
  );
}

export default Header;

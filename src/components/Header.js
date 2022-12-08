import React from "react";
import { useNavigate } from "react-router-dom";
import { AiFillShop, AiOutlineShoppingCart } from "react-icons/ai";

function Header() {
  const navigate = useNavigate();

  return (
    <header className="w-full flex justify-between p-4 border-b font-bold">
      <section className="flex items-center text-orange-400">
        <button onClick={() => navigate("/")} className="mr-2 text-4xl">
          <AiFillShop />
        </button>
        <h1 className="text-2xl">Shoppy</h1>
      </section>
      <section className="flex items-center">
        <button onClick={() => navigate("/products")} className="mr-5">
          Products
        </button>
        <button onClick={() => navigate("/cart")} className="mr-5 text-3xl">
          <AiOutlineShoppingCart />
        </button>
        <button className="bg-orange-400 text-white px-3 py-1.5 border-solid border-2 border-orange-400 ease-in duration-200 hover:bg-white hover:text-orange-400">
          Login
        </button>
      </section>
    </header>
  );
}

export default Header;

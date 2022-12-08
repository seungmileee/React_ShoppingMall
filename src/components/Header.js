import React from "react";
import { useNavigate } from "react-router-dom";
import { AiFillShop, AiOutlineShoppingCart } from "react-icons/ai";
import Button from "./ui/Button";
import { login } from "../config/firebase";

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
        <Button text={"Login"} onClick={login} />
      </section>
    </header>
  );
}

export default Header;

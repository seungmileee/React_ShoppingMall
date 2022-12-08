import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiFillShop, AiOutlineShoppingCart } from "react-icons/ai";
import Button from "./ui/Button";
import { login } from "../config/firebase";

function Header() {
  // 로그인 후 user가 리턴되면 상태에 user가 담기도록
  const [user, setUser] = useState();

  const handleLogin = () => {
    login().then((user) => setUser(user));
  };

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
        {!user && <Button text={"Login"} onClick={handleLogin} />}
        {user && <Button text={"Logout"} />}
      </section>
    </header>
  );
}

export default Header;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AiFillShop, AiOutlineShoppingCart } from "react-icons/ai";
import Button from "./ui/Button";
import { login, logout, userStateChange } from "../config/firebase";

function Header() {
  // 로그인 후 user가 리턴되면 상태에 user가 담기도록
  const [user, setUser] = useState();

  useEffect(() => {
    // 로그인 하면 유저 정보가 user 통해서 전달, 로그아웃하면 null이 user 통해서 전달됨
    userStateChange((user) => {
      console.log(user);
      setUser(user);
    });
  }, []);

  console.log(user);

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
        {!user && <Button text={"Login"} onClick={login} />}
        {user && <Button text={"Logout"} onClick={logout} />}
      </section>
    </header>
  );
}

export default Header;

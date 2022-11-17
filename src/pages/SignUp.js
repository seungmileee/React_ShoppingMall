import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", id: "", pw: "" });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  console.log(form);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <main className="flex justify-center">
      <form
        className="flex flex-col border-solid border-4 border-orange-400 mt-20 p-10 rounded-xl"
        onSubmit={handleSubmit}
      >
        <div className="flex justify-between items-center mb-3">
          <label htmlFor="name" className="mr-2">
            name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="name"
            value={form.name}
            onChange={handleChange}
            className="border-solid border-2 border-orange-400 pl-1 outline-none"
          />
        </div>
        <div className="flex justify-between items-center mb-3">
          <label htmlFor="id" className="mr-2">
            id
          </label>
          <input
            type="text"
            id="id"
            name="id"
            placeholder="id"
            value={form.id}
            onChange={handleChange}
            className="border-solid border-2 border-orange-400 pl-1 outline-none"
          />
        </div>
        <div className="flex justify-between mb-4 items-center">
          <label htmlFor="pw" className="mr-3">
            pw
          </label>
          <input
            type="password"
            id="pw"
            name="pw"
            placeholder="password"
            value={form.password}
            onChange={handleChange}
            className="border-solid border-2 border-orange-400 pl-1 outline-none"
          />
        </div>
        <button className="border-solid border-2 border-orange-400 bg-orange-400 py-1.5 text-white ease-in duration-200 mb-3 hover:text-orange-400 hover:bg-white">
          SignUp
        </button>
        <div className="text-center">
          Already have an account?
          <span
            onClick={() => navigate("/signin")}
            className="text-sky-400 cursor-pointer"
          >
            {" "}
            Sign In
          </span>
        </div>
      </form>
    </main>
  );
}

export default SignUp;

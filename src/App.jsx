import React, { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [description, setDescription] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <header className="border-b bg-slate-100 font-bold text-2xl capitalize p-5">
        <div className="container mx-auto ">react forms</div>
      </header>
      <main className="container mx-auto p-5">
        <form onSubmit={handlesubmit}>
          <div className="flex items-center justify-between">
            <div>
              <label htmlFor="name" className="font-bold text-xl capitalize">
                name
              </label>
              <br />
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="write your name ..."
                id="name"
                className="border border-gray-400 p-2 rounded-lg outline-none w-64"
              />
            </div>
            <div>
              <label htmlFor="email" className="font-bold text-xl capitalize">
                email address
              </label>
              <br />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="write your email ..."
                id="email"
                className="border border-gray-400 p-2 rounded-lg outline-none w-64"
              />
            </div>
          </div>
          <div className="mt-5 flex items-center justify-between">
            <div>
              <label htmlFor="number" className="font-bold text-xl capitalize">
                number
              </label>
              <br />
              <input
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                type="number"
                placeholder="write your number ..."
                id="number"
                className="border border-gray-400 p-2 rounded-lg outline-none w-64"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="font-bold text-xl capitalize"
              >
                password
              </label>
              <br />
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="write your password ..."
                id="password"
                className="border border-gray-400 p-2 rounded-lg outline-none w-64"
              />
            </div>
          </div>
          <div className="mt-5">
            <label
              htmlFor="description"
              className="font-bold text-xl capitalize"
            >
              description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              id="description"
              placeholder="write your description ..."
              className="w-full border border-gray-400 outline-none p-5 rounded-lg"
            ></textarea>
          </div>
          <button class="p-5 rounded-md bg-blue-600 font-semibold text-white flex items-center gap-1 hover:bg-blue-800">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M23,20 L23,6 L12,15 L1,6 L1,20 L23,20 Z M12,12 L22,4 L2,4 L12,12 Z"
              ></path>
            </svg>
            Submit Form
          </button>
        </form>
      </main>
    </>
  );
}

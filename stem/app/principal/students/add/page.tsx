"use client";
import React, { useState } from "react";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";

const Principal = () => {
  const [open, setOpen] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [roll, setRoll] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    setOpen(!open);
  };

  //   Have to complete this function
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    console.log(name, email, roll, password);

    const res = await fetch("api/visit", {
      method: "POST",
      headers: { "Contact-type": "application/json" },
      body: JSON.stringify({ name, email, roll, password }),
    });

    const { msg } = await res.json();
    console.log(msg);
  };

  return (
    <main>
      {/* header */}
      <Header handleClick={handleClick} />
      <div className="flex transition-all">
        {/* Sidebar nav */}
        <Navbar open={open} />
        <div className="flex w-full flex-col items-center justify-center px-5 pb-10">
          <h2 className="pb-5 text-4xl font-bold">Create a Student Account</h2>
          <form
            action=""
            onSubmit={handleSubmit}
            className="w-[300px] sm:w-[400px]"
          >
            <label>
              <h3 className="text-xl font-semibold">Name</h3>

              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                id="name"
                placeholder="Name"
                className="w-full bg-gray-100 p-2"
              />
            </label>

            <label>
              <h3 className="text-xl font-semibold">Email</h3>

              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="name"
                placeholder="Email"
                className="w-full bg-gray-100 p-2"
              />
            </label>

            <label>
              <h3 className="text-xl font-semibold">Roll Number</h3>

              <input
                onChange={(e) => setRoll(e.target.value)}
                type="email"
                id="name"
                placeholder="Roll Number"
                className="w-full bg-gray-100 p-2"
              />
            </label>

            <label>
              <h3 className="text-xl font-semibold">Password</h3>

              <input
                onChange={(e) => setPassword(e.target.value)}
                type="email"
                id="name"
                placeholder="Roll Number"
                className="w-full bg-gray-100 p-2"
              />
            </label>

            <button
              type="submit"
              className="w-full bg-[#313131] text-xl text-white"
            >
              Create
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Principal;

"use client";

import React, { useState } from "react";

// import { UserButton, useUser } from "@clerk/nextjs";

import Link from "next/link";

const Principal = () => {
  // const { isSignedIn } = useUser();

  const [message, setMessage] = useState("");

  const [open, setOpen] = useState(false);

  const chat: any = [];

  const [getChat, setGetChat] = useState(chat);

  const handleMessage = (e: any) => {
    e.preventDefault();

    console.log(message);

    if (message !== "") {
      chat.push(message);
    }

    setGetChat(chat);
  };

  return (
    <main>
      <Header handleClick={handleClick} />
      <div className="flex transition-all">
        {/* Sidebar nav */}

        <nav
          className={`flex h-screen w-[15rem] flex-col gap-5 bg-blue-200 px-10 py-5 text-lg text-sky-500 duration-300 max-md:fixed ${
            open ? "max-md:translate-x-0" : "max-md:translate-x-[-100%]"
          }`}
        >
          <Link href="/projects">Discussions</Link>

          <Link href="/projects/participants">Project Memebers</Link>

          <Link href="/projects/Files">Files</Link>
        </nav>

        <div className="w-full px-5 pt-5">
          <h2 className="pb-5 text-4xl font-bold"> Discussions</h2>

          <div className="flex w-full gap-5 max-md:gap-2">
            <form action="post" onSubmit={handleMessage}>
              <input
                type="text"
                onChange={(e) => setMessage(e.target.value)}
                className="w-full rounded-full bg-gray-300 p-3 md:w-[60%] "
                placeholder="Type a your message "
              />

              <button
                className="rounded-full bg-[#313131] px-5 py-3 text-white"
                type="submit"
              >
                Add
              </button>
            </form>
          </div>

          <div className="flex w-full flex-col gap-7 py-10">
            {getChat.map((text: any) => {
              return (
                <>
                  <div
                    key={text}
                    className="rounded-full border border-gray-500 px-7 py-3"
                  >
                    <h2 className="text-xl">sender name :: {text}</h2>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Principal;

"use client";

import React, { useState } from "react";

// import { UserButton, useUser } from "@clerk/nextjs";

import Link from "next/link";
import Header from "@/components/Header";

const Principal = () => {
  // const { isSignedIn } = useUser();

  const [open, setOpen] = useState(false);

  const notes = ["first.pdf", "word.docx", "slide.ppt", "doc.txt"];

  const [searchNotes, setSearchNotes] = useState(notes);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleChange = (e: any) => {
    let newList = [];

    console.log(e.target.value);

    if (e.target.value === "") {
      newList = notes;
    } else {
      newList = notes.filter((name: string) => name.includes(e.target.value));
    }

    setSearchNotes(newList);
  };

  return (
    <main>
      <Header handleClick={handleClick} />
      <div className="flex transition-all">
        {/* Sidebar nav */}

        <nav
          className={`flex h-screen w-[15rem] flex-col gap-5 bg-[#313131] px-10 py-5 text-lg text-white duration-300 max-md:fixed  ${
            open ? "max-md:translate-x-0" : "max-md:translate-x-[-100%]"
          }`}
        >
          <Link href="/courses/notes">Notes</Link>

          <Link href="/courses/students">Student List</Link>

          <Link href="/courses/chat">Discussions</Link>
        </nav>

        <div className="w-full px-5 pt-5">
          <h2 className="pb-5 text-4xl font-bold"> Course Name</h2>

          <div className="flex w-full gap-5 max-md:gap-2">
            <input
              type="text"
              className="w-full rounded-full bg-gray-300 p-3 md:w-[60%] "
              placeholder="Type a course name"
              onChange={handleChange}
            />

            <Link
              href="#"
              className="rounded-full bg-[#313131] px-5 py-3 text-white"
            >
              Add
            </Link>
          </div>

          <div className="flex w-full flex-col gap-7 py-10">
            {searchNotes.map((notes: any) => {
              return (
                <>
                  <Link
                    href="#"
                    key={notes}
                    className="rounded-full border border-gray-500 px-7 py-3"
                  >
                    <h2 className="text-xl">{notes}</h2>

                    <div className="flex-col pt-5">
                      <h3>Uploaded on: notes.date</h3>
                    </div>
                  </Link>
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

"use client";

import React, { useState } from "react";

// import { UserButton, useUser } from "@clerk/nextjs";

import Link from "next/link";

const Principal = () => {
  // const { isSignedIn } = useUser();

  const [open, setOpen] = useState(false);

  const students = ["Abhiram", "DInesh", "Gowtam", "21r21a12h0"];

  const teachers = ["Indra", "Swathi", "Yashasvi"];

  const [searchStu, setSearchStu] = useState(students);

  const [searchTea, setSearchTea] = useState(teachers);

  return (
    <main>
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
          <h2 className="pb-5 text-4xl font-bold">Project Memebers</h2>

          <div className="flex w-full gap-5 max-md:gap-2"></div>

          <div className="flex w-full flex-col gap-7 py-10">
            <h1>Teachers</h1>

            {searchTea.map((teacher: any) => {
              return (
                <a
                  href="#"
                  key={teacher}
                  className="rounded-full border border-gray-500 px-7 py-3"
                >
                  <h2 className="text-xl">{teacher}</h2>
                </a>
              );
            })}
          </div>

          <div className="flex w-full flex-col gap-7 py-10">
            <h1>Students</h1>

            {searchStu.map((student: any) => {
              return (
                <a
                  href="#"
                  key={student}
                  className="rounded-full border border-gray-500 px-7 py-3"
                >
                  <h2 className="text-xl">{student}</h2>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Principal;

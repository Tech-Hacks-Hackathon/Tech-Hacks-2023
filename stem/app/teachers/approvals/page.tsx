"use client";

import Header from "@/components/Header";
import React, { useState } from "react";

const Approval = () => {
  const requests = ["Rollno1", "Rollno2", "Rollno3"];
  const [open, setOpen] = useState(false);

  const [searchStudents, setSearchStudents] = useState(requests);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleChange = (e: any) => {
    let newList = [];

    console.log(e.target.value);

    if (e.target.value === "") {
      newList = requests;
    } else {
      newList = requests.filter((name: string) =>
        name.includes(e.target.value)
      );
    }

    setSearchStudents(newList);
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
          <a href="/teachers">Courses</a>

          <a href="/teachers/projects">Projects</a>

          <a href="/teachers/approvals">Approvals</a>
        </nav>

        <div className="w-full px-5 pt-5">
          <h2 className="pb-5 text-4xl font-bold">Student Requests</h2>

          <div className="flex w-full gap-5 max-md:gap-2">
            <input
              type="text"
              className="w-full rounded-full bg-gray-300 p-3 md:w-[60%] "
              placeholder="Type a project name"
              onChange={handleChange}
            />

            <a
              href="#"
              className="rounded-full bg-sky-500 px-5 py-3 text-white"
            >
              Approve All
            </a>
          </div>

          <div className="flex w-full flex-col gap-7 py-10 transition-all ">
            {searchStudents.map((student: any) => {
              return (
                <a
                  href="#"
                  key={student}
                  className="flex items-center justify-between rounded-full border border-gray-500 px-7 py-3"
                >
                  <h2 className="text-xl">{student} </h2>

                  <div className="flex gap-5 py-3">
                    <button className="w-[6rem] p-1 rounded-2xl bg-sky-400 text-sm ">
                      Approve
                    </button>

                    <button className=" w-[6rem] p-1 rounded-2xl bg-stone-500 text-white">
                      {" "}
                      Decline
                    </button>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Approval;

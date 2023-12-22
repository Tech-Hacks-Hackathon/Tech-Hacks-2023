"use client";
import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";

const Principal = () => {
  const [open, setOpen] = useState(false);
  const students = ["Abhiram", "Indra", "Dinesh", "Gowtham"];
  const [searchCourses, setSearchCourses] = useState(students);

  const handleChange = (e: any) => {
    let newList = [];
    console.log(e.target.value);
    if (e.target.value === "") {
      newList = students;
    } else {
      newList = students.filter((name: string) =>
        name.includes(e.target.value)
      );
    }
    setSearchCourses(newList);
  };

  const handleClick = () => {
    setOpen(!open);
  };

  //   Have to complete this function

  return (
    <main>
      {/* header */}
      <Header handleClick={handleClick} />

      <div className="flex transition-all">
        {/* Sidebar nav */}
        <Navbar open={open} />
        <div className="w-full px-5 pt-5">
          <h2 className="pb-5 text-4xl font-bold">Teachers</h2>
          <div className="flex w-full gap-5 max-md:gap-2">
            <input
              type="text"
              className="w-full rounded-full bg-gray-300 p-3 md:w-[60%] "
              placeholder="Type a student name"
              onChange={handleChange}
            />
            <Link
              href="/principal/teachers/add"
              className="rounded-full bg-[#313131] px-5 py-3 text-white"
            >
              Add
            </Link>
          </div>
          <div className="flex w-full flex-col gap-7 py-10">
            {searchCourses.map((course: any) => {
              return (
                <Link
                  href="#"
                  key={course}
                  className="rounded-full border border-gray-500 px-7 py-3"
                >
                  <h2 className="text-xl">{course}</h2>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Principal;

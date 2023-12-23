"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";

const Principal = () => {
  const [open, setOpen] = useState(false);
  const [courses, setCourses] = useState([]);
  const [searchCourses, setSearchCourses] = useState([]);

  const getData = async () => {
    const res = await fetch("/api/courses");
    console.log(res);
    const resJson = await res.json();
    console.log(resJson.names);
    setCourses(resJson.names);
    setSearchCourses(resJson.names);
  };

  const handleChange = (e: any) => {
    let newList = [];
    if (e.target.value === "") {
      newList = courses;
    } else {
      newList = courses.filter((name: string) => name.includes(e.target.value));
    }
    setSearchCourses(newList);
    newList = [];
  };

  const handleClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <main>
      {/* header */}
      <Header handleClick={handleClick} />
      <div className="flex transition-all">
        {/* Sidebar nav */}
        <Navbar open={open} />
        <div className="w-full px-5 pt-5">
          <h2 className="pb-5 text-4xl font-bold">Courses</h2>
          <div className="flex w-full gap-5 max-md:gap-2">
            <input
              type="text"
              className="w-full rounded-full bg-gray-300 p-3 md:w-[60%] "
              placeholder="Type a student name"
              onChange={handleChange}
            />
            <Link
              href="/principal/add"
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

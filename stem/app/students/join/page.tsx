"use client";
import React, { useState } from "react";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";

const Join = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [teacher, setTeacher] = useState("");
  const [teacherId, setTeacherID] = useState("");

  const handleClick = () => {
    setOpen(!open);
  };

  //   Have to complete this function
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    console.log(name, code, teacher);

    const res = await fetch("/api/courses", {
      method: "POST",
      headers: { "Contact-type": "application/json" },
      body: JSON.stringify({ name, teacher, teacherId, code }),
    });

    const { msg } = await res.json();
    console.log(msg);

    router.push("/students");
  };

  return (
    <main>
      {/* header */}
      <Header handleClick={handleClick} />
      <div className="flex transition-all">
        {/* Sidebar nav */}
        <Navbar open={open} />
        <div className="flex w-full flex-col items-center justify-center px-5 pb-10">
          <h2 className="pb-5 text-4xl font-bold">Create a Course</h2>
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
              <h3 className="text-xl font-semibold">Teacher</h3>

              <input
                onChange={(e) => setTeacher(e.target.value)}
                type="text"
                id="name"
                placeholder="Email"
                className="w-full bg-gray-100 p-2"
              />
            </label>

            <label>
              <h3 className="text-xl font-semibold">Teacher ID</h3>

              <input
                onChange={(e) => setTeacherID(e.target.value)}
                type="text"
                id="name"
                placeholder="Email"
                className="w-full bg-gray-100 p-2"
              />
            </label>

            <label>
              <h3 className="text-xl font-semibold">Subject Code</h3>

              <input
                onChange={(e) => setCode(e.target.value)}
                type="text"
                id="name"
                placeholder="Roll Number"
                className="w-full bg-gray-100 p-2"
              />
            </label>

            <button
              type="submit"
              className="w-full bg-[#313131] text-xl text-white"
            >
              Request
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Join;

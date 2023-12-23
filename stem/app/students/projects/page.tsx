"use client";

import React, { useState } from "react";

const Projects = () => {
  const projects = ["Project1", "project2", "project3"];

  const [searchProjects, setSearchProjects] = useState(projects);

  const handleChange = (e: any) => {
    let newList = [];

    console.log(e.target.value);

    if (e.target.value === "") {
      newList = projects;
    } else {
      newList = projects.filter((name: string) =>
        name.includes(e.target.value)
      );
    }

    setSearchProjects(newList);
  };

  return (
    <main>
      <div className="flex transition-all">
        {/* Sidebar nav */}

        <nav
          className={`flex h-screen w-[15rem] flex-col gap-5 bg-blue-200 px-10 py-5 text-lg text-sky-500 duration-300 max-md:fixed `}
        >
          <a href="/students">Courses</a>

          <a href="/students/projects">Projects</a>

          <a href="/students/discussion">Discussions</a>
        </nav>

        <div className="w-full px-5 pt-5">
          <h2 className="pb-5 text-4xl font-bold">My Projects</h2>

          <div className="flex w-full gap-5 max-md:gap-2">
            <input
              type="text"
              className="w-full rounded-full bg-gray-300 p-3 md:w-[60%] "
              placeholder="Type a project name"
              onChange={handleChange}
            />

            <a
              href="#"
              className="rounded-full bg-[#313131] px-5 py-3 text-white"
            >
              Add
            </a>
          </div>

          <div className="flex w-full flex-col gap-7 py-10">
            {searchProjects.map((project: any) => {
              return (
                <a
                  href="#"
                  key={project}
                  className="rounded-full border border-gray-500 px-7 py-3"
                >
                  <h2 className="text-xl">{project}</h2>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Projects;

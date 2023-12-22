import Link from "next/link";
import React from "react";

const Navbar = ({ open }: any) => {
  return (
    <nav
      className={`flex h-screen w-[15rem] flex-col gap-5 bg-[#313131] px-10 py-5 text-lg text-white duration-300 max-md:fixed  ${
        open ? "max-md:translate-x-0" : "max-md:translate-x-[-100%]"
      }`}
    >
      <Link href="/principal">Courses</Link>
      <Link href="/principal/students">Students</Link>
      <Link href="/principal/teachers">Teachers</Link>
    </nav>
  );
};

export default Navbar;

import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

const Header = ({ handleClick }: any) => {
  const { isSignedIn } = useUser();
  return (
    <header className="flex justify-between border-b border-gray-500 py-5 pl-5 pr-8 md:px-10">
      <h1 className="flex items-center gap-3 text-3xl font-bold">
        <button onClick={handleClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="25"
            width="25"
            viewBox="0 0 448 512"
            className="md:hidden"
          >
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>
        </button>

        <a href="/">Logo</a>
      </h1>
      {isSignedIn ? (
        <div className="flex items-center gap-3 sm:gap-10">
          <UserButton
            afterSignOutUrl="/sign-in"
            appearance={{
              elements: {
                avatarBox: "h-11 w-11",
              },
              variables: {
                colorPrimary: "#ff7000",
              },
            }}
          />
        </div>
      ) : (
        <div className="text-xl underline">
          <Link href="/sign-in">sign-in</Link>
        </div>
      )}
    </header>
  );
};

export default Header;

"use client";

import React from "react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { Session } from "next-auth";

const SignOut = ({ session }: { session: Session }) => {
  return (
    <div>
      <Link
        href={`/user/${session?.user?.name}`}
        className="text-xl font-semibold text-gray-800 hover:text-gray-600 transition-colors"
      >
        {session.user?.name}
      </Link>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          await signOut();
        }}
        className="flex flex-col items-center gap-6"
      >
        <button
          type="submit"
          className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 text-white px-6 py-3 rounded-lg shadow-md hover:from-gray-700 hover:via-gray-600 hover:to-gray-500 transition-all duration-300 ease-in-out"
        >
          Log Out
        </button>
      </form>
    </div>
  );
};

export default SignOut;

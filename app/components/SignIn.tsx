"use client";

import React from "react";
import { signIn } from "next-auth/react";

const SignIn = () => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        signIn("google");
      }}
      className="flex flex-col items-center gap-6"
    >
      <button
        type="submit"
        className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white px-6 py-3 rounded-lg shadow-md hover:from-gray-700 hover:via-gray-600 hover:to-gray-500 transition-all duration-300 ease-in-out"
      >
        Sign In with Google
      </button>
    </form>
  );
};

export default SignIn;

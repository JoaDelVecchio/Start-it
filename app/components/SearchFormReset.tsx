"use client";
import React from "react";
import Link from "next/link";
import { FaTimes } from "react-icons/fa";

const SearchFormReset = () => {
  const reset = () => {
    const form = document.querySelector("#search-form") as HTMLFormElement;
    if (form) form.reset();
  };
  return (
    <button
      type="reset"
      onClick={reset}
      className="bg-white text-gray-900 px-4 py-2 rounded-md shadow-sm flex items-center gap-2 text-base font-medium hover:bg-gray-200 transition-all duration-300 ease-in-out"
    >
      <Link href="/">
        <FaTimes className="text-gray-600" />
      </Link>
    </button>
  );
};

export default SearchFormReset;

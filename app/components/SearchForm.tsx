import React from "react";
import Form from "next/form";
import SearchFormReset from "./SearchFormReset";
import { FaSearch } from "react-icons/fa";

const SearchForm = ({ query }: { query?: string }) => {
  return (
    <Form
      id="search-form"
      action="/"
      scroll={false}
      className="mt-8 bg-gray-900 rounded-lg shadow-md flex items-center px-4 gap-3 py-3 w-full max-w-xl mx-auto"
    >
      <input
        name="query"
        defaultValue={query}
        placeholder="Search Startups"
        className="flex-grow bg-gray-800 text-white placeholder-gray-500 px-4 py-2 rounded-md text-base border-none focus:outline-none hover:bg-gray-700 transition-all duration-300 ease-in-out"
      />
      <div className="flex gap-2 ">
        {query && <SearchFormReset />}
        <button
          type="submit"
          className="bg-white text-gray-900 px-4 py-2 rounded-md shadow-sm flex items-center text-base font-medium hover:bg-gray-200 transition-all duration-300 ease-in-out"
        >
          <FaSearch className="text-gray-600" />
        </button>
      </div>
    </Form>
  );
};

export default SearchForm;

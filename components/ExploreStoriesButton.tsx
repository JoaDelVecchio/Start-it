"use client";
import React from "react";

const ExploreStoriesButton = () => {
  return (
    <button
      onClick={() => {
        document.getElementById("startupPosts")?.scrollIntoView({
          behavior: "smooth",
        });
      }}
      className="bg-gray-900 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-700 transition-all duration-300 ease-in-out"
    >
      Explore Stories
    </button>
  );
};

export default ExploreStoriesButton;

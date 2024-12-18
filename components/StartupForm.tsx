"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const formatDate = (date: string) => new Date(date).toLocaleDateString();

type Startup = {
  _id: number;
  _createdAt: string;
  views: string;
  founder: string;
  founderImage: string;
  description: string;
  image: string;
  category: string;
  title: string;
  startupStory: string;
  founderStory: string;
};

const StartupForm = ({
  addStartup,
}: {
  addStartup: (startup: Startup) => void;
}) => {
  const [formData, setFormData] = useState({
    title: "",
    views: "",
    founder: "",
    founderImage: "",
    description: "",
    image: "",
    category: "",
    startupStory: "",
    founderStory: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addStartup({
      ...formData,
      _id: Date.now(), // Generate a unique ID based on timestamp
      _createdAt: new Date().toISOString(),
    });
    setFormData({
      title: "",
      views: "",
      founder: "",
      founderImage: "",
      description: "",
      image: "",
      category: "",
      startupStory: "",
      founderStory: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-4 border border-gray-200 rounded-lg"
    >
      <div>
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700"
        >
          Title
        </label>
        <input
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Startup Title"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div>
        <label
          htmlFor="views"
          className="block text-sm font-medium text-gray-700"
        >
          Views
        </label>
        <input
          id="views"
          name="views"
          value={formData.views}
          onChange={handleChange}
          placeholder="Number of Views"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div>
        <label
          htmlFor="founder"
          className="block text-sm font-medium text-gray-700"
        >
          Founder
        </label>
        <input
          id="founder"
          name="founder"
          value={formData.founder}
          onChange={handleChange}
          placeholder="Founder Name"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div>
        <label
          htmlFor="founderImage"
          className="block text-sm font-medium text-gray-700"
        >
          Founder Image URL
        </label>
        <input
          id="founderImage"
          name="founderImage"
          value={formData.founderImage}
          onChange={handleChange}
          placeholder="Founder Image URL"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div>
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700"
        >
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Startup Description"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        ></textarea>
      </div>
      <div>
        <label
          htmlFor="image"
          className="block text-sm font-medium text-gray-700"
        >
          Image URL
        </label>
        <input
          id="image"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Startup Image URL"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div>
        <label
          htmlFor="category"
          className="block text-sm font-medium text-gray-700"
        >
          Category
        </label>
        <input
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="Category"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
      >
        Add Startup
      </button>
    </form>
  );
};

const PostCard = ({ post }: { post: Startup }) => {
  return (
    <li className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 flex flex-col h-full transition-transform transform hover:scale-105 hover:shadow-xl">
      <div className="flex items-center justify-between px-4 py-3 bg-gray-50">
        <span className="text-sm text-gray-500">
          {formatDate(post._createdAt)}
        </span>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500 flex items-center gap-1">
            👀 {post.views}
          </span>
          <Image
            src={post.founderImage}
            alt={post.founder}
            width={40}
            height={40}
            className="rounded-full border border-gray-300"
          />
        </div>
      </div>
      <div className="relative w-full h-40">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="rounded-t-lg transition-transform transform hover:scale-110 object-cover"
        />
      </div>
      <div className="flex-grow px-4 py-3">
        <Link
          href={`/founders/${post._id}`}
          className="block text-sm text-gray-700 mb-1 hover:text-gray-900 transition-colors"
        >
          {post.founder}
        </Link>
        <Link
          href={`/startup/${post._id}`}
          className="font-bold text-lg text-gray-900 mb-2 hover:underline"
        >
          {post.title}
        </Link>
        <p className="text-sm text-gray-600 line-clamp-3 hover:text-gray-800 transition-colors">
          {post.description}
        </p>
      </div>
      <div className="flex justify-between items-center px-4 py-3 bg-gray-50">
        <span className="text-xs bg-gray-100 px-3 py-1 rounded-full text-gray-600 hover:bg-gray-200 transition-colors">
          {post.category}
        </span>
        <Link
          href={`/startup/${post._id}`}
          className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-700 transition-all duration-300"
        >
          Details
        </Link>
      </div>
    </li>
  );
};

const StartupList = () => {
  const [startups, setStartups] = useState<Startup[]>([]);

  const addStartup = (startup: Startup) => {
    setStartups((prev) => [...prev, startup]);
  };

  return (
    <div className="space-y-6">
      <StartupForm addStartup={addStartup} />
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {startups.map((startup) => (
          <PostCard key={startup._id} post={startup} />
        ))}
      </ul>
    </div>
  );
};

export default StartupList;

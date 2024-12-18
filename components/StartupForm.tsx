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
      className="space-y-6 bg-black text-white p-6 rounded-lg shadow-lg"
    >
      <h2 className="text-2xl font-semibold mb-4">Add New Startup</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { label: "Title", name: "title", placeholder: "Startup Title" },
          { label: "Views", name: "views", placeholder: "Number of Views" },
          { label: "Founder", name: "founder", placeholder: "Founder Name" },
          {
            label: "Founder Image URL",
            name: "founderImage",
            placeholder: "Founder Image URL",
          },
          {
            label: "Description",
            name: "description",
            placeholder: "Startup Description",
          },
          {
            label: "Image URL",
            name: "image",
            placeholder: "Startup Image URL",
          },
          { label: "Category", name: "category", placeholder: "Category" },
        ].map(({ label, name, placeholder }) => (
          <div key={name}>
            <label
              htmlFor={name}
              className="block text-sm font-medium text-gray-300"
            >
              {label}
            </label>
            <input
              id={name}
              name={name}
              value={(formData as any)[name]}
              onChange={handleChange}
              placeholder={placeholder}
              className="mt-1 block w-full p-3 border border-gray-700 bg-black text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
            />
          </div>
        ))}
      </div>
      <button
        type="submit"
        className="w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
      >
        Add Startup
      </button>
    </form>
  );
};

const PostCard = ({ post }: { post: Startup }) => {
  return (
    <li className="bg-black text-white rounded-lg shadow-md border border-gray-700 overflow-hidden transition-transform transform hover:scale-105">
      <div className="px-6 py-4 border-b border-gray-700">
        <span className="text-xs text-gray-500">
          {formatDate(post._createdAt)}
        </span>
        <div className="flex items-center gap-3 mt-2">
          <Image
            src={post.founderImage}
            alt={post.founder}
            width={40}
            height={40}
            className="rounded-full border border-gray-600"
          />
          <span className="text-sm text-gray-300">👀 {post.views}</span>
        </div>
      </div>
      <div className="relative w-full h-40">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover rounded-t-lg"
        />
      </div>
      <div className="p-6">
        <Link href={`/founders/${post._id}`}>
          <h3 className="text-lg font-medium text-white hover:text-gray-300">
            {post.founder}
          </h3>
        </Link>
        <Link href={`/startup/${post._id}`}>
          <h2 className="text-xl font-semibold text-white hover:underline mt-1">
            {post.title}
          </h2>
        </Link>
        <p className="text-sm text-gray-400 mt-3 line-clamp-3">
          {post.description}
        </p>
      </div>
      <div className="px-6 py-4 bg-gray-800 border-t border-gray-700 flex justify-between items-center">
        <span className="text-xs bg-gray-900 px-3 py-1 rounded-full text-gray-300">
          {post.category}
        </span>
        <Link
          href={`/startup/${post._id}`}
          className="px-4 py-2 bg-white text-black rounded-md text-sm font-medium hover:bg-gray-200"
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
    <div className="space-y-12">
      <StartupForm addStartup={addStartup} />
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {startups.map((startup) => (
          <PostCard key={startup._id} post={startup} />
        ))}
      </ul>
    </div>
  );
};

export default StartupList;

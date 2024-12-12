import React from "react";

type Post = {
  _createdAt: string;
  views: string;
  author: string;
  _id: number;
  description: string;
  image: string;
  category: string;
  title: string;
};

const PostCard = ({ post }: { post: Post }) => {
  return (
    <li
      key={post._id}
      className="bg-white shadow-md rounded-lg p-4 text-gray-800"
    >
      <img
        src={post.image}
        alt={post.title}
        className="h-24 w-24 mx-auto rounded-full mb-4"
      />
      <h3 className="font-bold text-lg mb-2">{post.title}</h3>
      <p className="text-sm text-gray-600 mb-2">{post.description}</p>
      <span className="block text-sm text-gray-500">Author: {post.author}</span>
      <span className="block text-sm text-gray-500">Views: {post.views}</span>
      <span className="block text-sm text-gray-500">
        Created: {post._createdAt}
      </span>
      <span className="block text-sm text-gray-500">
        Category: {post.category}
      </span>
    </li>
  );
};

export default PostCard;

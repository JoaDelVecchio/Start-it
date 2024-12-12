import React from "react";
import Image from "next/image";

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
    <li className="bg-gray-900 mt-5 text-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center p-6 transition-transform transform hover:scale-105">
      <Image
        src={post.image}
        width={200}
        height={200}
        alt={post.title}
        className="h-28 w-28 rounded-full object-cover mb-4"
      />
      <h3 className="font-bold text-xl text-gray-100 mb-2">{post.title}</h3>
      <p className="text-sm text-gray-400 text-center mb-4">
        {post.description}
      </p>
      <div className="w-full border-t border-gray-700 pt-4 mt-4 flex flex-col items-start text-sm">
        <span className="text-gray-500">
          Author: <span className="text-gray-300">{post.author}</span>
        </span>
        <span className="text-gray-500">
          Views: <span className="text-gray-300">{post.views}</span>
        </span>
        <span className="text-gray-500">
          Created: <span className="text-gray-300">{post._createdAt}</span>
        </span>
        <span className="text-gray-500">
          Category: <span className="text-gray-300">{post.category}</span>
        </span>
      </div>
    </li>
  );
};

export default PostCard;

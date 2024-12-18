import React from "react";
import Image from "next/image";
import { formatDate } from "@/utils";
import Link from "next/link";
import { Post } from "@/types";

const PostCard = ({ post }: { post: Post }) => {
  return (
    <li className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 flex flex-col h-full transition-transform transform hover:scale-105 hover:shadow-xl">
      {/* Top Section */}
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

      {/* Image Section */}
      <div className="relative w-full h-40">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="rounded-t-lg transition-transform transform hover:scale-110 object-cover"
        />
      </div>

      {/* Content Section */}
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

      {/* Footer */}
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

export default PostCard;

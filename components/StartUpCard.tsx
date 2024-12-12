import React from "react";
import Image from "next/image";
import { formatDate } from "@/utils";
import Link from "next/link";
import { Post } from "@/types";

const PostCard = ({ post }: { post: Post }) => {
  return (
    <li className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 flex flex-col h-full">
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
            alt={post.author}
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>
      </div>

      {/* Image Section */}
      <div className="relative w-full h-40">
        <Image
          src={post.image}
          alt={post.title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>

      {/* Content Section */}
      <div className="flex-grow px-4 py-3">
        <Link href={`/users/${post._id}`}>
          <h3 className="text-sm text-gray-700 mb-1">{post.author}</h3>
        </Link>
        <Link href={`/startup/${post._id}`}>
          <h3 className="font-bold text-lg text-gray-900 mb-2">{post.title}</h3>
        </Link>
        <p className="text-sm text-gray-600 line-clamp-3">{post.description}</p>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center px-4 py-3 bg-gray-50">
        <span className="text-xs bg-gray-100 px-3 py-1 rounded-full text-gray-600">
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

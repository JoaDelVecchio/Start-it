import React from "react";
import Image from "next/image";
import { formatDate } from "@/utils";
import Link from "next/link";

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
    <li className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 w-full max-w-4xl mx-auto">
      {/* Top Section */}
      <div className="flex items-center justify-between px-6 py-4">
        <span className="text-sm text-gray-500">
          {formatDate(post._createdAt)}
        </span>
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-500 flex items-center gap-1">
            👀 {post.views}
          </span>
          {/* Placeholder User Image */}
          <Image
            src="https://via.placeholder.com/40"
            alt="Author"
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-4">
        <Link href={`/users/${post._id}`}>
          <h3 className="text-sm text-gray-700 mb-1">{post.author}</h3>
        </Link>
        <Link href={`/startup/${post._id}`}>
          <h3 className="font-bold text-2xl text-gray-900 mb-3">
            {post.title}
          </h3>
        </Link>
        <p className="text-base text-gray-600 leading-relaxed line-clamp-3">
          {post.description}
        </p>
      </div>

      {/* Image */}
      <div className="w-full overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          width={800}
          height={450}
          className="object-cover w-full h-auto max-h-64"
        />
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center px-6 py-4">
        <span className="text-xs bg-gray-100 px-3 py-1 rounded-full text-gray-600">
          {post.category}
        </span>
        <Link
          href={`/startup/${post._id}`}
          className="bg-gray-900 text-white px-5 py-2 rounded-lg text-sm hover:bg-gray-700 transition-all duration-300"
        >
          Details
        </Link>
      </div>
    </li>
  );
};

export default PostCard;

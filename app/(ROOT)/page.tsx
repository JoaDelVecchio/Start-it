import Image from "next/image";
import Link from "next/link";
import SearchForm from "../../components/SearchForm";
import PostCard from "@/components/PostCard";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: "Yesterday",
      views: "199",
      author: "Jorge raid",
      _id: 1,
      description: "Pepe is the best memecoins",
      image: "https://s2.coinmarketcap.com/static/img/coins/200x200/24478.png",
      category: "Memecoin",
      title: "Pepe the frog",
    },
  ];

  return (
    <main className="flex flex-col items-center min-h-screen py-10 px-6 bg-gray-50 text-gray-800 border-t border-gray-200 shadow-inner">
      <section className="max-w-4xl text-center">
        <h1 className="text-4xl font-bold text-gray-900 font-sans mb-4">
          Start It
        </h1>
        <p className="text-lg font-light leading-relaxed text-gray-700">
          Discover inspiring stories from other startups, share your journey,
          and learn from the successes and challenges of entrepreneurs just like
          you. Join a community where every story fuels the next big idea.
        </p>
        <div className="flex justify-center gap-4 mt-8">
          <button className="bg-gray-900 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-700 transition-all duration-300 ease-in-out">
            Explore Stories
          </button>
          <Link
            href="/startup/create"
            className="bg-gray-200 text-gray-900 px-6 py-3 rounded-lg shadow-md hover:bg-gray-300 transition-all duration-300 ease-in-out"
          >
            <span>Share Your Story</span>
          </Link>
        </div>
      </section>
      <section>
        <SearchForm query={query} />
      </section>
      <section>
        <p>{query ? "Results for" + " " + query : "All Start Ups"}</p>
        <ul className="grid grid-cols-3 gap-4">
          {posts.length > 0 ? (
            posts.map((post) => <PostCard key={post._id} post={post} />)
          ) : (
            <p className="col-span-3 text-center text-gray-500">Empty</p>
          )}
        </ul>
      </section>
    </main>
  );
}

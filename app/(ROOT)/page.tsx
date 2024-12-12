import Link from "next/link";
import SearchForm from "../../components/SearchForm";
import PostCard from "@/components/StartUpCard";
import { Post } from "@/types";
import ExploreStoriesButton from "@/components/ExploreStoriesButton";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  let startupsData: Post[] = [];
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/startups`, {
      next: { revalidate: 10 },
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch startups: ${res.statusText}`);
    }
    startupsData = await res.json();
  } catch (error) {
    console.error(error);
    startupsData = [];
  }

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
          <ExploreStoriesButton />
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
      <section id="startupPosts" className="w-full max-w-5xl">
        <p className=" text-md text-center text-opacity-70 font-bold text-gray-900 font-sans mt-11 mb-7">
          {query ? "Results for" + " " + query + "..." : "All Startups"}
        </p>
        <ul className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5">
          {startupsData.length > 0 ? (
            startupsData
              .filter((post: Post) =>
                !query
                  ? true
                  : post.title.toLowerCase().includes(query?.toLowerCase())
              )
              .map((post: Post) => <PostCard key={post._id} post={post} />)
          ) : (
            <p className="col-span-full text-center text-gray-500">
              Try again in a few minutes, we are working on something!
            </p>
          )}
        </ul>
      </section>
    </main>
  );
}

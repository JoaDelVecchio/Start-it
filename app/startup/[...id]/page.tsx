import React from "react";
import { Post } from "@/types";

const Startup = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  let startupData: Post[] = [];
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/startups`);

    if (!res.ok) {
      throw new Error("Error fetching data");
    }
    startupData = await res.json();
  } catch (error) {
    console.error("Error fetching data", error);
    startupData = [];
  }

  const startupFound = startupData.find(
    (startup) => startup._id === Number(id)
  );
  if (!startupFound) {
    console.error("Startup does not exist");
  }

  return <div>{startupFound?.title}</div>;
};

export default Startup;

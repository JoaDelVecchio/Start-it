import StartupForm from "@/components/StartupForm";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import React from "react";

const Create = async () => {
  const session = await auth();

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-6 py-12">
      <div className="w-full max-w-2xl bg-gray-900 p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Submit Your Startup
        </h1>
        <p className="text-gray-400 text-center mb-8">
          Share your startup story with us and inspire others in the community.
        </p>
        <StartupForm />
      </div>
    </section>
  );
};

export default Create;

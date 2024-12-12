import React from "react";
import Link from "next/link";
import SignIn from "@/app/components/SignIn";
import SignOut from "@/app/components/SignOut";
import { auth } from "@/auth";

const AuthStatus = async () => {
  const session = await auth();

  return (
    <div className="flex justify-center items-center gap-10">
      {session?.user ? (
        <div className="flex justify-center items-center gap-10">
          <SignOut session={session} />
        </div>
      ) : (
        <SignIn />
      )}
    </div>
  );
};

export default AuthStatus;

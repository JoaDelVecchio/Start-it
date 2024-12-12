import React from "react";
import Image from "next/image";
import AuthStatus from "@/components/AuthStatus";
import { SessionProvider } from "next-auth/react";

const Navbar = () => {
  return (
    <header className="px-5 py-4 bg-gradient-to-b from-gray-100 to-gray-50 shadow-lg">
      <nav className="flex justify-between items-center">
        <Image
          src="/logo.png"
          alt="logo"
          width={60}
          height={60}
          className="rounded-full"
        />
        <SessionProvider>
          <AuthStatus />
        </SessionProvider>
      </nav>
    </header>
  );
};

export default Navbar;

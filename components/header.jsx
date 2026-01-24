"use client";
import Image from "next/image";
import Link from "next/link";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { Authenticated,Unauthenticated } from "convex/react";
import { BarLoader } from "react-spinners";
export default function Header() {
  return (
    <>
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="logo"
            width={100}
            height={100}
            priority
            />
        </Link>
            {/* Search desktop */}
           {/* Right side actions */}
           <div className="flex items-center">
            <Authenticated>
              {/* Create event */}

              <UserButton />
            </Authenticated>


            <Unauthenticated>
              <SignInButton mode="modal">
                <Button size="sm">Sign In</Button>
              </SignInButton>
            </Unauthenticated>
         
           </div>
      </div>
      {/* mobile search */}
      {/* Loader */}
      <div className="absolute bottum-0 left-0 w-full">
        <BarLoader width="100%" color="#a855f7"/>
      </div>
    </nav>
    {/* Modals */}
    </>
  );
}

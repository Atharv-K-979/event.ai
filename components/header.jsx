"use client";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <>
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justif  y-between">
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
      </div>
      {/* mobile search */}
    </nav>
    {/* Modals */}
    </>
  );
}

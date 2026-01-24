// // "use client";
// // import Image from "next/image";
// // import Link from "next/link";
// // import { SignInButton, UserButton } from "@clerk/nextjs";
// // import { Button } from "./ui/button";
// // import { Authenticated,Unauthenticated } from "convex/react";
// // import { BarLoader } from "react-spinners";
// // import { useStoreUserEffect } from "../hooks/use-store-user";   


// // export default function Header() {
// //   const {isLoading} = useStoreUserEffect(); 
// //   return (
// //     <>
// //     <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b">
// //       <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
// //         <Link href="/" className="flex items-center">
// //           <Image
// //             src="/logo.png"
// //             alt="logo"
// //             width={100}
// //             height={100}
// //             priority
// //             />
// //         </Link>
// //             {/* Search desktop */}
// //            {/* Right side actions */}
// //            <div className="flex items-center">
// //             <Authenticated>
// //               {/* Create event */}

// //               <UserButton />
// //             </Authenticated>


// //             <Unauthenticated>
// //               <SignInButton mode="modal">
// //                 <Button size="sm">Sign In</Button>
// //               </SignInButton>
// //             </Unauthenticated>

// //            </div>
// //       </div>
// //       {/* mobile search */}
// //       {/* Loader */}
// //       {isLoading && <div className="absolute bottum-0 left-0 w-full">
// //         <BarLoader width="100%" color="#a855f7"/>
// //       </div>}
// //     </nav>
// //     {/* Modals */}
// //     </>
// //   );
// // }



// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { SignInButton, UserButton, SignedIn, SignedOut } from "@clerk/nextjs";
// import { Button } from "./ui/button";
// import { BarLoader } from "react-spinners";
// import { useStoreUserEffect } from "../hooks/use-store-user";
// import React,{useState,useEffect} from "react";
// import { Building, Plus, User, Ticket } from "lucide-react";

// export default function Header() {
//   const { isLoading } = useStoreUserEffect();
//   const [showUpgradeModal,setShowUpgradeModal]=useState(false);
//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b">
//       <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
//         <Link href="/" className="flex items-center">
//           <Image src="/logo.png" alt="logo" width={44} height={44} priority />
//         </Link>

//         <div className="flex items-center">
//           <Button variant={"ghost"} size="sm" onClick={()=>setShowUpgradeModal(true)}>Pricing</Button>
//           <Button variant={"ghost"} size="sm" asChild className={"mr-2"}>
//             <Link href="/explore">Explore</Link>
//           </Button>
//           <SignedIn>
//             <Link href="/create-event">
//             <Button className="flex gap-2 mr-4">
//               <Plus className="w-4 h-4"/>
//               <span className="hidden sm:inline">Create Event</span>
//             </Button>
//             </Link>
//             <UserButton>
//               <UserButton.MenuItems>
//                 <UserButton.Action label="My Tickets" labelIcon={<Ticket size={16}/>} href="/my-tickets"/>
//                 <UserButton.Action label="My Events" labelIcon={<Building size={16}/>} href="/my-events"/>

//                 <UserButton.Action label="manageAccount" />
//               </UserButton.MenuItems>
//               </UserButton>
//           </SignedIn>

//           <SignedOut>
//             <SignInButton mode="modal">
//               <Button size="sm">Sign In</Button>
//             </SignInButton>
//           </SignedOut>
//         </div>
//       </div>

//       {isLoading && (
//         <div className="absolute bottom-0 left-0 w-full">
//           <BarLoader width="100%" color="#a855f7" />
//         </div>
//       )}
//     </nav>
//   );
// }



"use client";

import Image from "next/image";
import Link from "next/link";
import { SignInButton, UserButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { BarLoader } from "react-spinners";
import { useStoreUserEffect } from "../hooks/use-store-user";
import React, { useState } from "react";
import { Building, Plus, Ticket } from "lucide-react";

export default function Header() {
  const { isLoading } = useStoreUserEffect();
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="logo" width={44} height={44} priority />
        </Link>

        <div className="flex items-center">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowUpgradeModal(true)}
          >
            Pricing
          </Button>

          <Button variant="ghost" size="sm" asChild className="mr-2">
            <Link href="/explore">Explore</Link>
          </Button>

          <SignedIn>
            <Link href="/create-event">
              <Button className="flex gap-2 mr-4">
                <Plus className="w-4 h-4" />
                <span className="hidden sm:inline">Create Event</span>
              </Button>
            </Link>

            <UserButton>
              <UserButton.MenuItems>
                <UserButton.Action
                  label="My Tickets"
                  labelIcon={<Ticket size={16} />}
                  href="/my-tickets"
                />

                <UserButton.Action
                  label="My Events"
                  labelIcon={<Building size={16} />}
                  href="/my-events"
                />

                {/* Clerk built-in action — MUST be exact */}
                <UserButton.Action label="manageAccount" />
              </UserButton.MenuItems>
            </UserButton>

          </SignedIn>

          <SignedOut>
            <SignInButton mode="modal">
              <Button size="sm">Sign In</Button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>

      {isLoading && (
        <div className="absolute bottom-0 left-0 w-full">
          <BarLoader width="100%" color="#a855f7" />
        </div>
      )}
    </nav>
  );
}

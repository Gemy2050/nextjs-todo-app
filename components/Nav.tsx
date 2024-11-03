import { SignedIn, UserButton } from "@clerk/nextjs";
import React from "react";
import { ModeToggle } from "./ModeToggle";

export default function Nav() {
  return (
    <nav className="container pt-5 px-5 mx-auto flex justify-between items-center">
      <ModeToggle />

      <SignedIn>
        <UserButton />
      </SignedIn>
    </nav>
  );
}

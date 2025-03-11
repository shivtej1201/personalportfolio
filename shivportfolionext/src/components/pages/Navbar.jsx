"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";

export function NavbarDemo() {
  return (
    <div
      style={{ backgroundColor: "#C4DFE6" }}
      className="relative w-full flex items-center justify-center"
    >
      <Navbar className="top-2" />
      <p className="text-black dark:text-white"></p>
    </div>
  );
}

function Navbar({ className }) {
  const [active, setActive] = useState(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="About">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/">Education</HoveredLink>
            <HoveredLink href="/">Experience</HoveredLink>
            <HoveredLink href="/">Portfolio</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Projects">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Algochurn"
              href="/"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Tailwind Master Kit"
              href="/"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Moonbeam"
              href="/"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Rogue"
              href="/"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem>
        <MenuItem active={active} item="Contact" href="/contact"></MenuItem>
      </Menu>
    </div>
  );
}

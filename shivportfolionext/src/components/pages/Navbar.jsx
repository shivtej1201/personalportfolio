"use client";
import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
  IconX
} from "@tabler/icons-react";

// Modified MenuItem component to accept onClick handler
export function MenuItem({ active, item, href, onClick }) {
  return (
    <li>
      <a
        href={href}
        onClick={onClick ? (e) => {
          e.preventDefault();
          onClick();
        } : undefined}
        className={`px-4 py-2 mx-2 rounded-md text-sm font-medium transition-colors ${
          active
            ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-50"
            : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-50"
        }`}
      >
        {item}
      </a>
    </li>
  );
}

export function NavbarWithContactPopup() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  
  // Determine which nav item is active
  const activeItem = "Contact"; // This would normally be set based on the current route
  
  const openContactForm = () => {
    setIsContactOpen(true);
  };
  
  const closeContactForm = () => {
    setIsContactOpen(false);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      firstname: e.target.firstname.value,
      lastname: e.target.lastname.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    const response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    alert(result.message);
    closeContactForm();
  };

  return (
    <>
      {/* Navigation Menu */}
      <nav className="bg-white dark:bg-gray-900 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                {/* Your logo here */}
                <span className="text-xl font-bold">Portfolio</span>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <ul className="flex">
                  <MenuItem active={activeItem === "Home"} item="Home" href="/" />
                  <MenuItem active={activeItem === "About"} item="About" href="/about" />
                  <MenuItem active={activeItem === "Projects"} item="Projects" href="/projects" />
                  <MenuItem 
                    active={activeItem === "Contact"} 
                    item="Contact" 
                    href="/contact"
                    onClick={openContactForm}
                  />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Contact Form Popup */}
      {isContactOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="max-w-md w-full mx-auto rounded-2xl p-6 shadow-input bg-white dark:bg-black relative animate-fadeIn">
            <button 
              onClick={closeContactForm}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <IconX size={24} />
            </button>
            
            <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
              Get In Touch
            </h2>
            <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
              Send me a message and I'll get back to you as soon as possible.
            </p>
            
            <form className="my-8" onSubmit={handleSubmit}>
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                <LabelInputContainer>
                  <Label htmlFor="firstname">First name</Label>
                  <Input id="firstname" placeholder="Shivtej" type="text" />
                </LabelInputContainer>
                <LabelInputContainer>
                  <Label htmlFor="lastname">Last name</Label>
                  <Input id="lastname" placeholder="Sonawane" type="text" />
                </LabelInputContainer>
              </div>
              
              <LabelInputContainer className="mb-4">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" placeholder="portfolio@gmail.com" type="email" />
              </LabelInputContainer>
              
              <LabelInputContainer className="mb-4">
                <Label htmlFor="message">Message</Label>
                <Input
                  id="message"
                  placeholder="Enter Your Message"
                  type="text"
                  className="h-24"
                />
              </LabelInputContainer>

              <button
                className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                type="submit"
              >
                Send Message &rarr;
                <BottomGradient />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
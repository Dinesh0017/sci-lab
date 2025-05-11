"use client";

import { useState, useEffect } from "react";
import {
  HomeIcon,
  BeakerIcon,
  BoltIcon,
  InformationCircleIcon,
  Bars3Icon,
  XMarkIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { name: "Home", icon: HomeIcon, path: "/" },
  { name: "Physics", icon: BoltIcon, path: "/physics" },
  { name: "Chemistry", icon: BeakerIcon, path: "/chemistry" },
  { name: "ICT", icon: ComputerDesktopIcon, path: "/ict" },
  { name: "About", icon: InformationCircleIcon, path: "/about" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  // Lock scroll when menu is open (optional UX improvement)
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setOpen(!open)}
          className="bg-primary p-2 rounded-md text-white"
        >
          {open ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white border-r shadow-lg z-40 transform transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        {/* Logo Section */}
        <div className="flex items-center justify-center py-4 border-b">
          <Image
            src="/assets/images/SciLab.png"
            alt="Logo"
            width={100}
            height={100}
            className="rounded-full"
          />
        </div>

        {/* Navigation Items */}
        <nav className="flex flex-col gap-4 p-6">
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.path}
              className="flex items-center gap-3 text-primary hover:text-textprimary hover:bg-blue-100 px-3 py-2 rounded-lg transition"
              onClick={() => setOpen(false)} // auto-close on click (for mobile UX)
            >
              <item.icon className="h-6 w-6" />
              <span className="text-md">{item.name}</span>
            </Link>
          ))}
        </nav>
      </aside>

      {/* Background overlay (mobile only, optional) */}
      {open && (
        <div
          className="fixed inset-0 bg-black opacity-40 z-30 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}

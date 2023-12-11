"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import menuclosed from "public/menu-closed.svg";
import user from "public/user.svg";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <div className="bg-gray-200">
      <nav className="w-full">
        <div className="justify-between mx-auto md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between">
              {/* LOGO */}
              <Link href="/">
                <Image
                  src={user}
                  alt="user"
                  width={30}
                  height={30}
                  className="headerImage mr-3"
                />
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="relative group"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image
                      src={menuclosed}
                      alt="landing"
                      width={30}
                      height={30}
                      className="headerImage mr-3"
                    />
                  ) : (
                    <Image
                      src={menuclosed}
                      alt="landing"
                      width={30}
                      height={30}
                      className="headerImage mr-3"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center md:block md:pb-0 md:mt-0 ${
                navbar ? "md:p-0 block" : "hidden"
              }`}
            >
              <ul className="lg:flex lg:flex-row lg:text-md lg:m-4 lg:gap-4 font-bold">
                <li className="">
                  <Link href="/">HOME</Link>{" "}
                </li>
                <li className="">
                  <Link href="/developers" onClick={() => setNavbar(!navbar)}>
                    DEVELOPERS
                  </Link>
                </li>
                <li className="">
                  <Link href="/charity" onClick={() => setNavbar(!navbar)}>
                    CHARITIES & NFPs
                  </Link>
                </li>
                <li className="">
                  <Link href="/partners" onClick={() => setNavbar(!navbar)}>
                    OUR PARTNERS
                  </Link>
                </li>
                <li className="">
                  <Link href="/testimonials" onClick={() => setNavbar(!navbar)}>
                    TESTIMONIALS
                  </Link>
                </li>
                <li className="">
                  <Link href="/contact-us" onClick={() => setNavbar(!navbar)}>
                    CONTACT US
                  </Link>
                </li>
                <li className="">
                  <Link href="/about" onClick={() => setNavbar(!navbar)}>
                    ABOUT US
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

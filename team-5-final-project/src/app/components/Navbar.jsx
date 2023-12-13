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
    <div className="bg-yellow-100">
      <nav className="w-full top-0 left-0 right-0">
        <div className="justify-between mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between pl-3 py-2 md:py-5 md:block bg-emerald-300">
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
              className={`flex-1 bg-emerald-300 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "md:p-0 block" : "hidden"
              }`}
            >
              <ul className="h-screen md:h-auto bg-yellow-100 items-center justify-center text-xl">
                <li className="mt-24 pb-6 text-4xl text-black font-bold py-6 md:text-4xl md:flex text-center border-b-2 border-black md:border-b-0 bg-emerald-300 ">
                  <Link href="/">HOME</Link>{" "}
                </li>
                <li className="pb-6 text-4xl text-black font-bold py-6 px-6 text-center  border-b-2 border-black md:border-b-0 bg-emerald-300 ">
                  <Link href="/developers" onClick={() => setNavbar(!navbar)}>
                    DEVELOPERS
                  </Link>
                </li>
                <li className="pb-6 text-4xl text-black font-bold py-6 px-6 text-center border-b-2 border-black md:border-b-0 bg-emerald-300">
                  <Link href="/charity" onClick={() => setNavbar(!navbar)}>
                    CHARITIES & NFP's
                  </Link>
                </li>
                <li className="pb-6 text-4xl text-black font-bold py-6 px-6 text-center border-b-2 border-black md:border-b-0 bg-emerald-300">
                  <Link href="/partners" onClick={() => setNavbar(!navbar)}>
                    OUR PARTNERS
                  </Link>
                </li>
                <li className="pb-6 text-4xl text-black font-bold py-6 px-6 text-center border-b-2 border-black md:border-b-0 bg-emerald-300 ">
                  <Link href="/testimonials" onClick={() => setNavbar(!navbar)}>
                    TESTIMONIALS
                  </Link>
                </li>
                <li className="pb-6 text-4xl text-black font-bold py-6 px-6 text-center border-b-2 border-black md:border-b-0 bg-emerald-300 ">
                  <Link href="/contact-us" onClick={() => setNavbar(!navbar)}>
                    CONTACT US
                  </Link>
                </li>
                <li className="pb-6 text-4xl text-black font-bold py-6 px-6 text-center md:border-b-0 bg-emerald-300">
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

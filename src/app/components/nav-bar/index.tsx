"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const navigation = [
  { title: "Home", url: "/" },
  { title: "About", url: "./about" },
  { title: "Projects", url: "" },
  { title: "Contact", url: "" },
];

export default function NavBar() {
  const [logoHide, setLogoHide] = useState(true);
  const [menuHide, setMenuHide] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 100) setLogoHide(false);
    else setLogoHide(true);
  };
  // `${navColored ? "fixed" : ""}`
  return (
    <nav
      className={`flex fixed p-4 h-auto w-full md:h-20 justify-between shadow-2xl
       backdrop-blur-sm bg-paletteBlack opacity-95`}
    >
      {
        <Image
          className="ml-10"
          style={{
            visibility: `${logoHide ? "hidden" : "visible"}`,
            opacity: `${logoHide ? "0" : "1"}`,
            translate: `${logoHide ? "100px 100px" : ""}`,
            scale: `${logoHide ? "1.5" : "1"}`,
            transition: `${"visibility 0.5s, opacity 0.5s, translate 1s, scale 3s"}`,
          }}
          src={"LogoTextHorizontal.svg"}
          alt={""}
          width={100}
          height={100}
        />
      }

      <div className="flex-row w-auto md:block self-center">
        <button
          className={`
         inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden`}
          onClick={() => {
            setMenuHide((curren) => {
              return !curren;
            });
          }}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <ul
          className={`${menuHide ? "hidden" : ""}
        flex flex-col border rounded-lg md:flex-row md:border-none w-full md:flex md:w-auto text-paletteText text-xl mr-10
         `}
        >
          {navigation.map((nav) => {
            return (
              <Link href={nav.url}>
                <li
                  onClick={() => {
                    setMenuHide(true);
                  }}
                  className="block text-center w-[2rem] rounded py-2 pl-3 pr-4 text-whitemd:bg-transparent md:text-paletteText md:w-auto mr-3 md:hover:underline"
                >
                  {nav.title}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

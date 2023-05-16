"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function MainLogo() {
  const [hide, setHide] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 90)
      setHide(() => {
        return true;
      });
    else
      setHide(() => {
        return false;
      });
  };

  return (
    <Image
      style={{
        visibility: `${hide ? "hidden" : "visible"}`,
        opacity: `${hide ? "0" : "1"}`,
        translate: `${hide ? "-100px -100px" : ""}`,
        scale: `${hide ? "0.5" : "1"}`,
        transition: `${
          !hide
            ? "visibility 0.2s , opacity 0.3s, translate 0.5s , scale 1s"
            : "visibility 0.2s, opacity 0.3s, translate 1s, scale 3s"
        }
        `,
      }}
      src={"LogoVerticalBlue.svg"}
      alt={"Logo"}
      width={100}
      height={100}
    />
  );
}

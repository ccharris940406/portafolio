"use client";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import Image from "next/image";
export default function Contact() {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_yr0flc6",
        "template_ovnq4c8",
        form.current ?? "",
        "jRmopvkm7J0Yp5osS"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="w-full flex justify-center bg-paletteBlack">
      <div className="relative w-[50%]">
        <h2 className="absolute text-[4rem] top-16 left-72 text-paletteText bg-paletteBrown rounded-3xl">
          Contact me!!!
        </h2>
        <Image
          className="w-full"
          width={1}
          height={1}
          src={"ContactImage.svg"}
          alt="ImageMail"
        />
      </div>
      <form
        ref={form}
        className="flex  flex-col space-y-2  w-[50%] p-12 self-center"
        onSubmit={sendEmail}
      >
        <label className="text-paletteText text-2xl" htmlFor="from_name">
          Name
        </label>
        <input id="from_name" name="from_name" type="text" />
        <label className="text-paletteText text-2xl" htmlFor="from_email">
          Email
        </label>
        <input id="from_email" name="from_email" type="email" />
        <label className="text-paletteText text-2xl">Message</label>
        <textarea
          className="bg-paletteGreen"
          name="message"
          cols={20}
          rows={5}
        />
        <button>Send</button>
      </form>
    </div>
  );
}

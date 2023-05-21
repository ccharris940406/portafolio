"use client";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
export default function Contact() {
  const [sendingEmail, setSendingEmail] = useState(false);
  const [email, setEmail] = useState("");
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      throw new Error("Failed sending email");
    }
    setSendingEmail(true);
    emailjs
      .sendForm(
        "service_yr0flc6",
        "template_ovnq4c8",
        form.current ?? "",
        "jRmopvkm7J0Yp5osS"
      )
      .then(
        (result) => {
          setSendingEmail(false);
          console.log(result.text);
        },
        (error) => {
          setSendingEmail(false);
          console.log(error.text);
        }
      );
  };

  return (
    <div className="w-full flex flex-col md:flex-row justify-center bg-paletteBlack bg-[url(/ContactImage.svg)] bg-contain md:bg-none ">
      <div className="items-center inline-flex justify-center mt-5 md:relative md:w-[50%] md:bg-[url(/ContactImage.svg)] md:bg-cover">
        <h2 className="py-1 px-3 text-[2.5rem] md:absolute sm:text-[3rem] text-center w-26 md:text-[3.5rem] self-center text-paletteText bg-paletteBrown rounded-3xl shadow-md shadow-black">
          Contact me!!!
        </h2>
      </div>
      <form
        ref={form}
        className="flex m-5 p-5  w-full flex-col space-y-2 -top-3 md:w-[50%] md:p-12 self-center bg-opacity-30"
        onSubmit={sendEmail}
      >
        <label className="text-paletteText text-2xl" htmlFor="from_name">
          Name
        </label>
        <input
          className="bg-paletteGreen text-xl h-8 px-2 rounded-md"
          id="from_name"
          name="from_name"
          type="text"
        />
        <label className="text-paletteText text-2xl" htmlFor="from_email">
          Email
        </label>
        <input
          className="bg-paletteGreen text-xl h-8 px-2 rounded-md"
          id="from_email"
          name="from_email"
          type="email"
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
        <label className="text-paletteText text-2xl">Message</label>
        <textarea
          className="bg-paletteGreen text-xl p-2 rounded-md"
          name="message"
          cols={20}
          rows={5}
        />
        <button
          className={`bg-paletteBrown self-center text-paletteText p-2 rounded-xl md:text-xl`}
          disabled={sendingEmail}
        >
          {!sendingEmail ? "Submmit" : "Sending"}
        </button>
      </form>
    </div>
  );
}

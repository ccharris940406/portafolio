import {
  FaLinkedinIn,
  FaWhatsapp,
  FaTelegramPlane,
  FaGithub,
} from "react-icons/fa";
import Link from "next/link";
//t.me/ccharris

export default function SocialsBotton() {
  return (
    <div className="flex space-x-3">
      <Link
        target="_blank"
        className="justify-center self-center"
        href={`https://www.linkedin.com/in/carlos-c%C3%A9sar-harris-castillo-ba7511199/`}
      >
        <button className="flex rounded-full w-12 h-12 bg-paletteBlue justify-center">
          <FaLinkedinIn className="text-center self-center text-2xl hover:text-4xl text-paletteBlack" />
        </button>
      </Link>

      <Link target="_blank" href={`https://github.com/ccharris940406`}>
        <button className="flex rounded-full w-12 h-12 bg-paletteBlue justify-center">
          <FaGithub className="text-center self-center text-2xl hover:text-4xl text-paletteBlack" />
        </button>
      </Link>

      <Link target="_blank" href={`https://t.me/ccharris`}>
        <button className="flex rounded-full w-12 h-12 bg-paletteBlue justify-center">
          <FaTelegramPlane className="text-center self-center text-2xl hover:text-4xl text-paletteBlack" />
        </button>
      </Link>
      <button className="flex rounded-full w-12 h-12 bg-paletteBlue justify-center">
        <FaWhatsapp className="text-center self-center text-3xl hover:text-4xl text-paletteBlack" />
      </button>
    </div>
  );
}

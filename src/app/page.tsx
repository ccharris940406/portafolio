import Contact from "./components/contact-form";
import MainLogo from "./components/main-logo";
import SocialsBotton from "./components/socials-button";

export default function Home() {
  return (
    <div>
      <div
        id="home"
        className="flex justify-center content-center h-screen bg-paletteBlack md:p-[10rem] md:pt-[15rem]"
      >
        <div className="flex flex-col items-center self-center justify-center">
          <p className="md:text-3xl text-center text-paletteText mb-10">
            Hello! I&apos;m{" "}
            {
              <text className="text-xl text-paletteBlue md:text-4xl">
                Carlos César Harris Castillo
              </text>
            }{" "}
            a Frontend Developer passionate about developing attractive and
            functional web experiences expectations.
          </p>
          <MainLogo />
          <div className="mt-10">
            <SocialsBotton />
            {/* <h1>{process.env.EMAIL_SERVICE}</h1> */}
          </div>
        </div>
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

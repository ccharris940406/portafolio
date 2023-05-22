import Contact from "./components/contact-form";
import MainLogo from "./components/main-logo";
import SocialsBotton from "./components/socials-button";
import MyImage from "../../public/coverphoto.png";
import Image from "next/image";

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
              <span className="text-xl text-paletteBlue md:text-4xl">
                Carlos César Harris Castillo
              </span>
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
      <section
        id="about"
        className="flex flex-col-reverse md:flex-row bg-paletteBlack"
      >
        <div className="flex justify-center md:w-[30%] self-center align-middle">
          <Image
            className="w-60 mb-10 h-full rounded-xl self-center md:w-auto md:ml-10"
            src={MyImage}
            alt={"My photo"}
            width={2000}
            height={2000}
            placeholder="blur"
          />
        </div>
        <div className="md:w-[70%] m-2 md:m-10">
          <h2 className="text-paletteBrown text-[3rem] m-5 self-center align-middle text-center">
            About Me
          </h2>
          <p className="text-paletteText text-2xl text-justify m-5">
            My name is Carlos César Harris Castillo, and I am a frontend
            developer with a passion for creating beautiful and functional
            websites. I am eager to learn and grow in my skills.
          </p>
          <p className="text-paletteText text-2xl text-justify m-5">
            My journey in web development began building my own portfolio. Since
            then, I have been dedicated to building my knowledge and skills in
            HTML, CSS, JavaScript, and other related technologies.
          </p>
          <p className="text-paletteText text-2xl text-justify m-5">
            I also enjoy collaborating with others and am always open to
            feedback and constructive criticism. Above all, I am passionate
            about using technology to create a better user experience.
          </p>
          <p className="text-paletteText text-2xl text-justify m-5">
            Thank you for taking the time to read my about me! I look forward to
            hearing more about your project and how I can contribute to its
            success.
          </p>
        </div>
      </section>
      <section className="" id="contact">
        <Contact />
      </section>
    </div>
  );
}

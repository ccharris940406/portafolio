import NavBar from "./components/nav-bar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Harri's Portafolio ",
  description: "Personal Portafolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="LogoTextVertical.png" />
      </head>
      <body className={`${inter.className}`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}

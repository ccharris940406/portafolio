import NavBar from "./components/nav-bar";
import "./globals.css";

export const metadata = {
title: "Carlos César Harris Castillo | Harri's Portafolio",
  description: "Portafolio personal de Carlos César Harris Castillo, desarrollador frontend con experiencia en React, Next.js y más.",
  openGraph: {
    title: "Harri's Portafolio",
    description: "Personal Portafolio",
    url: "https://ccharris.vercel.app",
    siteName: "Harri's Portafolio",
    images: [
      {
        url: "https://ccharris.vercel.app/LogoTextVertical.png",
        width: 1200,
        height: 630,
        alt: "Logo vertical de Harri",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harri's Portafolio",
    description: "Personal Portafolio",
    images: ["https://ccharris.vercel.app/LogoTextVertical.png"],
  },
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
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}

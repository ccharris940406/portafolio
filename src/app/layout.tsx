import NavBar from "./components/nav-bar";
import "./globals.css";

export const metadata = {
  title: "Harri's Portafolio",
  description: "Personal Portafolio",
  openGraph: {
    title: "Harri's Portafolio",
    description: "Personal Portafolio",
    url: "https://ccharris.vercel.app",
    siteName: "Harri's Portafolio",
    images: [
      {
        url: "https://ccharris.vercel.app/LogoTextVertical.png", // URL de la imagen para compartir
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harri's Portafolio",
    description: "Personal Portafolio",
    images: [""],
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

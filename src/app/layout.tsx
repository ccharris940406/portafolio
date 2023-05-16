import NavBar from "./components/nav-bar";
import "./globals.css";

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
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}

import "./globals.css";
import Head from "next/head";

export const metadata = {
  title: "Libro",
  description: "Libro is a non-profit organization that aims to empower the youth in the field of STEM.",
  icons: { icon: "/icon.png" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

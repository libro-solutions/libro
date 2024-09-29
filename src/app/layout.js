import NavBar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";

import { navItems } from "@/data/home/navItems";
import { socialLinks } from "@/data/home/socialLinks";
import { footer } from "@/data/home/footer";

export const metadata = {
  title: "Libro",
  description:
    "Libro is a non-profit organization that aims to empower the youth in the field of STEM.",
  icons: { icon: "/icon.png" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar navItems={navItems} socialLinks={socialLinks} />
        {children}
        <Footer data={footer} />
      </body>
    </html>
  );
}

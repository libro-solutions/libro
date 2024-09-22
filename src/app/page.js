import HeroSection from "@/components/Hero";
import NavBar from "@/components/Navbar";
import StemEdu from "@/components/Stem-edu";
import About from "@/components/About";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <StemEdu />
      <About/>
    </>
  );
}

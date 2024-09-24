import HeroSection from "@/components/Hero";
import NavBar from "@/components/Navbar";
import StemEdu from "@/components/StemEdu";
import About from "@/components/About";
import StempowerLanding from "@/components/StempowerLanding";

export default function Home() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <StemEdu />
      <About/>
      <StempowerLanding/>
    </>
  );
}

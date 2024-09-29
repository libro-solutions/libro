import HeroSection from "@/components/Hero";
import StemEdu from "@/components/StemEdu";
import About from "@/components/About";
import StempowerLanding from "@/components/StempowerLanding";
import TrustedPartnerships from "@/components/TrustedPartnerships";
import WhyInvestInSTEM from "@/components/WhyInvest";
import RecentNews from "@/components/News";
import GetInvolved from "@/components/GetInvolvedCustom";
import NewsletterSubscription from "@/components/Subs";

import { heroData } from "@/data/home/heroData";
import { stemEduData } from "@/data/home/stemedu";
import { aboutSliderContent } from "@/data/home/aboutSliderContent";
import { aboutSliderImages } from "@/data/home/aboutSliderImages";
import { stempowerLanding } from "@/data/home/stempowerLanding";
import { trustedPartnerships } from "@/data/home/trustedPartnerships";
import { whyInvest } from "@/data/home/whyInvest";
import { newsItems } from "@/data/home/news";
import { getInvolvedData } from "@/data/home/getInvolvedCustom";

export default function Home() {
  return (
    <>
      <HeroSection heroData={heroData} />
      <StemEdu data={stemEduData} />
      <About
        sliderImages={aboutSliderImages}
        sliderContent={aboutSliderContent}
      />
      <StempowerLanding data={stempowerLanding} />
      <TrustedPartnerships data={trustedPartnerships} />
      <WhyInvestInSTEM data={whyInvest} />
      <RecentNews data={newsItems} />
      <GetInvolved data={getInvolvedData} />
      <NewsletterSubscription />
    </>
  );
}

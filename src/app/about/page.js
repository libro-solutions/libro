import HeroSection from "@/components/Hero";
import StemEdu from "@/components/StemEdu";
import About from "@/components/About";
import StempowerLanding from "@/components/StempowerLanding";
import TrustedPartnerships from "@/components/TrustedPartnerships";
import WhyInvestInSTEM from "@/components/WhyInvest";
import RecentNews from "@/components/News";
import GetInvolved from "@/components/GetInvolvedCustom";
import NewsletterSubscription from "@/components/Subs";

import { heroData } from "@/data/about/heroData";
import { stemEduData } from "@/data/about/stemedu";
import { aboutSliderContent } from "@/data/about/aboutSliderContent";
import { aboutSliderImages } from "@/data/about/aboutSliderImages";
import { stempowerLanding } from "@/data/about/stempowerLanding";
import { trustedPartnerships } from "@/data/about/trustedPartnerships";
import { whyInvest } from "@/data/about/whyInvest";
import { newsItems } from "@/data/about/news";
import { getInvolvedData } from "@/data/about/getInvolvedCustom";

export default function AboutPage() {
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
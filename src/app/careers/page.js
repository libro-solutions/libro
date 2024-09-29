import HeroSection from "@/components/Hero";
import StemEdu from "@/components/StemEdu";
import About from "@/components/About";
import StempowerLanding from "@/components/StempowerLanding";
import TrustedPartnerships from "@/components/TrustedPartnerships";
import WhyInvestInSTEM from "@/components/WhyInvest";
import RecentNews from "@/components/News";
import GetInvolved from "@/components/GetInvolvedCustom";
import NewsletterSubscription from "@/components/Subs";

import { heroData } from "@/data/careers/heroData";
import { stemEduData } from "@/data/careers/stemedu";
import { aboutSliderContent } from "@/data/careers/aboutSliderContent";
import { aboutSliderImages } from "@/data/careers/aboutSliderImages";
import { stempowerLanding } from "@/data/careers/stempowerLanding";
import { trustedPartnerships } from "@/data/careers/trustedPartnerships";
import { whyInvest } from "@/data/careers/whyInvest";
import { newsItems } from "@/data/careers/news";
import { getInvolvedData } from "@/data/careers/getInvolvedCustom";

export default function Careers() {
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

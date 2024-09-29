import HeroSection from "@/components/Hero";
import StemEdu from "@/components/StemEdu";
import About from "@/components/About";
import StempowerLanding from "@/components/StempowerLanding";
import TrustedPartnerships from "@/components/TrustedPartnerships";
import WhyInvestInSTEM from "@/components/WhyInvest";
import RecentNews from "@/components/News";
import GetInvolved from "@/components/GetInvolvedCustom";
import NewsletterSubscription from "@/components/Subs";

import { heroData } from "@/data/team/heroData";
import { stemEduData } from "@/data/team/stemedu";
import { aboutSliderContent } from "@/data/team/aboutSliderContent";
import { aboutSliderImages } from "@/data/team/aboutSliderImages";
import { stempowerLanding } from "@/data/team/stempowerLanding";
import { trustedPartnerships } from "@/data/team/trustedPartnerships";
import { whyInvest } from "@/data/team/whyInvest";
import { newsItems } from "@/data/team/news";
import { getInvolvedData } from "@/data/team/getInvolvedCustom";

export default function Team() {
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

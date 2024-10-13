import HeroSection from "@/components/Hero";
import StemEdu from "@/components/StemEdu";
import About from "@/components/About";
import StempowerLanding from "@/components/StempowerLanding";
import TrustedPartnerships from "@/components/TrustedPartnerships";
import WhyInvestInSTEM from "@/components/WhyInvest";
import RecentNews from "@/components/News";
import GetInvolved from "@/components/GetInvolvedCustom";
import NewsletterSubscription from "@/components/Subs";
import FuturePlans from "@/components/FuturePlans";

import { heroData } from "@/data/services/heroData";
import { stemEduData } from "@/data/services/stemedu";
import { aboutSliderContent } from "@/data/services/aboutSliderContent";
import { aboutSliderImages } from "@/data/services/aboutSliderImages";
import { stempowerLanding } from "@/data/services/stempowerLanding";
import { trustedPartnerships } from "@/data/services/trustedPartnerships";
import { whyInvest } from "@/data/services/whyInvest";
import { newsItems } from "@/data/services/news";
import { getInvolvedData } from "@/data/services/getInvolvedCustom";
import { futurePlans } from "@/data/services/futurePlans";

export default function Services() {
  return (
    <>
      <HeroSection heroData={heroData} />
      <StemEdu data={stemEduData} />
      <About
        sliderImages={aboutSliderImages}
        sliderContent={aboutSliderContent}
      />
      <FuturePlans data={futurePlans} />
      <StempowerLanding data={stempowerLanding} />
      <TrustedPartnerships data={trustedPartnerships} />
      <WhyInvestInSTEM data={whyInvest} />
      <RecentNews data={newsItems} />
      <GetInvolved data={getInvolvedData} />
      <NewsletterSubscription />
    </>
  );
}

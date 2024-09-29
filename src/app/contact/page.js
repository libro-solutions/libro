import HeroSection from "@/components/Hero";
import StemEdu from "@/components/StemEdu";
import About from "@/components/About";
import StempowerLanding from "@/components/StempowerLanding";
import TrustedPartnerships from "@/components/TrustedPartnerships";
import WhyInvestInSTEM from "@/components/WhyInvest";
import RecentNews from "@/components/News";
import GetInvolved from "@/components/GetInvolvedCustom";
import NewsletterSubscription from "@/components/Subs";

import { heroData } from "@/data/contact/heroData";
import { stemEduData } from "@/data/contact/stemedu";
import { aboutSliderContent } from "@/data/contact/aboutSliderContent";
import { aboutSliderImages } from "@/data/contact/aboutSliderImages";
import { stempowerLanding } from "@/data/contact/stempowerLanding";
import { trustedPartnerships } from "@/data/contact/trustedPartnerships";
import { whyInvest } from "@/data/contact/whyInvest";
import { newsItems } from "@/data/contact/news";
import { getInvolvedData } from "@/data/contact/getInvolvedCustom";

export default function Contact() {
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

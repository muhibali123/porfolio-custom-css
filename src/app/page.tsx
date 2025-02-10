import Header from "./header/page";
import AboutSection from "./about/page";
import Skills from "./skills/page";
import PortfolioSection from "./portfolio/page";
import TestimonialsSection from "./testimonial/page";
import ContactSection from "./contact/page";

export default function Home() {
  return (
    <div>
      <Header/>
      <Skills/>
      <AboutSection/>
      <PortfolioSection/>
      <TestimonialsSection/>
      <ContactSection/>
    </div>
  );
}

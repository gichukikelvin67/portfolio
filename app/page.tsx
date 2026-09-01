import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Project";
import Services from "@/components/sections/Services";
import WhyMe from "@/components/sections/WhyMe";
import EducationExperience from "@/components/sections/EducationExperience";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import ProfileImage from "@/components/ProfileImage";

export default function Home() {
  return (
    <main>
      <Navbar />

      <Hero/>

      <About/>
      <Skills/>
      <Projects/>

      <Services/>
      <WhyMe/>

      <EducationExperience/>
      <Contact/>
      <Footer/>
      <ProfileImage/>
    </main>
  );
}
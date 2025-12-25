import DestinationSection from "../component/DestinationSection";
import Fotter from "../component/Fotter";
import Header from "../component/header";
import HeroSection from "../component/HeroSection";
import Navigation from "../component/Navigation";
import { TopBar } from "../component/top-bar";
export default function MedicalEducationPage() {
  return (
    <div>
      <TopBar />
      <Header />
      <Navigation />
      <HeroSection />
      <DestinationSection />
      <Fotter />
    </div>
  );
}

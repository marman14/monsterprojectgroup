import RenoNavbar from "@/components/RenoNavbar";
import RenoHero from "@/components/RenoHero";
import RenoBeforeAfter from "@/components/RenoBeforeAfter";
import RenoHowItWorks from "@/components/RenoHowItWorks";
import RenoServices from "@/components/RenoServices";
import RenoGallery from "@/components/RenoGallery";
import RenoAbout from "@/components/RenoAbout";
import RenoContact from "@/components/RenoContact";
import RenoFooter from "@/components/RenoFooter";
import { Toaster } from "@/components/ui/toaster";

const RenoIndex = () => {
  return (
    <div className="font-sans antialiased">
      <RenoNavbar />
      <main>
        <RenoHero />
        <RenoBeforeAfter />
        <RenoHowItWorks />
        <RenoServices />
        <RenoGallery />
        <RenoAbout />
        <RenoContact />
      </main>
      <RenoFooter />
      <Toaster />
    </div>
  );
};

export default RenoIndex;

import HeroSection from "@/components/HeroSection";
import ValuePropositionSection from "@/components/ValuePropositionSection";
import UserDataForm from "@/components/UserDataForm";
import PartnershipSection from "@/components/PartnershipSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ValuePropositionSection />
      <UserDataForm />
      <PartnershipSection />
      <Footer />
    </div>
  );
}
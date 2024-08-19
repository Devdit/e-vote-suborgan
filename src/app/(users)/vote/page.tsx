import SectionsGap from "@/app/components/general/SectionsGap";
import VotePage from "./_component/VotePage";
import Navbar from "../components/general/Navbar";
import Footer from "../components/general/Footer";

const Page = () => {
  return (
    <div>

      <Navbar />
      <SectionsGap>
        <VotePage />
      </SectionsGap>
      <Footer />

    </div>
  );
};

export default Page;

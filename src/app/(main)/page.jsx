import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import StaticSectionPage from "@/components/Static-section";


export default function Home() {
  return ( 
    <div>
     
      <Hero></Hero>
      <Featured></Featured>
      <StaticSectionPage></StaticSectionPage>
   
    </div>
  );
}

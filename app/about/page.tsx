import ClientOnly from "@/app/components/ClientOnly";
import Footer from "../components/Footer";
import AboutClient from "./AboutClient";

const AboutPage = async () => {

  return (
    <ClientOnly>
      <AboutClient
       
      />
      <Footer/>
    </ClientOnly>
  );
}
 
export default AboutPage;

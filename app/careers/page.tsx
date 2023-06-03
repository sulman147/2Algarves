import ClientOnly from "@/app/components/ClientOnly";
import Footer from "../components/Footer";
import CareerClient from "./CareersClient";

const CareerPage = async () => {

  return (
    <ClientOnly>
      <CareerClient
       
      />
      <Footer/>
    </ClientOnly>
  );
}
 
export default CareerPage;

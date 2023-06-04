import ClientOnly from "@/app/components/ClientOnly";
import Footer from "../components/Footer";
import TermConditionClient from "./TermConditionClient";

const TermConditionPage = async () => {

  return (
    <ClientOnly>
      <TermConditionClient
       
      />
      <Footer/>
    </ClientOnly>
  );
}
 
export default TermConditionPage;

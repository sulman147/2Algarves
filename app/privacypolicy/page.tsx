import ClientOnly from "@/app/components/ClientOnly";
import Footer from "../components/Footer";
import PrivacyPolicyClient from "./PrivacyPolicy";

const PrivacyPolicyPage = async () => {

  return (
    <ClientOnly>
      <PrivacyPolicyClient
       
      />
      <Footer/>
    </ClientOnly>
  );
}
 
export default PrivacyPolicyPage;

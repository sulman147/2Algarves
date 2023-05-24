
import ClientOnly from "@/app/components/ClientOnly";

import Footer from "../components/Footer";
import ContactClient from "./ContactClient";

const ContactPage = async () => {

  return (
    <ClientOnly>
      <ContactClient
       
      />
      <Footer/>
    </ClientOnly>
  );
}
 
export default ContactPage;

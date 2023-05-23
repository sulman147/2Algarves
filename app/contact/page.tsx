
import EmptyState from "@/app/components/EmptyState";
import ClientOnly from "@/app/components/ClientOnly";

import getCurrentUser from "@/app/actions/getCurrentUser";
import getReservations from "@/app/actions/getReservations";

import TripsClient from "./ContactClient";
import Footer from "../components/Footer";
import ContactClient from "./ContactClient";

const ContactPage = async () => {
  const currentUser = await getCurrentUser();


  return (
    <ClientOnly>
      <ContactClient/>
      <Footer/>
    </ClientOnly>
  );
}
 
export default ContactPage;

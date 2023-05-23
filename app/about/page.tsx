
import EmptyState from "@/app/components/EmptyState";
import ClientOnly from "@/app/components/ClientOnly";

import getCurrentUser from "@/app/actions/getCurrentUser";
import getReservations from "@/app/actions/getReservations";

import TripsClient from "./AboutClient";
import Footer from "../components/Footer";
import AboutClient from "./AboutClient";

const AboutPage = async () => {
  const currentUser = await getCurrentUser();


  return (
    <ClientOnly>
      <AboutClient
       
      />
      <Footer/>
    </ClientOnly>
  );
}
 
export default AboutPage;

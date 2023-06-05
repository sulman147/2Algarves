import dynamic from "next/dynamic";
import useCountries from "@/app/hooks/useCountries";

const MapTwo = dynamic(() => import("../Maptwo"), {
  ssr: false,
});
export default function LocationMap({ locationValue }) {
  const { getByValue } = useCountries();
  const { getByLabel } = useCountries();

  const coordinates = getByLabel(locationValue)?.latlng;
  return (
    <div>
      <MapTwo center={coordinates} />
    </div>
  );
}

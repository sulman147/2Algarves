import dynamic from "next/dynamic";
import useCountries from "@/app/hooks/useCountries";

const Map = dynamic(() => import("../Map"), {
  ssr: false,
});
export default function LocationMap({ locationValue }) {
  const { getByValue } = useCountries();
  const { getByLabel } = useCountries();

  const coordinates = getByLabel(locationValue)?.latlng;
  return (
    <div>
      <Map center={coordinates} />
    </div>
  );
}

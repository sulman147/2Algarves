import dynamic from "next/dynamic";
import useCountries from "@/app/hooks/useCountries";

const Map = dynamic(() => import("../Map"), {
  ssr: false,
});
export default function LocationMap({ locationValue }) {
  const { getByValue } = useCountries();

  const coordinates = getByValue(locationValue)?.latlng;

  return (
    <div>
      <Map center={coordinates} />
    </div>
  );
}

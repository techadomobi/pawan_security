import { LocationPage } from "@/components/locations/LocationPage";
import { getLocationPageBySlug } from "./locationData";

export default function Saket() {
  return <LocationPage data={getLocationPageBySlug("saket")} />;
}
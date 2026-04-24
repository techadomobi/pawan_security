import { LocationPage } from "@/components/locations/LocationPage";
import { getLocationPageBySlug } from "./locationData";

export default function VasantKunj() {
  return <LocationPage data={getLocationPageBySlug("vasant-kunj")} />;
}
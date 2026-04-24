import { LocationPage } from "@/components/locations/LocationPage";
import { getLocationPageBySlug } from "./locationData";

export default function MalviyaNagar() {
  return <LocationPage data={getLocationPageBySlug("malviya-nagar")} />;
}
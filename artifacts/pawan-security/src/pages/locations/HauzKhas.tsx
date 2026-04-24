import { LocationPage } from "@/components/locations/LocationPage";
import { getLocationPageBySlug } from "./locationData";

export default function HauzKhas() {
  return <LocationPage data={getLocationPageBySlug("hauz-khas")} />;
}
import { LocationPage } from "@/components/locations/LocationPage";
import { getLocationPageBySlug } from "./locationData";

export default function Nebsarai() {
  return <LocationPage data={getLocationPageBySlug("nebsarai")} />;
}
import { LocationPage } from "@/components/locations/LocationPage";
import { getLocationPageBySlug } from "./locationData";

export default function Ghitorni() {
  return <LocationPage data={getLocationPageBySlug("ghitorni")} />;
}
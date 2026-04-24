import { LocationPage } from "@/components/locations/LocationPage";
import { getLocationPageBySlug } from "./locationData";

export default function Sultanpur() {
  return <LocationPage data={getLocationPageBySlug("sultanpur")} />;
}
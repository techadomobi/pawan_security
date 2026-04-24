import { LocationPage } from "@/components/locations/LocationPage";
import { getLocationPageBySlug } from "./locationData";

export default function Rajpur() {
  return <LocationPage data={getLocationPageBySlug("rajpur")} />;
}
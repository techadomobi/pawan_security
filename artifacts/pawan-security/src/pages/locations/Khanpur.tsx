import { LocationPage } from "@/components/locations/LocationPage";
import { getLocationPageBySlug } from "./locationData";

export default function Khanpur() {
  return <LocationPage data={getLocationPageBySlug("khanpur")} />;
}
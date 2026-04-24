import { LocationPage } from "@/components/locations/LocationPage";
import { getLocationPageBySlug } from "./locationData";

export default function GreenPark() {
  return <LocationPage data={getLocationPageBySlug("green-park")} />;
}
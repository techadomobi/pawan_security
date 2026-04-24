import { LocationPage } from "@/components/locations/LocationPage";
import { getLocationPageBySlug } from "./locationData";

export default function Chhatarpur() {
  return <LocationPage data={getLocationPageBySlug("chhatarpur")} />;
}
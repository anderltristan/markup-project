import { IHotelLocation } from "../../common/constants";
import { FaMapMarkerAlt } from "react-icons/fa";

export const TabLocation = ({
  location,
  mapHref
} : {
  location: IHotelLocation;
  mapHref: string;
}) => {

  return (
    <div>
      <span>
        <FaMapMarkerAlt title="Map marker"/> {`${location.address}, ${location.city}, ${location.state} ${location.postalCode}`}
      </span>
      <img src={mapHref} width={"100%"} alt="Venetian location on map" loading="lazy"/>
    </div>
  )
};
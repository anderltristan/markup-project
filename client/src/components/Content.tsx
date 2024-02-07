import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaThumbsUp,
  FaStar,
} from "react-icons/fa";
import { IHotelData } from "../common/constants";
import { Tab } from "../components/Tabs/Tab";
import { TabContent } from "../components/Tabs/TabContent";
import { TabDescription } from "../components/Tabs/TabDescription";
import { TabDetails } from "../components/Tabs/TabDetails";
import { TabLocation } from "../components/Tabs/TabLocation";

export const Content = ({
  hotelData,
  setActiveTab,
  activeTab
} : {
  hotelData: IHotelData;
  setActiveTab: (tab: string) => void;
  activeTab: string;
}) => {

  return (
    <div className="main-content col-sm-9">
      <section className="main-content-header d-flex justify-content-between">
        <div className="main-content-header-left">
          <div className="main-content-header-name text-start">
            <span className="h1 hotel-name">{hotelData.name}</span>
            <span className="m-3">
              <FaStar title="Star rating 1" />
              <FaStar title="Star rating 2" />
              <FaStar title="Star rating 3" />
              <FaStar title="Star rating 4" />
              <FaStar title="Star rating 5" />
            </span>
          </div>
          <div className="main-content-header-location">
            <span
              className="main-content-header-location-area"
              onClick={() => setActiveTab("location")}
            >
              <FaMapMarkerAlt title="Map marker"/> {hotelData.location.areaName}
            </span>
            <span className="m-3"><FaPhoneAlt /> {hotelData.phoneNumber}</span>
            <span><FaThumbsUp /> Best Price Guarentee</span>
          </div>
        </div>
        <div className="main-content-header-right d-flex flex-column text-start">
          <span className="h1">{`\$${hotelData.price}`}</span>
          <span>HOTEL ROOMS FROM</span>
        </div>
      </section>

      <div className="main-content-tabs mt-5">
        <div className="tab-container w-100">
          <nav>
            <ul className="tab-navigation d-flex list-unstyled">
              <Tab title="DESCRIPTION" id="description" activeTab={activeTab} setActiveTab={setActiveTab}/>
              <Tab title="DETAILS" id="details" activeTab={activeTab} setActiveTab={setActiveTab}/>
              <Tab title="LOCATION" id="location" activeTab={activeTab} setActiveTab={setActiveTab}/>
            </ul>
          </nav>
          <div className="tab-content text-start">
            <TabContent id="description" activeTab={activeTab}>
              <TabDescription
                text={hotelData.description}
                showMoreText={"SHOW FULL DESCRIPTION"}
                showLessText={"HIDE FULL DESCRIPTION"}
              />
            </TabContent>
            <TabContent id="details" activeTab={activeTab}>
              <TabDetails
                details={hotelData.details}
                showMoreText={"VIEW MORE DETAILS"}
                showLessText={"VIEW FEWER DETAILS"}
              />
            </TabContent>
            <TabContent id="location" activeTab={activeTab}>
              <TabLocation
                location={hotelData.location}
                mapHref={"/images/map_venetian.png"}
              />
            </TabContent>
          </div>
        </div>    
      </div>
    </div>
  )
}
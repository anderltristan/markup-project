import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  IHotelListItem,
  IHotelData,
} from "./common/constants";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Content } from "./components/Content";

function App() {
  const [hotelData, setHotelData] = useState<IHotelData>();
  const [hotelList, setHotelList] = useState<IHotelListItem[]>([]);
  const [activeTab, setActiveTab] = useState<string>("description");

  useEffect(() => {
    fetch("http://localhost:8888/api/hotels/venetian")
      .then((response) => {
        return response.json();
      }).then((data) => {
        setHotelData(data);
      });

    fetch("http://localhost:8888/api/hotels")
      .then((response) => {
        return response.json();
      }).then((data) => {
        setHotelList(data.list);
      });
  }, []);

  return (
    <div className="App">
      <div className="container mt-5 px-3 py-2">
        <Header />
        <div className="row">
          <Sidebar hotelList={hotelList} />
          {
            hotelData && (
              <Content
                setActiveTab={setActiveTab}
                activeTab={activeTab}
                hotelData={hotelData}
              />
            )
          }
        </div>
      </div>
    </div>
  );
}

export default App;

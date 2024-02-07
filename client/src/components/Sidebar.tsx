import { IHotelListItem } from "../common/constants";

export const Sidebar = ({
  hotelList
} : {
  hotelList: IHotelListItem[];
}) => {
  return (
    <aside className="sidebar-content col-sm-3">
      <div className="sidebar-media">
        <img src={"/images/venetian.jpg"} width={"100%"} alt="Image of Venetian" loading="lazy"/>
      </div>
      <div className="sidebar-list px-2 py-1 my-4">
        <ul className="list-unstyled">
          {
            hotelList && hotelList.map((hotel, i) => {
              return (
                <li key={`hotel-${i}`} className="d-flex justify-content-between text-start my-3 mx-1">
                  <span className="sidebar-list-name">{hotel.name}</span>
                  <span className="sidebar-list-price">{`\$${hotel.price.toPrecision(4)}`}</span>
                </li>
              )
            })
          }
        </ul>
      </div>
    </aside>
  )
}
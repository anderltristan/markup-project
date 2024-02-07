import { useState } from "react";
import {
  FaChevronCircleDown,
  FaChevronCircleUp
} from "react-icons/fa";
import { IHotelDetails } from "../../common/constants";

export const TabDetails = ({
  details,
  showMoreText,
  showLessText
} : {
  details: IHotelDetails[];
  showMoreText: string;
  showLessText: string;
}) => {
  const [showFullText, setShowFullText] = useState<boolean>(false);

  return (
    <div
      className="tab-text-content"
    >
      <div
        className="overflow-hidden"
        style={{
          height: showFullText ? "auto" : "200px",
          whiteSpace: "pre-wrap"
        }}
      >
        { details.map(detail => {
            return (
              <div className="tab-detail">
                <b>{detail.label}</b>
                <p
                  className="overflow-hidden"
                  style={{whiteSpace: "pre-wrap"}}
                >
                  {detail.value}
                </p>
              </div>
            )
          })
        }
      </div>
      <span
        className="toggle-text"
        onClick={() => setShowFullText(!showFullText)}
      >
        {showFullText ? showLessText : showMoreText}
        {showFullText ? <FaChevronCircleUp title="Up arrow" /> : <FaChevronCircleDown title="Down arrow" />}
      </span>
    </div>
  )
}
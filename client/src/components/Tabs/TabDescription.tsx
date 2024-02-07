import { useState } from "react";
import {
  FaChevronCircleDown,
  FaChevronCircleUp
} from "react-icons/fa";

export const TabDescription = ({
  text,
  showMoreText,
  showLessText
} : {
  text: string;
  showMoreText: string;
  showLessText: string;
}) => {
  const [showFullText, setShowFullText] = useState<boolean>(false);

  return (
    <div className="tab-text-content">
      <p
        className="overflow-hidden"
        style={{
          height: showFullText ? "auto" : "200px",
          whiteSpace: "pre-wrap"
        }}
      >
        {text}
      </p>
      <span
        onClick={() => setShowFullText(!showFullText)}
        className="toggle-text"
      >
        {showFullText ? showLessText : showMoreText}
        {showFullText ? <FaChevronCircleUp title="Up arrow" /> : <FaChevronCircleDown title="Down arrow" />}
      </span>
    </div>
  )
}
//responsive code
import React, { useState } from "react";
import "../theaterselection/Datebar.css"; // Import the CSS styles

const DateBar = () => {
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

  const [selectedDateOffset, setSelectedDateOffset] = useState(0);

  const getDates = () => {
    const today = new Date();
    return Array.from({ length: 7 }, (_, i) => {
      const d = new Date();
      d.setDate(today.getDate() + i);
      return {
        offset: i,
        day: days[d.getDay()],
        date: String(d.getDate()).padStart(2, "0"),
        month: months[d.getMonth()],
      };
    });
  };

  const dateItems = getDates();

  return (
    <div className="datebar-container py-1">
      <div className="d-flex justify-content-center flex-wrap gap-3">
        {dateItems.map((item) => (
          <div
            key={item.offset}
            onClick={() => setSelectedDateOffset(item.offset)}
            className={`date-card text-center ${item.offset === selectedDateOffset ? "selected" : ""}`}
          >
            <span className="day">{item.day}</span>
            <span className="date-num">{item.date}</span>
            <span className="month">{item.month}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DateBar;

import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "../theaterselection/Filterbar.css"; // Import the external stylesheet

const FilterBar = () => {
  const [active, setActive] = useState("Language");

  const filters = [
    { label: "Tamil - 2D", key: "Language" },
    { label: "Price Range", key: "Price" },
    { label: "Preferred Time", key: "Time" }
  ];

  return (
    <div className="filterbar-container d-flex align-items-center flex-wrap">
      {filters.map((filter) => (
        <div
          key={filter.key}
          className={`filter-item ${active === filter.key ? "active-filter" : ""}`}
          onClick={() => setActive(filter.key)}
        >
          <span className="label">{filter.label}</span>
          <span className="arrow">▾</span>
        </div>
      ))}
      <div className="search-icon">
        <FaSearch size={16} />
      </div>
    </div>
  );
};

export default FilterBar;


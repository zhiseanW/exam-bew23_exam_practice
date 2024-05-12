import React from "react";

function Filters(props) {
  const { search, type, types, onSearchChange, onTypeChange } = props;
  return (
    <div className="filters">
      {/* INSTRUCTION: Add a text input for searching by name */}
      <div>
        <h4>Search Name</h4>
        <div>
          <input
            type="text"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
      </div>

      {/* INSTRUCTION: Add a select field for filtering by type */}

      <div>
        <h4>Search Type</h4>
        <div>
          <select value={type} onChange={(e) => onTypeChange(e.target.value)}>
            <option value={"all"}>All</option>
            {types.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default Filters;

import React from "react";

const SortFilter = () => {
  const handleSortingChange = (e) => {};
  return (
    <div>
      <h5>SortFilter</h5>
      <div>
        <label className="form-check-label">
          <input
            // onChange={handleSortingChange}
            type="radio"
            name="sorting"
            value="asc"
            // checked={selectedSortingOrder === "asc"}
          />
          Price - Low to High
        </label>
        <br />
        <label className="form-check-label">
          <input
            // onChange={handleSortingChange}
            type="radio"
            name="sorting"
            value="desc"
            // checked={selectedSortingOrder === "desc"}
          />
          Price - High to Low
        </label>
      </div>
    </div>
  );
};

export default SortFilter;

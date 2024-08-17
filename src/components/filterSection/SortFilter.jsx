import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSelectedSort } from "../../features/filterSlice";

const SortFilter = () => {
  const dispatch = useDispatch();
  const selectedSort = useSelector((state) => state.selectedSort);

  const handleSortingChange = (e) => {
    dispatch(getSelectedSort(e.target.value));
  };

  return (
    <div>
      <h5>SortFilter</h5>
      <div>
        <label className="form-check-label">
          <input
            onChange={handleSortingChange}
            type="radio"
            name="sorting"
            value="asc"
            checked={selectedSort === "asc"}
          />
          Price - Low to High
        </label>
        <br />
        <label className="form-check-label">
          <input
            onChange={handleSortingChange}
            type="radio"
            name="sorting"
            value="desc"
            checked={selectedSort === "desc"}
          />
          Price - High to Low
        </label>
      </div>
    </div>
  );
};

export default SortFilter;

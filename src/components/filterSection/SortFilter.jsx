import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getSelectedSort } from "../../features/filterSlice";

const SortFilter = () => {
  const dispatch = useDispatch();
  const [sort, setSort] = useState("");
  const handleSortingChange = (e) => {
    setSort(e.target.value);
  };
  useEffect(() => {
    dispatch(getSelectedSort(sort));
  }, [sort]);
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
          />
          Price - High to Low
        </label>
      </div>
    </div>
  );
};

export default SortFilter;

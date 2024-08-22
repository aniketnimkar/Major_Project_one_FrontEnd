import React, { useEffect } from "react";
import PriceFilter from "./PriceFilter";
import CategoryFilter from "./CategoryFilter";
import RatingFilter from "./RatingFilter";
import SortFilter from "./SortFilter";
import { useSelector, useDispatch } from "react-redux";
import { clearFilter } from "../../features/filterSlice";

const FilterSection = ({ urlParam }) => {
  const dispatch = useDispatch();
  const handleClearFilter = () => {
    dispatch(
      clearFilter({
        selectedPrice: 1000,
        selectedRating: null,
        selectedSort: null,
      })
    );
  };
  return (
    <div className="ms-4 mt-5 bg bg-body-tertiary rounded">
      {/* <div className="filterContainer ps-3"> */}
      <div className="d-flex justify-content-between">
        <h5>Filters</h5>{" "}
        <span className="btn btn-dark btn-sm" onClick={handleClearFilter}>
          Clear
        </span>
      </div>
      <PriceFilter />
      <CategoryFilter urlParam={urlParam} />
      <RatingFilter />
      <SortFilter />
    </div>
  );
};

export default FilterSection;

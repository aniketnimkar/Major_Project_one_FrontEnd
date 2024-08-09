import React from "react";
import PriceFilter from "./PriceFilter";
import CategoryFilter from "./CategoryFilter";
import RatingFilter from "./RatingFilter";
import SortFilter from "./SortFilter";
const FilterSection = ({ urlParam }) => {
  const handleClearFilter = () => {};
  return (
    <div className="filterContainer ps-3">
      <h5>Filters</h5> <span>clear</span>
      <PriceFilter />
      <CategoryFilter urlParam={urlParam} />
      <RatingFilter />
      <SortFilter />
    </div>
  );
};

export default FilterSection;

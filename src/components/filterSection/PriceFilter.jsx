import React, { useState } from "react";
import { getSelectedPrice } from "../../features/filterSlice";
import { useDispatch, useSelector } from "react-redux";
const PriceFilter = () => {
  const dispatch = useDispatch();
  const selectedPrice = useSelector((state) => state.filter.selectedPrice);
  const handlePriceChange = (e) => {
    const newPrice = Number(e.target.value);
    dispatch(getSelectedPrice(newPrice));
  };

  return (
    <>
      <section className="mt-4 mb-4">
        <h5>Price</h5>
        <input
          type="range"
          className="form-range"
          min="500"
          max="2000"
          step="100"
          id="price"
          value={selectedPrice || 1000}
          onChange={handlePriceChange}
        />
      </section>
    </>
  );
};

export default PriceFilter;

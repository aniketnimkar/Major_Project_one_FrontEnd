import React, { useState, useEffect } from "react";
import { getSelectedPrice } from "../../features/filterSlice";
import { useDispatch } from "react-redux";
const PriceFilter = () => {
  const dispatch = useDispatch();
  const [price, setPrice] = useState(1000);
  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };
  useEffect(() => {
    dispatch(getSelectedPrice(price));
  }, [price]);
  return (
    <>
      <section className="">
        <h5>Price</h5>
        <input
          type="range"
          className="form-range"
          min="500"
          max="2000"
          step="100"
          id="price"
          value={price}
          onChange={handlePriceChange}
        />
      </section>
    </>
  );
};

export default PriceFilter;

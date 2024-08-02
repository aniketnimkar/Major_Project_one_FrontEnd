import React, { useState, useEffect } from "react";
import { getSelctedPrice } from "../../features/filterSlice";
import { useDispatch } from "react-redux";
const PriceFilter = () => {
  const dispatch = useDispatch();
  const [price, setPrice] = useState(1000);
  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };
  useEffect(() => {
    dispatch(getSelctedPrice(price));
  }, [price]);
  return (
    <>
      <section>
        <h5>Filter</h5>
        <input
          type="range"
          className="form-range"
          min="1000"
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

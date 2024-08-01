import React from "react";

const PriceFilter = () => {
  const handlePriceChange = (event) => {};
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
        />
      </section>
    </>
  );
};

export default PriceFilter;

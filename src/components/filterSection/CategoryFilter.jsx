import React from "react";

const CategoryFilter = () => {
  const handleCategoryChange = (event) => {};
  return (
    <section>
      <h5> CategoryFilter</h5>
      <label className="form-check-label">
        <input
          // onChange={handleCategoryChange}
          type="checkbox"
          value="male"
          // checked={category.includes("male")}
        />
        Men Clothing
      </label>
      <br />

      <label className="form-check-label">
        <input
          // onChange={handleCategoryChange}
          type="checkbox"
          value="female"
          // checked={category.includes("female")}
        />
        Women Clothing
      </label>
      <br />
      <label className="form-check-label">
        <input
          // onChange={handleCategoryChange}
          type="checkbox"
          value="kids"
          // checked={category.includes("kids")}
        />
        Kids Clothing
      </label>
      <br />

      <label className="form-check-label">
        <input
          // onChange={handleCategoryChange}
          type="checkbox"
          value="couple"
          // checked={category.includes("couple")}
        />
        Couple Clothing
      </label>
    </section>
  );
};

export default CategoryFilter;

import React, { useState, useEffect } from "react";
import { getSelectedCategory } from "../../features/filterSlice";
import { useDispatch } from "react-redux";

const CategoryFilter = ({ urlParam }) => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState([urlParam]);
  const handleCategoryChange = (e) => {
    if (e.target.checked) {
      setCategory((prevState) => [...prevState, e.target.value]);
    } else {
      setCategory((prevState) =>
        prevState.filter((prev) => prev !== e.target.value)
      );
    }
  };
  useEffect(() => {
    dispatch(getSelectedCategory({ category }));
  }, [category]);
  return (
    <section>
      <h5> CategoryFilter</h5>
      <label className="form-check-label">
        <input
          onChange={handleCategoryChange}
          type="checkbox"
          value="male"
          checked={category.includes("male")}
        />
        Men Clothing
      </label>
      <br />

      <label className="form-check-label">
        <input
          onChange={handleCategoryChange}
          type="checkbox"
          value="female"
          checked={category.includes("female")}
        />
        Women Clothing
      </label>
      <br />
      <label className="form-check-label">
        <input
          onChange={handleCategoryChange}
          type="checkbox"
          value="kids"
          checked={category.includes("kids")}
        />
        Kids Clothing
      </label>
      <br />

      <label className="form-check-label">
        <input
          onChange={handleCategoryChange}
          type="checkbox"
          value="couple"
          checked={category.includes("couple")}
        />
        Couple Clothing
      </label>
    </section>
  );
};

export default CategoryFilter;

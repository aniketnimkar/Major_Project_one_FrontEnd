import React, { useState, useEffect } from "react";
import { getSelectedCategory } from "../../features/filterSlice";
import { useDispatch } from "react-redux";
import {
  fetchMaleProducts,
  fetchFemaleProducts,
  fetchKidsProducts,
  fetchCoupleProducts,
  emptyMenArray,
  emptyWomenArray,
  emptyKidsArray,
  emptyCoupleArray,
} from "../../features/filterSlice";

const CategoryFilter = ({ urlParam }) => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState([]);

  useEffect(() => {
    // Checking the urlParam and setting the category state accordingly
    if (urlParam === "male") {
      setCategory((prevCategory) => [...prevCategory, "male"]);
      dispatch(fetchMaleProducts("male"));
    } else if (urlParam === "female") {
      setCategory((prevCategory) => [...prevCategory, "female"]);
      dispatch(fetchFemaleProducts("female"));
    } else if (urlParam === "kids") {
      setCategory((prevCategory) => [...prevCategory, "kids"]);
      dispatch(fetchKidsProducts("kids"));
    } else if (urlParam === "couple") {
      setCategory((prevCategory) => [...prevCategory, "couple"]);
      dispatch(fetchCoupleProducts("couple"));
    }
  }, [urlParam, dispatch]);

  const handleCategoryChange = (e) => {
    if (e.target.checked) {
      setCategory((prevCategory) => [...prevCategory, e.target.value]);
      if (e.target.value === "male") {
        dispatch(fetchMaleProducts(e.target.value));
      } else if (e.target.value === "female") {
        dispatch(fetchFemaleProducts(e.target.value));
      } else if (e.target.value === "kids") {
        dispatch(fetchKidsProducts(e.target.value));
      } else if (e.target.value == "couple") {
        dispatch(fetchCoupleProducts(e.target.value));
      }
    } else {
      setCategory((prevCategory) =>
        prevCategory.filter((val) => val !== e.target.value)
      );
      if (e.target.value === "male") {
        setCategory((prevVal) =>
          prevVal.filter((val) => val !== e.target.value)
        );
        dispatch(emptyMenArray());
      } else if (e.target.value === "female") {
        setCategory((prevVal) =>
          prevVal.filter((val) => val !== e.target.value)
        );
        dispatch(emptyWomenArray());
      } else if (e.target.value === "kids") {
        setCategory((prevVal) =>
          prevVal.filter((val) => val !== e.target.value)
        );
        dispatch(emptyKidsArray());
      } else if (e.target.value === "couple") {
        setCategory((prevVal) =>
          prevVal.filter((val) => val !== e.target.value)
        );
        dispatch(emptyCoupleArray());
      }
    }
  };
  // console.log(category);
  return (
    <section className="mt-4 mb-4">
      <h5> CategoryFilter</h5>
      <label className="form-check-label">
        <input
          onChange={handleCategoryChange}
          type="checkbox"
          value="male"
          checked={category.includes("male")}
          className="form-check-input"
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
          className="form-check-input"
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
          className="form-check-input"
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
          className="form-check-input"
        />
        Couple Clothing
      </label>
    </section>
  );
};

export default CategoryFilter;

import React, { useEffect, useState } from "react";
import { getSelectedRating } from "../../features/filterSlice";
import { useDispatch } from "react-redux";
const RatingFilter = () => {
  const dispatch = useDispatch();
  const [rating, setRating] = useState("");
  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };
  useEffect(() => {
    dispatch(getSelectedRating(rating));
  }, [rating]);
  return (
    <section>
      <h5>RatingFilter</h5>
      <div>
        <label className="form-check-label">
          <input
            onChange={handleRatingChange}
            type="radio"
            name="rating"
            value="4"
          />
          4 Stars and above
        </label>
        <br />
        <label className="form-check-label">
          <input
            onChange={handleRatingChange}
            type="radio"
            name="rating"
            value="3"
          />
          3 Stars and above
        </label>
        <br />
        <label className="form-check-label">
          <input
            onChange={handleRatingChange}
            type="radio"
            name="rating"
            value="2"
          />
          2 Stars and above
        </label>
        <br />
        <label className="form-check-label">
          <input
            onChange={handleRatingChange}
            type="radio"
            name="rating"
            value="1"
          />
          1 Star and above
        </label>
      </div>
    </section>
  );
};

export default RatingFilter;

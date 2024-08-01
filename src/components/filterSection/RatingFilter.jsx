import React from "react";

const RatingFilter = () => {
  const handleRatingChange = (event) => {};
  return (
    <section>
      <h5>RatingFilter</h5>
      <div>
        <label className="form-check-label">
          <input
            // onChange={handleRatingChange}
            type="radio"
            name="rating"
            value="4"
            // checked={selectedRating === 4}
          />
          4 Stars and above
        </label>
        <br />
        <label className="form-check-label">
          <input
            // onChange={handleRatingChange}
            type="radio"
            name="rating"
            value="3"
            // checked={selectedRating === 3}
          />
          3 Stars and above
        </label>
        <br />
        <label className="form-check-label">
          <input
            // onChange={handleRatingChange}
            type="radio"
            name="rating"
            value="2"
            // checked={selectedRating === 2}
          />
          2 Stars and above
        </label>
        <br />
        <label className="form-check-label">
          <input
            // onChange={handleRatingChange}
            type="radio"
            name="rating"
            value="1"
            // checked={selectedRating === 1}
          />
          1 Star and above
        </label>
      </div>
    </section>
  );
};

export default RatingFilter;

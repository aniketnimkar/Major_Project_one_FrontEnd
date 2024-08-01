import useFetch from "../../useFetch";
import Header from "../components/Header";
import CardComponent from "../components/CardComponant";
import { useState } from "react";
import "./ProductListing.css";

const ProductListing = () => {
  const [price, setPrice] = useState(2000);
  const [category, setCategory] = useState([]);
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedSortingOrder, setSelectedSortingOrder] = useState(null);

  const handleClearFilter = () => {
    setPrice(2000);
    setCategory([]);
    setSelectedRating(null);
    setSelectedSortingOrder(null);
  };

  const { data, loading, error } = useFetch(
    "https://7a7136dc-bde6-42fa-8bc2-3a224d04aefb-00-226vkltlqk31c.pike.replit.dev/products",
  );

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleRatingChange = (event) => {
    setSelectedRating(Number(event.target.value));
  };

  const handleSortingChange = (e) => {
    setSelectedSortingOrder(e.target.value);
  };

  // Filter products based on price, category, rating, and sorting order
  const filterProducts = data?.product
    ?.filter(
      (product) =>
        product.productPrice <= price &&
        (category.length === 0 || category.includes(product.genderType)) &&
        (selectedRating === null || product.productRating >= selectedRating),
    )
    .sort((a, b) => {
      if (selectedSortingOrder === "asc") {
        return a.productPrice - b.productPrice;
      } else if (selectedSortingOrder === "desc") {
        return b.productPrice - a.productPrice;
      } else {
        return 0; // No sorting order selected
      }
    });

  const handleCategoryChange = (event) => {
    const { checked, value } = event.target;
    if (checked) {
      setCategory((prevValue) => [...prevValue, value]);
    } else {
      setCategory((prevValue) => prevValue.filter((val) => val !== value));
    }
  };

  return (
    <>
      <Header />
      <div className="">
        <div className="row">
          <section className="col-md-3 border filter-section mt-4">
            <div className="d-flex justify-content-between mt-4 mb-3">
              <h5>Filters</h5>
              <button className="border-0" onClick={handleClearFilter}>
                Clear Filter
              </button>
            </div>
            <div>
              <h5>
                <label htmlFor="price">Price</label>
              </h5>
              <div className="d-flex justify-content-between mb-3">
                <span>100</span> <span>1500</span> <span>2000</span>
              </div>
              <input
                type="range"
                className="form-range"
                min="100"
                max="2000"
                step="100"
                id="price"
                onChange={handlePriceChange}
                value={price}
              />
            </div>
            <div>
              <h5>Category</h5>
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
            </div>
            <div>
              <h5>Rating</h5>
              <div>
                <label className="form-check-label">
                  <input
                    onChange={handleRatingChange}
                    type="radio"
                    name="rating"
                    value="4"
                    checked={selectedRating === 4}
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
                    checked={selectedRating === 3}
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
                    checked={selectedRating === 2}
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
                    checked={selectedRating === 1}
                  />
                  1 Star and above
                </label>
              </div>
            </div>
            <div>
              <h5>Sort By</h5>
              <div>
                <label className="form-check-label">
                  <input
                    onChange={handleSortingChange}
                    type="radio"
                    name="sorting"
                    value="asc"
                    checked={selectedSortingOrder === "asc"}
                  />
                  Price - Low to High
                </label>
                <br />
                <label className="form-check-label">
                  <input
                    onChange={handleSortingChange}
                    type="radio"
                    name="sorting"
                    value="desc"
                    checked={selectedSortingOrder === "desc"}
                  />
                  Price - High to Low
                </label>
              </div>
            </div>
          </section>

          {/* Right Section - Product Listing */}
          <section className="col-md-9 mt-4">
            <div className="row">
              {filterProducts?.map((product) => (
                <div className="col-md-4 mb-4" key={product._id}>
                  <CardComponent product={product} />
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ProductListing;

import React from "react";
import { Link } from "react-router-dom";

const CardComponent = ({ finalProductsToView }) => {
  console.log(finalProductsToView);
  return (
    <div class="container py-5">
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {finalProductsToView.map((product) => (
          <div class="col">
            <div class="card h-100 border-0 shadow-sm">
              <Link>
                <img
                  src={product.productImageURL}
                  class="card-img-top rounded-top"
                  alt="Nike Airmax v2"
                  style={{
                    height: "350px",
                    objectFit: "cover",
                  }}
                />
              </Link>
              <div class="card-body">
                <h5 class="card-title">
                  <Link
                    to=""
                    className="card-title"
                    style={{ textDecoration: "none" }}
                  >
                    {product.productName}
                  </Link>
                </h5>

                <p class="card-text text-muted">Rs. {product.productPrice}</p>
                <button type="button" class="btn btn-dark w-100">
                  Add to Cart
                </button>
                <button type="button" class="btn btn-dark w-100 mt-1">
                  Add to Wishlist
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardComponent;

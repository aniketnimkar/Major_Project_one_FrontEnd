import React from 'react';

const CardComponent = ({ product }) => {
  return (
    <div className="card" style={{ width: "18rem", height:"38rem", position: "relative" }}>
      <div>
        <img
          src={product.productImageURL}
          className="card-img-top"
          alt={product.productName}
          style={{ width: 287, height: 350 }}
        />
      </div>
      <div className="card-body">
        <p className="card-text text-center">{product.productName}</p>
        <p className="card-text text-center">RS. {product.productPrice}</p>
        <p className="card-text text-center">Rating: {product.productRating}</p>
        <div className="mb-2">
          <button className="btn btn-primary w-100">
            Add to Cart
          </button>
        </div>
        <div>
          <button className="btn btn-primary w-100">
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;

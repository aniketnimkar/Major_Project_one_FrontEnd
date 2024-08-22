import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  addToCart,
  addToWishlist,
  PostProductInCart,
  PostProductInWishlist,
  gotoCartToggle,
} from "../features/filterSlice";
import { useDispatch, useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const CardComponent = ({ finalProductsToView }) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [disableButtons, setDisableButtons] = useState({});
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const gotoCart = useSelector((state) => state.gotoCart);

  useEffect(() => {
    if (finalProductsToView.length > 0) {
      setLoading(false);
    }
  }, [finalProductsToView]);

  const handleAddtoCart = (product) => {
    //dispatch action to add product into cart
    dispatch(addToCart({ ...product, quantity: 1 }));
    dispatch(PostProductInCart({ ...product, quantity: 1 }));
    toast.success("Product added to cart");
    // setDisableButtons((prevState) => ({
    //   ...prevState,
    //   [product._id]: true,
    // }));
    // setIsDisabled(!isDisabled);
    dispatch(gotoCartToggle({ [product._id]: true }));
  };

  const handleAddtoWishList = (product) => {
    //dispatch action to add product into WishList
    dispatch(addToWishlist(product));
    dispatch(PostProductInWishlist(product));
    toast.success("Product added to Wishlist");
  };

  return (
    <>
      <ToastContainer theme="dark" autoClose={1000} />
      <div className="  mt-5">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {loading
            ? Array(4)
                .fill(null)
                .map((_, index) => (
                  <div key={index} className="col">
                    <div className="card h-100 border-0 shadow">
                      <div
                        className="card-img-top placeholder-glow"
                        style={{ height: "340px", objectFit: "cover" }}
                      >
                        <span className="placeholder col-12 bg-dark"></span>
                      </div>

                      <div className="card-body">
                        <h5 className="card-title placeholder-glow">
                          <span className="placeholder col-7 bg-dark"></span>
                        </h5>

                        <p className="card-text placeholder-glow">
                          <span className="placeholder col-4 bg-dark"></span>
                        </p>

                        <span
                          className="btn btn-dark w-100 placeholder"
                          disabled
                        ></span>
                        <span
                          className="btn btn-outline-dark w-100 mt-1 placeholder"
                          disabled
                        ></span>
                      </div>
                    </div>
                  </div>
                ))
            : finalProductsToView.map((product) => (
                <div className="col">
                  <div className="card h-100 border-0 shadow">
                    <Link to={`/productDetails/${product._id}`}>
                      <img
                        src={product.productImageURL}
                        className="card-img-top rounded-top"
                        alt="Nike Airmax v2"
                        style={{
                          height: "350px",
                          objectFit: "cover",
                        }}
                      />
                    </Link>
                    <div className="card-body">
                      <h5 className="card-title">
                        <Link
                          to={`/productDetails/${product._id}`}
                          className="card-title"
                          style={{ textDecoration: "none" }}
                        >
                          {product.productName}
                        </Link>
                      </h5>

                      <p className="card-text text-muted">
                        Rs. {product.productPrice}
                      </p>
                      {gotoCart[product._id] ? (
                        <Link className="btn btn-dark w-100" to="/cart">
                          Go to Cart
                        </Link>
                      ) : (
                        <Link
                          onClick={() => handleAddtoCart(product)}
                          type="button"
                          className="btn btn-dark w-100"
                        >
                          Add to Cart
                        </Link>
                      )}
                      <button
                        type="button"
                        className="btn btn-outline-dark w-100 mt-1"
                        onClick={() => handleAddtoWishList(product)}
                      >
                        Add to Wishlist
                      </button>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </>
  );
};

export default CardComponent;

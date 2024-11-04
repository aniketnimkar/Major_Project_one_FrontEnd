import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Header from "../components/Header";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  addToWishlist,
  putIncreaseQuantity,
  putDecreaseQuantity,
  deleteProductFromCart,
  PostProductInWishlist,
  gotoCartToggle,
} from "../features/filterSlice";

import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cartArray);

  const increaseQuantityHandler = (id, product) => {
    dispatch(incrementQuantity(id));
    dispatch(putIncreaseQuantity(product));
  };

  const decreaseQuantityHandler = (id, product) => {
    dispatch(decrementQuantity(id));
    dispatch(putDecreaseQuantity(product));
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
    dispatch(deleteProductFromCart(id));
    dispatch(gotoCartToggle({ [id]: false }));
    toast.warning("Product removed from Cart");
  };

  const handleAddToWishlist = (product) => {
    dispatch(addToWishlist({ ...product, quantity: 1 }));
    dispatch(PostProductInWishlist(product));
    dispatch(removeFromCart(product._id));
    toast.success("Product moved to Wishlist");
  };

  const cartTotalPrice = cart.reduce(
    (acc, curr) => acc + curr.productPrice * curr.quantity,
    0
  );

  let discountAmount = 0;
  let deliveryCharges = 0;
  let totalAmount = 0;

  if (cart.length > 0) {
    if (cartTotalPrice >= 999) {
      deliveryCharges = 0;
      discountAmount = 200;
    } else {
      deliveryCharges = 50;
      discountAmount = 100;
    }
    totalAmount = cartTotalPrice - discountAmount + deliveryCharges;
  }

  return (
    <>
      <Header />

      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-12 py-4 text-center">
            <h1 className="text-uppercase display-2 mt-5 fw-bold">
              Shopping Cart
            </h1>
            <p className="text-secondary mb-5 fs-5">
              You have {cart.length} items in your shopping cart
            </p>
            {cart.length <= 0 && (
              <Link to={"/"} className="btn btn-sm btn-outline-dark ">
                &#60; Back to Home
              </Link>
            )}

            <div className="">
              <div className="row">
                <div className="col-12 col-lg-8">
                  <section
                    aria-labelledby="cart-heading"
                    className="bg-white rounded-lg p-4 mb-4"
                  >
                    <ul role="list" className="list-group list-group-flush">
                      {/* Items list to be mapped here */}
                      {cart.map((product) => (
                        <li className="list-group-item py-6">
                          <div className="row">
                            <div className="col-2">
                              <img
                                src={product.productImageURL}
                                alt=""
                                className="img-fluid rounded"
                                style={{ height: "100px", width: "100px" }}
                              />
                            </div>
                            <div className="col-6">
                              <h3 className="h5">
                                <a
                                  href="#"
                                  className="text-black font-weight-bold"
                                >
                                  {product.productName}
                                </a>
                              </h3>
                              <div className="d-flex align-items-center">
                                <button
                                  className="btn btn-light btn-sm"
                                  onClick={() =>
                                    decreaseQuantityHandler(
                                      product._id,
                                      product
                                    )
                                  }
                                >
                                  -
                                </button>
                                <span className="mx-1">
                                  {product.quantity || 1}
                                </span>
                                <button
                                  className="btn btn-light btn-sm"
                                  onClick={() =>
                                    increaseQuantityHandler(
                                      product._id,
                                      product
                                    )
                                  }
                                >
                                  +
                                </button>
                              </div>
                              <div className="mt-4 d-flex align-items-start">
                                <button
                                  className="btn btn-outline-danger"
                                  style={{ width: "158px" }}
                                  onClick={() =>
                                    removeFromCartHandler(product._id)
                                  }
                                >
                                  Remove From Cart
                                </button>
                                <button
                                  onClick={() => handleAddToWishlist(product)}
                                  className="btn btn-outline-dark ms-3"
                                  style={{ width: "158px" }}
                                >
                                  Move to Wishlist
                                </button>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </section>
                </div>
                {cart && cart.length > 0 && (
                  <div className="col-12 col-lg-4">
                    <section
                      aria-labelledby="summary-heading"
                      className="bg-white rounded-md p-4 mb-4"
                    >
                      <h2
                        id="summary-heading"
                        className="border-bottom pb-3 mb-3"
                      >
                        Price Details
                      </h2>
                      <dl className="list-group list-group-flush">
                        <div className="list-group-item d-flex justify-content-between">
                          <dt className="text-sm text-dark">
                            Price ({cart.length} items)
                          </dt>
                          <dd className="text-sm font-weight-bold">
                            ₹ {cartTotalPrice}
                          </dd>
                        </div>
                        <div className="list-group-item d-flex justify-content-between">
                          <dt className="text-sm text-dark">Discount</dt>
                          <dd className="text-sm font-weight-bold text-success">
                            - ₹ {discountAmount}
                          </dd>
                        </div>
                        <div className="list-group-item d-flex justify-content-between">
                          <dt className="text-sm text-dark">
                            Delivery Charges
                          </dt>
                          <dd className="text-sm font-weight-bold text-success">
                            {deliveryCharges === 0 ? "Free" : deliveryCharges}
                          </dd>
                        </div>
                        <div className="list-group-item d-flex justify-content-between border-top border-bottom">
                          <dt className="text-base font-weight-bold">
                            Total Amount
                          </dt>
                          <dd className="text-base font-weight-bold">
                            ₹ {totalAmount}
                          </dd>
                        </div>
                      </dl>
                      <div className="px-2 py-4 font-weight-bold text-success">
                        You will save ₹{" "}
                        {isNaN(totalAmount - cartTotalPrice)
                          ? 0
                          : totalAmount - cartTotalPrice}{" "}
                        on this order
                      </div>
                    </section>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;

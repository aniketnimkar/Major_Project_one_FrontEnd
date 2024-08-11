import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  addToWishlist,
  putIncreaseQuantity,
  putDecreaseQuantity,
  deleteProductFromCart,
  PostProductInWishlist,
} from "../features/filterSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cartArray);

  const increaseQuantityhandler = (id, product) => {
    dispatch(incrementQuantity(id));
    dispatch(putIncreaseQuantity(product));
  };
  const decreaseQuantityhandler = (id, product) => {
    dispatch(decrementQuantity(id));
    dispatch(putDecreaseQuantity(product));
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
    dispatch(deleteProductFromCart(id));
    toast.warning("Product remove from Cart");
  };

  const handleAddToWishlist = (product) => {
    dispatch(addToWishlist({ ...product, quantity: 1 }));
    dispatch(PostProductInWishlist(product));
    toast.success("Product move to Wishlist");
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
      <ToastContainer theme="dark" autoClose={1000} />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
              Shopping Cart
            </h1>
            <div className="mt-12">
              <div className="row">
                <div className="col-12 col-lg-8">
                  <section
                    aria-labelledby="cart-heading"
                    className="bg-white rounded-lg p-4 mb-4"
                  >
                    <h2 id="cart-heading" className="sr-only">
                      Items in your shopping cart
                    </h2>
                    <ul role="list" className="list-group list-group-flush">
                      {cart.map((product) => (
                        <li key={product._id} className="list-group-item py-6">
                          <div className="row">
                            <div className="col-3">
                              <img
                                src={product.productImageURL}
                                alt={product.productName}
                                className="img-fluid rounded"
                                style={{ height: "100px", width: "100px" }}
                              />
                            </div>
                            <div className="col-9">
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
                                  type="button"
                                  className="btn btn-light btn-sm"
                                  onClick={() =>
                                    dispatch(
                                      decreaseQuantityhandler(
                                        product._id,
                                        product
                                      )
                                    )
                                  }
                                >
                                  -
                                </button>
                                <span className="mx-1">
                                  {product.quantity || 1}
                                </span>
                                <button
                                  type="button"
                                  className="btn btn-light btn-sm"
                                  onClick={() =>
                                    increaseQuantityhandler(
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
                                  className="btn btn-danger"
                                  style={{ width: "158px" }}
                                  onClick={() =>
                                    removeFromCartHandler(product._id)
                                  }
                                >
                                  Remove From Cart
                                </button>
                                <button
                                  className="btn btn-dark ms-3"
                                  style={{ width: "158px" }}
                                  onClick={() => handleAddToWishlist(product)}
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
                {/* Summary Section */}
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
                          {cartTotalPrice}
                        </dd>
                      </div>
                      <div className="list-group-item d-flex justify-content-between">
                        <dt className="text-sm text-dark">Discount</dt>
                        <dd className="text-sm font-weight-bold text-success">
                          {discountAmount}
                        </dd>
                      </div>
                      <div className="list-group-item d-flex justify-content-between">
                        <dt className="text-sm text-dark">Delivery Charges</dt>
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
                      {isNaN(cartTotalPrice - totalAmount)
                        ? 0
                        : cartTotalPrice - totalAmount}{" "}
                      on this order
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;

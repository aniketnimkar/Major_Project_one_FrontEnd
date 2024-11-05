import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Header from "./Header";
import { fetchProductDetils } from "../features/filterSlice";
import { addToWishlist } from "../features/wishlistSlice";
import { addToCart, PostProductInCart } from "../features/cartSlice";
import { useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const paramsObject = useParams();

  const product = useSelector((state) => state.filter.ProductDetail);
  const token = useSelector((state) => state.loginRegistration.token);
  // console.log(product);

  const handleAddtoCart = (product) => {
    if (!token) {
      navigate("/login");
    } else {
      dispatch(addToCart({ ...product, quantity: 1 }));
      dispatch(PostProductInCart({ ...product, quantity: 1 }));
      toast.success("Product added to cart");
      dispatch(gotoCartToggle({ [product._id]: true }));
    }
  };
  const handleAddtoWishlist = (product) => {
    if (!token) {
      navigate("/login");
    } else {
      dispatch(addToWishlist(product));
      dispatch(postProductInWishlist(product));
      toast.success("Product added to wishlist");
    }
  };

  useEffect(() => {
    dispatch(fetchProductDetils(paramsObject.id));
  }, []);
  return (
    <>
      <Header />
      <section className="py-5 mt-5">
        <div className="container">
          <div className="row gx-5">
            <aside className="col-lg-6">
              <div className="border rounded-4 mb-3 d-flex justify-content-center">
                <img
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100vh",
                    margin: "auto",
                  }}
                  className="rounded-4 fit img-fluid"
                  src={product.productImageURL}
                  alt="Main product"
                />
              </div>
            </aside>
            <main className="col-lg-6">
              <div className="ps-lg-3">
                <h4 className="title text-dark">{product.productName}</h4>
                <div className="d-flex flex-row my-3">
                  <div className="text-warning mb-1 me-2">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                    <span className="ms-1">
                      {" "}
                      {product.productRating} Stars{" "}
                    </span>
                  </div>
                  <span className="text-muted">
                    <i className="fas fa-shopping-basket fa-sm mx-1"></i>154
                    orders
                  </span>
                  <span className="text-success ms-2">In stock</span>
                </div>

                <div className="mb-3">
                  <span className="h5">
                    <h5>Rs. {product.productPrice}</h5>
                  </span>
                  <span className="text-muted">/per box</span>
                </div>

                <p>
                  We understand that fashion is an expression of individuality,
                  which is why our collection features a range of colors,
                  patterns, and textures to suit every personality. Each product
                  undergoes rigorous quality control to ensure it meets our high
                  standards, so you can trust that you're investing in something
                  that not only looks great but will also stand the test of
                  time.
                </p>
                <p>
                  Discover the difference that attention to detail can make. Our
                  collection is more than just clothing or accessories—it's a
                  celebration of craftsmanship, creativity, and the art of
                  dressing well. Elevate your everyday routine with pieces that
                  are as functional as they are fashionable, and experience the
                  confidence that comes from wearing something truly special.
                </p>

                <div className="row">
                  <dt className="col-3">Type:</dt>
                  <dd className="col-9">{product.category}</dd>

                  <dt className="col-3">Gender:</dt>
                  <dd className="col-9">{product.genderType}</dd>

                  <dt className="col-3">Material</dt>
                  <dd className="col-9">Cotton, Jeans</dd>

                  {/* <dt className="col-3">Brand</dt>
                  <dd className="col-9">Reebook</dd> */}
                </div>

                <hr />

                {/* <div className="row mb-4">
                  <div className="col-md-4 col-6">
                    <label className="mb-2">Size</label>
                    <select
                      className="form-select border border-secondary"
                      style={{ height: "35px" }}
                    >
                      <option>Small</option>
                      <option>Medium</option>
                      <option>Large</option>
                    </select>
                  </div>
                  <div className="col-md-4 col-6 mb-3">
                    <label className="mb-2 d-block">Quantity</label>
                    <div
                      className="input-group mb-3"
                      style={{ width: "170px" }}
                    >
                      <button
                        className="btn btn-white border border-secondary px-3"
                        type="button"
                        id="button-addon1"
                        data-mdb-ripple-color="dark"
                      >
                        <i className="fas fa-minus"></i>
                      </button>
                      <input
                        type="text"
                        className="form-control text-center border border-secondary"
                        placeholder="14"
                        aria-label="Example text with button addon"
                        aria-describedby="button-addon1"
                      />
                      <button
                        className="btn btn-white border border-secondary px-3"
                        type="button"
                        id="button-addon2"
                        data-mdb-ripple-color="dark"
                      >
                        <i className="fas fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div> */}

                <button
                  onClick={() => handleAddtoCart(product)}
                  className="btn btn-dark shadow-0"
                >
                  <i className="me-1 fa fa-shopping-basket"></i> Add to cart{" "}
                  <i class="bi bi-cart3"></i>
                </button>
                <button
                  onClick={() => handleAddtoWishlist(product)}
                  className="btn btn-dark shadow-0 ms-4"
                >
                  <i className="me-1 fa fa-shopping-basket"></i> Add to Wishlist{" "}
                  <i class="bi bi-heart-fill"></i>
                </button>
              </div>
            </main>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;

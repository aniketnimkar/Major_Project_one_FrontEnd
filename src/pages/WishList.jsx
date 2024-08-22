import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  addToCart,
  removeFromWishList,
  deleteProductFromWishlist,
} from "../features/filterSlice";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Header from "../components/Header"; // Adjust the path as per your structure

const WishList = () => {
  const dispatch = useDispatch();
  const wishList = useSelector((state) => state.wishList.wishListArray);

  const handleAddToCart = (product) => {
    dispatch(addToCart({ ...product, quantity: 1 }));
    toast.success("Product added to cart");
  };

  const handleRemoveFromWishlist = (id) => {
    dispatch(removeFromWishList(id));
    dispatch(deleteProductFromWishlist(id));
    toast.warning("Product removed from Wishlist");
  };

  return (
    <>
      <Header />
      <ToastContainer theme="dark" autoClose={1000} />

      <div className="container py-5">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {!wishList || wishList.length === 0 ? (
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ height: "10vh", width: "100%" }}
            >
              <h1 className="text-center">Your Wishlist is empty.💔</h1>
            </div>
          ) : (
            wishList.map((product) => (
              <div key={product._id} className="col">
                <div className="card h-100 border-0 shadow-sm">
                  <Link to={`/productDetails/${product._id}`}>
                    <img
                      src={product.productImageURL}
                      className="card-img-top rounded-top"
                      alt={product.productName}
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
                    <button
                      onClick={() => handleAddToCart(product)}
                      type="button"
                      className="btn btn-dark w-100"
                    >
                      Add to Cart
                    </button>
                    <button
                      onClick={() => handleRemoveFromWishlist(product._id)}
                      type="button"
                      className="btn btn-dark w-100 mt-2"
                    >
                      Remove from Wishlist
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default WishList;

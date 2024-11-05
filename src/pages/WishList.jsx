import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../features/cartSlice";
import { deleteProductFromCart } from "../features/cartSlice";
import { removeFromWishList } from "../features/wishlistSlice";
import { deleteProductFromWishlist } from "../features/wishlistSlice";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Header from "../components/Header"; // Adjust the path as per your structure
import Footer from "../components/Footer";

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishList.wishList);
  // console.log("Error", wishlist);

  const handleAddToCart = (product) => {
    // Dispatch action to add it to the cart array
    dispatch(addToCart({ ...product, quantity: 1 }));
    toast.success("Product added to cart");
  };

  const handleRemoveFromWishlist = (id) => {
    dispatch(removeFromWishList(id));
    dispatch(deleteProductFromWishlist(id));
    toast.warning("Product removed from wishlist");
  };

  return (
    <>
      <ToastContainer theme="dark" autoClose={1000} />
      <Header />

      <div className="col-12 text-center py-5">
        <h1 className="text-uppercase display-2 mt-5 fw-bold">Wishlist</h1>
        <p className="text-secondary mb-5 fs-5">
          You have {wishlist.length} items in your wishlist
        </p>
        {wishlist.length <= 0 && (
          <Link to={"/"} className="btn btn-sm btn-outline-dark ">
            &#60; Back to Home
          </Link>
        )}
      </div>
      <div className="container py-5">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {wishlist.map((product) => (
            <div key={product._id} className="col">
              <div className="card h-100 border-0 shadow-sm">
                <Link to={`/productDetails/${product._id}`}>
                  <img
                    src={
                      product.productImageURL ||
                      "https://m.media-amazon.com/images/I/61j2FBMg2LL._AC_UL320_.jpg"
                    }
                    className="card-img-top rounded-top"
                    alt={product.productName || "Product Image"}
                    style={{ height: "340px", objectFit: "cover" }}
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
                  <p className="card-text">&#8377; {product.productPrice}</p>
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
                    className="btn btn-dark w-100 mt-1"
                  >
                    Remove from Wishlist
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Wishlist;

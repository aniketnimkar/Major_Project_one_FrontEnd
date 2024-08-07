import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, removeFromWishList } from "../features/filterSlice";
const WishList = () => {
  const dispatch = useDispatch();
  const wishList = useSelector((state) => state.wishList);

  const handleAddtoCart = (product) => {
    //dispatch action to add product into cart
    dispatch(addToCart({ ...product, quantity: 1 }));
  };

  const handleRemoveFormWishlist = (id) => {
    dispatch(removeFromWishList(id));
  };
  return (
    <>
      <h1 className="text-center">This is a WishList Page</h1>
      <div class="container py-5">
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {wishList.map((product) => (
            <div class="col">
              <div class="card h-100 border-0 shadow-sm">
                <Link to={`/productDetails/${product._id}`}>
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
                      to={`/productDetails/${product._id}`}
                      className="card-title"
                      style={{ textDecoration: "none" }}
                    >
                      {product.productName}
                    </Link>
                  </h5>

                  <p class="card-text text-muted">Rs. {product.productPrice}</p>
                  <button
                    onClick={() => handleAddtoCart(product)}
                    type="button"
                    class="btn btn-dark w-100"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => handleRemoveFormWishlist(product._id)}
                    type="button"
                    class="btn btn-dark w-100 mt-2"
                  >
                    Remove from Wishlist
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
export default WishList;

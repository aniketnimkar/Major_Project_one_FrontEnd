import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchProduct } from "../features/filterSlice";
const Header = () => {
  const dispatch = useDispatch();
  const searchHandler = (e) => {
    dispatch(searchProduct(e.target.value));
  };
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <NavLink className="nav-link" to="/">
            Shop.com
          </NavLink>
          {/* className="navbar-brand" >Shop.com */}
          <div className="d-flex justify-content-center w-100">
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={searchHandler}
              />
              {/* <button className="btn btn-outline-success" type="submit">
                Search
              </button> */}
            </form>
          </div>
          <div className="ms-auto d-flex">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="btn btn-secondary" aria-current="page" href="#">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"/wishList"}>
                  Wishlist
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"/cart"}>
                  Cart
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;

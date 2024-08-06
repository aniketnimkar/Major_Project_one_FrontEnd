import { NavLink } from "react-router-dom";
import CategoryFilter from "./filterSection/CategoryFilter";
import { useDispatch } from "react-redux";
import {
  emptyCoupleArray,
  emptyKidsArray,
  emptyMenArray,
  emptyWomenArray,
} from "../features/filterSlice";

const HeroSection = () => {
  const dispatch = useDispatch();
  const CategoryHandler = (e) => {
    if (e.target.id === "male") {
      dispatch(emptyWomenArray([]));
      dispatch(emptyKidsArray([]));
      dispatch(emptyCoupleArray([]));
    } else if (e.target.id === "female") {
      dispatch(emptyKidsArray([]));
      dispatch(emptyMenArray([]));
      dispatch(emptyCoupleArray([]));
    } else if (e.target.id === "kids") {
      dispatch(emptyMenArray([]));
      dispatch(emptyWomenArray([]));
      dispatch(emptyCoupleArray([]));
    } else if (e.target.id === "couple") {
      dispatch(emptyMenArray([]));
      dispatch(emptyWomenArray([]));
      dispatch(emptyKidsArray([]));
    }
  };
  return (
    //<NavLink className="nav-link" to="/">Shop.com</NavLink>
    <>
      <div className="container content-center mt-3">
        <div className="row align-items-center">
          <div className="col">
            <NavLink to="/products/category/male">
              <img
                className="rounded img-fluid"
                src="https://placehold.co/300x200?text=Male\nCollection"
                alt="male Cllection"
                id="male"
                onClick={CategoryHandler}
              />
            </NavLink>
          </div>
          <div className="col">
            <NavLink to="/products/category/female">
              <img
                className="rounded img-fluid"
                src="https://placehold.co/300x200?text=Women\nCollection"
                alt="female Collection"
                id="female"
                onClick={CategoryHandler}
              />
            </NavLink>
          </div>
          <div className="col">
            <NavLink to="/products/category/kids">
              <img
                className="rounded img-fluid"
                src="https://placehold.co/300x200?text=Kids\nCollection"
                alt="kids Collection"
                id="kids"
                onClick={CategoryHandler}
              />
            </NavLink>
          </div>
          <div className="col">
            <NavLink to="/products/category/couple">
              <img
                className="rounded img-fluid"
                src="https://placehold.co/300x200?text=Couple\nCollection"
                alt="Couple Collection"
                id="couple"
                onClick={CategoryHandler}
              />
            </NavLink>
          </div>
        </div>
      </div>

      {/* HERO IMAGE */}

      <div className="container mt-4 d-flex justify-content-center align-items-center">
        <img
          style={{ height: "600px", width: "1200px" }}
          className="rounded img-fluid"
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
    </>
  );
};

export default HeroSection;

import { NavLink } from "react-router-dom";

const HeroSection = () => {
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
              />
            </NavLink>
          </div>
          <div className="col">
            <NavLink to="/products/category/female">
              <img
                className="rounded img-fluid"
                src="https://placehold.co/300x200?text=Women\nCollection"
                alt="female Collection"
              />
            </NavLink>
          </div>
          <div className="col">
            <NavLink to="/products/category/kids">
              <img
                className="rounded img-fluid"
                src="https://placehold.co/300x200?text=Kids\nCollection"
                alt="kids Collection"
              />
            </NavLink>
          </div>
          <div className="col">
            <NavLink to="/products/category/couple">
              <img
                className="rounded img-fluid"
                src="https://placehold.co/300x200?text=Couple\nCollection"
                alt="Couple Collection"
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

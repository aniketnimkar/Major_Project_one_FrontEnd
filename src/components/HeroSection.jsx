import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  emptyCoupleArray,
  emptyKidsArray,
  emptyMenArray,
  emptyWomenArray,
} from "../features/filterSlice";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../images/hero-1.jpg";
import image2 from "../images/hero-2.jpg";

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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      {/* HERO IMAGE */}

      <section className="hero">
        <Slider {...settings}>
          <div className="position-relative">
            <img
              src={image1}
              alt="Summer Collection"
              className="img-fluid w-100"
            />

            <div className="position-absolute top-50 start-50 translate-middle-x text-center text-lg-start ml-5">
              <div className="container">
                <div className="row">
                  <div className="col-xl-5 col-lg-7 col-md-8">
                    <h6>Summer Collection</h6>
                    <h2>Fall - Winter Collections 2030</h2>
                    <p>
                      A specialist label creating luxury essentials. Ethically
                      crafted with an unwavering commitment to exceptional
                      quality.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="position-relative">
            <img
              src={image2}
              alt="Summer Collection"
              className="img-fluid w-100"
            />
            <div className="position-absolute top-50 start-50 translate-middle-x text-center text-lg-start ml-5">
              <div className="container">
                <div className="row">
                  <div className="col-xl-5 col-lg-7 col-md-8">
                    <h6>Summer Collection</h6>
                    <h2>Fall - Winter Collections 2030</h2>
                    <p>
                      A specialist label creating luxury essentials. Ethically
                      crafted with an unwavering commitment to exceptional
                      quality.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </section>

      {/* 4 box */}
      <div className="container content-center mt-5">
        <div className="row align-items-center">
          <div className="col">
            <NavLink to="/products/category/male" className="image-container">
              <img
                className="rounded img-fluid equal-height-img"
                src="https://images.unsplash.com/photo-1512755051947-dea0029e93ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fG1hbGUlMjBmYXNoaW9uJTIwbW9kZWx8ZW58MHx8MHx8fDA%3D"
                alt="male Collection"
                id="male"
                onClick={CategoryHandler}
              />
              <div className="overlay-text">Male</div>
            </NavLink>
          </div>
          <div className="col">
            <NavLink to="/products/category/female" className="image-container">
              <img
                className="rounded img-fluid equal-height-img"
                src="https://plus.unsplash.com/premium_photo-1689371957762-b5f8d601933e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="female Collection"
                id="female"
                onClick={CategoryHandler}
              />
              <div className="overlay-text">Female</div>
            </NavLink>
          </div>
          <div className="col">
            <NavLink to="/products/category/kids" className="image-container">
              <img
                className="rounded img-fluid equal-height-img"
                src="https://plus.unsplash.com/premium_photo-1697612943610-fc079bab10cf?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="kids Collection"
                id="kids"
                onClick={CategoryHandler}
              />
              <div className="overlay-text">Kids</div>
            </NavLink>
          </div>
          <div className="col">
            <NavLink to="/products/category/couple" className="image-container">
              <img
                className="rounded img-fluid equal-height-img"
                src="https://images.unsplash.com/photo-1543899161-d044e847c40f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                id="couple"
                onClick={CategoryHandler}
              />
              <div className="overlay-text">Couple</div>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;

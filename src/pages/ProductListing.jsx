import useFetch from "../../useFetch";
import Header from "../components/Header";
import CardComponent from "../components/CardComponant";
import { useEffect, useState } from "react";
import "./ProductListing.css";
import { NavLink, useParams } from "react-router-dom";
import FilterSection from "../components/filterSection/FilterSection";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  fetchMaleProducts,
  fetchFemaleProducts,
  fetchKidsProducts,
  fetchCoupleProducts,
} from "../features/filterSlice";

const ProductListing = () => {
  const dispatch = useDispatch();
  const maleProducts = useSelector((state) => state.filter.maleProducts);
  const femaleProducts = useSelector((state) => state.filter.femaleProducts);
  const kidsProducts = useSelector((state) => state.filter.kidsProducts);
  const coupleProducts = useSelector((state) => state.filter.coupleProducts);
  // const allProducts = useSelector((state) => state.products);
  const selectedPrice = useSelector((state) => state.filter.selectedPrice);
  // console.log(selectedPrice);
  const selectedRating = useSelector((state) => state.filter.selectedRating);
  const selectedSort = useSelector((state) => state.filter.selectedSort);
  const searchBoxValue = useSelector((state) => state.filter.searchKeyword);
  const paramsObject = useParams();
  // console.log(paramsObject.category);

  // console
  const allProductsToView = [
    ...maleProducts,
    ...femaleProducts,
    ...kidsProducts,
    ...coupleProducts,
  ];

  const filteredProducts = allProductsToView.filter((product) => {
    const priceFilter = product.productPrice <= selectedPrice;
    const ratingFilter = product.productRating >= selectedRating;
    return priceFilter && ratingFilter;
  });

  const finalProductsToView =
    selectedSort === "asc"
      ? filteredProducts.sort((a, b) => a.productPrice - b.productPrice)
      : selectedSort === "desc"
      ? filteredProducts.sort((a, b) => b.productPrice - a.productPrice)
      : filteredProducts;

  // console.log("This is filtered data", finalProductsToView);

  //search Box function
  const finalProductView = finalProductsToView.filter((product) =>
    product.productName.toLowerCase().includes(searchBoxValue.toLowerCase())
  );
  return (
    <>
      <Header />

      <section className="text-center" style={{ marginTop: "70px" }}>
        <NavLink style={{ color: "black" }} className="linkDecoration" to={"/"}>
          Home
        </NavLink>{" "}
        /{" "}
        {[
          maleProducts.length && "Men",
          femaleProducts.length && "Women",
          kidsProducts.length && "Kids",
          coupleProducts.length && "Couple",
        ]
          .filter(Boolean)
          .join(" & ")}
      </section>

      <section>
        <h1 className="text-center display-2">Command the Spotlight</h1>
        <p className="text-center display-5">
          Explore a diverse range of styles, tailored to fit every personality
          and lifestyle.
        </p>
      </section>

      {/* this is for Filter Section */}
      <section className="row mx-3">
        <section className="col-md-3">
          <FilterSection urlParam={paramsObject.category} />
        </section>
        {/* This section is for PRODUCT Listing */}
        <section className="col-md-9 px-2">
          <CardComponent finalProductsToView={finalProductView} />
        </section>
      </section>
    </>
  );
};

export default ProductListing;

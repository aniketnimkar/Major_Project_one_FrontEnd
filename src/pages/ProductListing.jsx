import useFetch from "../../useFetch";
import Header from "../components/Header";
import CardComponent from "../components/CardComponant";
import { useEffect, useState } from "react";
import "./ProductListing.css";
import { useParams } from "react-router-dom";
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
  const maleProducts = useSelector((state) => state.maleProducts);
  const femaleProducts = useSelector((state) => state.femaleProducts);
  const kidsProducts = useSelector((state) => state.kidsProducts);
  const coupleProducts = useSelector((state) => state.coupleProducts);
  // const allProducts = useSelector((state) => state.products);
  const selectedPrice = useSelector((state) => state.selectedPrice);
  console.log(selectedPrice);
  const selectedRating = useSelector((state) => state.selectedRating);
  const selectedSort = useSelector((state) => state.selectedSort);
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

  console.log("This is filtered data", finalProductsToView);
  return (
    <>
      <Header />
      {/* this is for Filter Section */}
      <section className="row">
        <section className="col-md-3">
          <FilterSection urlParam={paramsObject.category} />
        </section>
        {/* This section is for PRODUCT Listing */}
        <section className="col-md-9">
          <CardComponent finalProductsToView={finalProductsToView} />
        </section>
      </section>
    </>
  );
};

export default ProductListing;

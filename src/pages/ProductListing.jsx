import useFetch from "../../useFetch";
import Header from "../components/Header";
import CardComponent from "../components/CardComponant";
import { useState } from "react";
import "./ProductListing.css";
import { useParams } from "react-router-dom";

const ProductListing = () => {
  const paramsObject = useParams();

  const handleClearFilter = () => {};

  const handlePriceChange = (event) => {};

  const handleRatingChange = (event) => {};

  const handleSortingChange = (e) => {};

  const handleCategoryChange = (event) => {};
  // Filter products based on price, category, rating, and sorting order

  return (
    <>
      <Header />
    </>
  );
};

export default ProductListing;

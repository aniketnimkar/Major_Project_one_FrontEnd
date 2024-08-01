import useFetch from "../../useFetch";
import Header from "../components/Header";
import CardComponent from "../components/CardComponant";
import { useState } from "react";
import "./ProductListing.css";
import { useParams } from "react-router-dom";
import FilterSection from "../components/filterSection/FilterSection";

const ProductListing = () => {
  const paramsObject = useParams();

  // Filter products based on price, category, rating, and sorting order

  return (
    <>
      <Header />
      {/* this is for Filter Section */}
      <section className="row">
        <section className="col-md-3">
          <FilterSection />
        </section>
        {/* This section is for PRODUCT Listing */}
        <section className="col-md-9"></section>
      </section>
    </>
  );
};

export default ProductListing;

import useFetch from "../../useFetch";
import Header from "../components/Header";
import CardComponent from "../components/CardComponant";
import { useEffect, useState } from "react";
import "./ProductListing.css";
import { useParams } from "react-router-dom";
import FilterSection from "../components/filterSection/FilterSection";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/filterSlice";

const ProductListing = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const paramsObject = useParams();
  // console.log(paramsObject.category);

  // Filter products based on price, category, rating, and sorting order
  useEffect(() => {
    dispatch(fetchProducts(paramsObject.category));
  }, []);
  // console.log(products);
  return (
    <>
      <Header />
      {/* this is for Filter Section */}
      <section className="row">
        <section className="col-md-3">
          <FilterSection urlParam={paramsObject.category} />
        </section>
        {/* This section is for PRODUCT Listing */}
        <section className="col-md-9"></section>
        import {useDispatch} from "react-redux";
      </section>
    </>
  );
};

export default ProductListing;

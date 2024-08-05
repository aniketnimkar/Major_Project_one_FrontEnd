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
          {/* <div class="container py-5"> */}
          <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
            <div class="col">
              <div class="card h-100 border-0 shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1588099768523-f4e6a5679d88?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHwxMTM4MTU1NXx8ZW58MHx8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
                  class="card-img-top rounded-top"
                  alt="Nike Airmax v2"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div class="card-body">
                  <h5 class="card-title">Nike Airmax v2</h5>
                  <p class="card-text text-muted">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Excepturi, debitis?
                  </p>
                  <button type="button" class="btn btn-dark w-100">
                    Add to Cart
                  </button>
                  <button type="button" class="btn btn-dark w-100 mt-1">
                    Add to Wishlist
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
        </section>
      </section>
    </>
  );
};

export default ProductListing;

import { createSlice, current, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (category) => {
    const response = await axios.get(
      `http://localhost:3000/products/category/${category}`
    );
    console.log(response.data);
    return response.data;
  }
);

const initialState = {
  products: [],
  filteredProducts: [],
  cart: [],
  wishList: [],
  status: "idel",
  error: null,
  // selectedCategory: null,
  selectedRating: null,
  selectedPrice: null,
  selectedSort: null,
};

export const filterSlice = createSlice({
  name: "filterSlice",
  initialState,
  reducers: {
    getSelectedCategory: (state, action) => {
      console.log(current(state));
    },
    getSelectedRating: (state, action) => {
      state.selectedRating = action.payload;
      console.log(current(state));
    },
    getSelctedPrice: (state, action) => {
      state.selectedPrice = action.payload;
      console.log(current(state));
    },
    getSelectedSort: (state, action) => {
      state.selectedSort = action.payload;
      console.log(current(state));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.status = "Success";
      state.products = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.status = "error";
      console.log(action);
    });
  },
});
export const {
  getSelectedCategory,
  getSelectedRating,
  getSelctedPrice,
  getSelectedSort,
} = filterSlice.actions;
export default filterSlice.reducer;

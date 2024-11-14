import { createSlice, current, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// const API_URL = import.meta.env.VITE_API_URL;

export const fetchProductDetils = createAsyncThunk(
  "products/fetchProductDetails",
  async (productId) => {
    const response = await axios.get(
      `https://shoppingbuzz.vercel.app/productDetails/${productId}`
    );
    console.log(response.data);
    return response.data.product;
  }
);
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (category) => {
    const response = await axios.get(
      `https://shoppingbuzz.vercel.app/products/category/${category}`
    );

    return response.data.products;
  }
);

export const fetchMaleProducts = createAsyncThunk(
  "products/fetchMaleProducts",
  async (category) => {
    const response = await axios.get(
      `https://shoppingbuzz.vercel.app/products/category/${category}`
    );

    return response.data.products;
  }
);

export const fetchFemaleProducts = createAsyncThunk(
  "products/fetchFemaleProducts",
  async (category) => {
    const response = await axios.get(
      `https://shoppingbuzz.vercel.app/products/category/${category}`
    );
    console.log(response.data);
    return response.data.products;
  }
);

export const fetchKidsProducts = createAsyncThunk(
  "products/fetchKidsProducts",
  async (category) => {
    const response = await axios.get(
      `https://shoppingbuzz.vercel.app/products/category/${category}`
    );

    return response.data.products;
  }
);

export const fetchCoupleProducts = createAsyncThunk(
  "products/fetchCoupleProducts",
  async (category) => {
    const response = await axios.get(
      `https://shoppingbuzz.vercel.app/products/category/${category}`
    );

    return response.data.products;
  }
);

const initialState = {
  ProductDetail: {},
  products: [],
  maleProducts: [],
  femaleProducts: [],
  kidsProducts: [],
  coupleProducts: [],
  filteredProducts: null,
  selectedRating: null,
  selectedPrice: 1700,
  selectedSort: null,
  searchKeyword: "",

  status: "idle",
  error: null,
};

export const filterSlice = createSlice({
  name: "filterSlice",
  initialState,
  reducers: {
    clearFilter: (state, action) => {
      state.selectedPrice = action.payload.selectedPrice;
      state.selectedRating = action.payload.selectedRating;
      state.selectedSort = action.payload.selectedSort;
    },
    getSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    getSelectedRating: (state, action) => {
      state.selectedRating = action.payload;
      // console.log(current(state));
    },
    getSelectedPrice: (state, action) => {
      state.selectedPrice = action.payload;
      // console.log(current(state));
    },
    getSelectedSort: (state, action) => {
      state.selectedSort = action.payload;
      // console.log(current(state));
    },
    emptyMenArray: (state, action) => {
      state.maleProducts = [];
    },
    emptyWomenArray: (state, action) => {
      state.femaleProducts = [];
    },
    emptyKidsArray: (state, action) => {
      state.kidsProducts = [];
    },

    emptyCoupleArray: (state, action) => {
      state.coupleProducts = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProductDetils.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchProductDetils.fulfilled, (state, action) => {
      state.status = "success";
      state.ProductDetail = action.payload;
    });
    builder.addCase(fetchProductDetils.rejected, (state, action) => {
      state.status = "error";
      // console.log(action);
    });

    builder.addCase(fetchMaleProducts.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchMaleProducts.fulfilled, (state, action) => {
      state.status = "success";
      state.maleProducts = action.payload;
      const newProducts = action.payload.filter(
        (newProduct) =>
          !state.products.some((product) => product._id === newProduct._id)
      );
      state.products = [...state.products, ...newProducts];
    });
    builder.addCase(fetchMaleProducts.rejected, (state, action) => {
      state.status = "error";
      // console.log(action);
    });

    builder.addCase(fetchFemaleProducts.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchFemaleProducts.fulfilled, (state, action) => {
      state.status = "success";
      state.femaleProducts = action.payload;
      const newProducts = action.payload.filter(
        (newProduct) =>
          !state.products.some((product) => product._id === newProduct._id)
      );
      state.products = [...state.products, ...newProducts];
    });
    builder.addCase(fetchFemaleProducts.rejected, (state, action) => {
      state.status = "error";
      // console.log(action);
    });

    builder.addCase(fetchKidsProducts.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchKidsProducts.fulfilled, (state, action) => {
      state.status = "success";
      state.kidsProducts = action.payload;
      const newProducts = action.payload.filter(
        (newProduct) =>
          !state.products.some((product) => product._id === newProduct._id)
      );
      state.products = [...state.products, ...newProducts];
    });
    builder.addCase(fetchKidsProducts.rejected, (state, action) => {
      state.status = "error";
      // console.log(action);
    });

    builder.addCase(fetchCoupleProducts.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchCoupleProducts.fulfilled, (state, action) => {
      state.status = "success";
      state.coupleProducts = action.payload;
      const newProducts = action.payload.filter(
        (newProduct) =>
          !state.products.some((product) => product._id === newProduct._id)
      );
      state.products = [...state.products, ...newProducts];
    });
    builder.addCase(fetchCoupleProducts.rejected, (state, action) => {
      state.status = "error";
      // console.log(action);
    });
  },
});

export const {
  clearFilter,
  getSelectedCategory,
  getSelectedRating,
  getSelectedPrice,
  getSelectedSort,
  emptyMenArray,
  emptyWomenArray,
  emptyKidsArray,
  emptyCoupleArray,
} = filterSlice.actions;

export default filterSlice.reducer;

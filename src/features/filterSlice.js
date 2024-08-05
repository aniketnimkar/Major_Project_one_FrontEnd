import { createSlice, current, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (category) => {
    const response = await axios.get(
      `http://localhost:3000/products/category/${category}`
    );

    return response.data.products;
  }
);

export const fetchMaleProducts = createAsyncThunk(
  "products/fetchMaleProducts",
  async (category) => {
    const response = await axios.get(
      `http://localhost:3000/products/category/${category}`
    );

    return response.data.products;
  }
);

export const fetchFemaleProducts = createAsyncThunk(
  "products/fetchFemaleProducts",
  async (category) => {
    const response = await axios.get(
      `http://localhost:3000/products/category/${category}`
    );

    return response.data.products;
  }
);

export const fetchKidsProducts = createAsyncThunk(
  "products/fetchKidsProducts",
  async (category) => {
    const response = await axios.get(
      `http://localhost:3000/products/category/${category}`
    );

    return response.data.products;
  }
);

export const fetchCoupleProducts = createAsyncThunk(
  "products/fetchCoupleProducts",
  async (category) => {
    const response = await axios.get(
      `http://localhost:3000/products/category/${category}`
    );

    return response.data.products;
  }
);

const initialState = {
  products: [],
  maleProducts: [],
  femaleProducts: [],
  kidsProducts: [],
  coupleProducts: [],
  filteredProducts: null,
  cart: [],
  wishList: [],
  status: "idle",
  error: null,
  selectedRating: null,
  selectedPrice: null,
  selectedSort: null,
};

export const filterSlice = createSlice({
  name: "filterSlice",
  initialState,
  reducers: {
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
      console.log(current(state));
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
    builder.addCase(fetchProducts.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.status = "success";
      state.products = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.status = "error";
      console.log(action);
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
      console.log(action);
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
      console.log(action);
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
      console.log(action);
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
      console.log(action);
    });
  },
});

export const {
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

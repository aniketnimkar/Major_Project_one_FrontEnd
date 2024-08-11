import { createSlice, current, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProductDetils = createAsyncThunk(
  "products/fetchProductDetails",
  async (productId) => {
    const response = await axios.get(
      `http://localhost:3000/productDetails/${productId}`
    );
    console.log(response.data);
    return response.data.product;
  }
);
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

export const PostProductInCart = createAsyncThunk(
  "products/addToCart",
  async (product) => {
    const response = await axios.post(
      `http://localhost:3000/products/addToCart`,
      product,
      {
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    // console.log(response);
    return response.data;
  }
);

export const putIncreaseQuantity = createAsyncThunk(
  "product/putIncrease",
  async (product) => {
    const response = await axios.put(
      `http://localhost:3000/product/updateQuantity/${product._id}`,
      { ...product, quantity: product.quantity + 1 }
    );
    return response.data;
  }
);

export const putDecreaseQuantity = createAsyncThunk(
  "product/putDecrease",
  async (product) => {
    const response = await axios.put(
      `http://localhost:3000/product/updateQuantity/${product._id}`,
      { ...product, quantity: product.quantity - 1 }
    );
    return response.data;
  }
);

// export const deleteCartItem
export const deleteProductFromCart = createAsyncThunk(
  "product/deleteProduct",
  async (id) => {
    const response = await axios.delete(
      `http://localhost:3000/product/deleteProduct/${id}`
    );
    return response.data;
  }
);

export const PostProductInWishlist = createAsyncThunk(
  "products/addToWishlist",
  async (product) => {
    const response = await axios.post(
      `http://localhost:3000/products/addToWishlist`,
      product,
      {
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    // console.log(response);
    return response.data;
  }
);

export const deleteProductFromWishlist = createAsyncThunk(
  "product/deleteWishlistProduct",
  async (id) => {
    const response = await axios.delete(
      `http://localhost:3000/product/deleteProductWishlist/${id}`
    );

    return response.data;
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
  cart: {
    cartArray: [],
    cartQuantity: null,
  },
  wishList: [],
  status: "idle",
  error: null,
  selectedRating: null,
  selectedPrice: null,
  selectedSort: null,
  searchKeyword: "",
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
    addToCart: (state, action) => {
      // state.cart.cartArray.push(action.payload);
      const itemPresent = state.cart.cartArray.find(
        (item) => item._id === action.payload._id
      );
      if (itemPresent) {
        itemPresent.quantity++;
      } else {
        state.cart.cartArray.push(action.payload);
      }
    },
    removeFromCart: (state, action) => {
      const removeFromCart = state.cart.cartArray.filter(
        (item) => item._id !== action.payload
      );
      state.cart.cartArray = removeFromCart;
    },
    incrementQuantity: (state, action) => {
      const itemPresent = state.cart.cartArray.find(
        (item) => item._id === action.payload
      );

      itemPresent.quantity++;
    },
    decrementQuantity: (state, action) => {
      const itemPresent = state.cart.cartArray.find(
        (item) => item._id === action.payload
      );
      if (itemPresent.quantity === 1) {
        const removeFromCart = state.cart.cartArray.filter(
          (item) => item._id !== action.payload
        );
        state.cart.cartArray = removeFromCart;
      } else {
        itemPresent.quantity--;
      }
    },
    addToWishlist: (state, action) => {
      const itemPresent = state.wishList.find(
        (item) => item._id === action.payload._id
      );
      if (itemPresent) {
        return;
      } else {
        state.wishList.push(action.payload);
      }
    },
    removeFromWishList: (state, action) => {
      const removeFromWishlist = state.wishList.filter(
        (product) => product._id !== action.payload
      );
      state.wishList = removeFromWishlist;
    },

    searchProduct: (state, action) => {
      state.searchKeyword = action.payload;
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

    //cases for adding data in cart!!
    builder
      .addCase(PostProductInCart.pending, (state) => {
        state.status = "Loading";
      })
      .addCase(PostProductInCart.fulfilled, (state) => {
        state.status = "Success";
      })
      .addCase(PostProductInCart.rejected, (state) => {
        state.status = "error";
      });

    builder
      .addCase(putIncreaseQuantity.pending, (state) => {
        state.status = "Loading";
      })
      .addCase(putIncreaseQuantity.fulfilled, (state) => {
        state.status = "Success";
      })
      .addCase(putIncreaseQuantity.rejected, (state) => {
        state.status = "error";
      });

    builder
      .addCase(putDecreaseQuantity.pending, (state) => {
        state.status = "Loading";
      })
      .addCase(putDecreaseQuantity.fulfilled, (state) => {
        state.status = "Success";
      })
      .addCase(putDecreaseQuantity.rejected, (state) => {
        state.status = "error";
      });

    builder
      .addCase(deleteProductFromCart.pending, (state) => {
        state.status = "Loading";
      })
      .addCase(deleteProductFromCart.fulfilled, (state) => {
        state.status = "Success";
      })
      .addCase(deleteProductFromCart.rejected, (state) => {
        state.status = "error";
      });

    //for adding data in wishlist
    builder
      .addCase(PostProductInWishlist.pending, (state) => {
        state.status = "Loading";
      })
      .addCase(PostProductInWishlist.fulfilled, (state) => {
        state.status = "Success";
      })
      .addCase(PostProductInWishlist.rejected, (state) => {
        state.status = "error";
      });

    builder
      .addCase(deleteProductFromWishlist.pending, (state) => {
        state.status = "Loading";
      })
      .addCase(deleteProductFromWishlist.fulfilled, (state) => {
        state.status = "Success";
      })
      .addCase(deleteProductFromWishlist.rejected, (state) => {
        state.status = "error";
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
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  addToWishlist,
  removeFromWishList,
  searchProduct,
} = filterSlice.actions;

export default filterSlice.reducer;

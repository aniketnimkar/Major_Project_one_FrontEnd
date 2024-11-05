import { createSlice, current, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const PostProductInCart = createAsyncThunk(
  "products/addToCart",
  async (product) => {
    const response = await axios.post(
      `https://major-project-one-back-end.vercel.app/products/addToCart`,
      product,
      {
        headers: {
          "Content-type": "application/json",
          Authorization: `${localStorage.getItem("admin-token")}`,
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
      `https://major-project-one-back-end.vercel.app/product/updateQuantity/${product._id}`,
      { ...product, quantity: product.quantity + 1 }
    );
    return response.data;
  }
);

export const putDecreaseQuantity = createAsyncThunk(
  "product/putDecrease",
  async (product) => {
    const response = await axios.put(
      `https://major-project-one-back-end.vercel.app/product/updateQuantity/${product._id}`,
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
      `https://major-project-one-back-end.vercel.app/product/deleteProduct/${id}`
    );
    return response.data;
  }
);

const initialState = {
  cart: {
    cartArray: [],
    cartQuantity: null,
  },
  gotoCart: {},
  status: "idle",
  error: null,
};

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
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

    gotoCartToggle: (state, action) => {
      state.gotoCart = { ...state.gotoCart, ...action.payload };
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
  },
  extraReducer: (builder) => {
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
  },
});

export const {
  addToCart,
  removeFromCart,
  gotoCartToggle,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;

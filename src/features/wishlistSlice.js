import { createSlice, current, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const PostProductInWishlist = createAsyncThunk(
  "products/addToWishlist",
  async (product) => {
    const response = await axios.post(
      `https://shoppingbuzz.vercel.app/products/addToWishlist`,
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

export const deleteProductFromWishlist = createAsyncThunk(
  "product/deleteWishlistProduct",
  async (id) => {
    const response = await axios.delete(
      `https://shoppingbuzz.vercel.app/product/deleteProductWishlist/${id}`
    );

    return response.data;
  }
);

const initialState = {
  wishList: [],
  status: "idle",
  error: null,
};

export const wishlistSlice = createSlice({
  name: "wishlistSlice",
  initialState,
  reducers: {
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
  },
  extraReducer: (builder) => {
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

export const { addToWishlist, removeFromWishList } = wishlistSlice.actions;

export default wishlistSlice.reducer;

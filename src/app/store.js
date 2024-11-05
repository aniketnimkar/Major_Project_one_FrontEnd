import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "../features/filterSlice";
import cartReducer from "../features/cartSlice";
import wishlistReducer from "../features/wishlistSlice";
import loginRegistrationReducer from "../features/loginRegistrationSlice";
export const store = configureStore({
  reducer: {
    filter: filterReducer,
    cart: cartReducer,
    wishList: wishlistReducer,
    loginRegistration: loginRegistrationReducer,
  },
});

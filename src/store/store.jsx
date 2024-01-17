import { configureStore } from "@reduxjs/toolkit";
import authsSice from "./authsSice";

const store = configureStore({
  reducer: {
    auth: authsSice,
  },
});

export default store;

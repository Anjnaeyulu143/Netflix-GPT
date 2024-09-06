import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userSlice";

const appStore = configureStore({
  reducer: {
    userInfo: userReducer,
  },
});

export default appStore;

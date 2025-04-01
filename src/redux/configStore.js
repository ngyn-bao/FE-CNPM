import { configureStore } from "@reduxjs/toolkit";
import appReducer from './slices/appSlice';

// Create a basic reducer
const rootReducer = {
  app: appReducer,
};

export const store = configureStore({
  reducer: rootReducer,
});

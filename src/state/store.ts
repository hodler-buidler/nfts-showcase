import { configureStore } from '@reduxjs/toolkit';
import app from './app/reducer';

export const store = configureStore({
  reducer: {
    app,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: true,
      serializableCheck: false,
    }),
});

import { configureStore } from '@reduxjs/toolkit';
import app from './app/reducer';
import web3 from './web3/reducer';

export const store = configureStore({
  reducer: {
    app,
    web3,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: true,
      serializableCheck: false,
    }),
});

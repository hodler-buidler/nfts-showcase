import { AppMessage } from '@/typings/app';
import { createReducer } from '@reduxjs/toolkit';
import { popMessagesStack, showMessage } from './actions';

export interface AppState {
  messages: AppMessage[];
}

export const initialState: AppState = {
  messages: [],
};

export default createReducer(initialState, (builder) =>
  builder
    .addCase(showMessage, (state, { payload }) => {
      state.messages.push(payload);
    })
    .addCase(popMessagesStack, (state) => {
      if (state.messages.length) {
        state.messages.splice(0, 1);
      }
    }),
);

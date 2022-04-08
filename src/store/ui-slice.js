import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
   name: 'ui',
   initialState: { cartIsVisible: false, notification: null },
   reducers: {
      toggle(state) {
         state.cartIsVisible = !state.cartIsVisible;
      },
      showNotification(state, action) {
         state.showNotification = {
            status: action.payload.action,
            title: action.payload.title,
            message: action.payload.message,
         };
      },
   },
});

export const uiAction = uiSlice.actions;

export default uiSlice.reducer;

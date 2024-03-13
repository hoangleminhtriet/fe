import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    updatePackage: (state, action) => {
      state.package = action.payload;
      return state;
    },
    selectService: (state, action) => {
      if (!state.services) {
        state.services = [];
      }

      const index = state.services.map((item) => item.id).indexOf(action.payload.id);

      if (index >= 0) {
        state.services.splice(index, 1);
      } else {
        state.services.push(action.payload);
      }

      return state;
    },
    updateService: (state, action) => {
      state.services = action.payload;
      return state;
    },
    removeService: (state, action) => {
      state.services.splice(action.payload, 1);
      return state;
    },
    updateInformation: (state, action) => {
      state.information = action.payload;
      return state;
    },
    reset: () => {
      return initialState;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updatePackage, reset, selectService, updateInformation, updateService, removeService } =
  bookingSlice.actions;

export default bookingSlice.reducer;

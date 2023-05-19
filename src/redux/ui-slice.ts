import { createSlice, current } from "@reduxjs/toolkit";

type InitialState = {
  stteper: number;
  next: boolean;
};

const initialState: InitialState = {
  stteper: 12,
  next: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    addToStteper(state, action) {
      state.stteper = action.payload;
    },
    removeFromStteper(state) {
      state.stteper -= 12;
    },
    resetStteper(state) {
      state.stteper = 12;
    },
    NextButton(state, action) {
      state.next = action.payload;
    },
  },
});

export const { addToStteper, removeFromStteper, resetStteper, NextButton } =
  uiSlice.actions;
export default uiSlice.reducer;

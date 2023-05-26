import { createSlice, current } from "@reduxjs/toolkit";

type InitialState = {
  stteper: number;
  next: boolean;
};

const initialState: InitialState = {
  stteper: 12.5,
  next: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    addToStteper(state) {
      state.stteper += 12.5;
    },
    removeFromStteper(state) {
      state.stteper -= 12.5;
    },
    resetStteper(state) {
      state.stteper = initialState.stteper;
    },
    NextButton(state, action) {
      state.next = action.payload;
    },
  },
});

export const { addToStteper, removeFromStteper, resetStteper, NextButton } =
  uiSlice.actions;
export default uiSlice.reducer;

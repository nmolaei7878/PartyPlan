import { createSlice } from "@reduxjs/toolkit";

type Plan = {
  title: string;
};

type InitialState = {
  plans: Array<Plan>;
  stteper: number;
};
const p: Plan = { title: "mamad" };
const initialState: InitialState = {
  plans: [],
  stteper: 12,
};

const planSlice = createSlice({
  name: "plan",
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
  },
});

export const { addToStteper, removeFromStteper, resetStteper } =
  planSlice.actions;
export default planSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

type Plan = {
  title: string;
};

type InitialState = {
  plans: Array<Plan>;
  step: string;
};
const p: Plan = { title: "mamad" };
const initialState: InitialState = {
  plans: [p],
  step: "ocassion",
};

const planSlice = createSlice({
  name: "plan",
  initialState,
  reducers: {},
});

export default planSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

type Plan = {
  title: string;
};

type InitialState = {
  plans: Array<Plan>;
};
const p: Plan = { title: "mamad" };
const initialState: InitialState = {
  plans: [p],
};

const planSlice = createSlice({
  name: "plan",
  initialState,
  reducers: {},
});

export default planSlice.reducer;

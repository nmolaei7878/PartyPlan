import { createSlice, current } from "@reduxjs/toolkit";

type InitialState = {
  plans: Array<Plan>;
  stteper: number;
  newPlan: Plan | undefined;
  createdID: string;
};

const p: Plan | undefined = undefined;

const initialState: InitialState = {
  plans: [],
  newPlan: p,
  createdID: "",
  stteper: 12,
};

const planSlice = createSlice({
  name: "plan",
  initialState,
  reducers: {
    resetPlan(state) {
      state.newPlan = undefined;
      console.log(state.newPlan);
      state.createdID = "";
    },
    addPlan(state, action) {
      state.newPlan = {
        id: action.payload.id,
        alcohol: "",
        boardGame: "",
        budget: "",
        decorator: "",
        eInvite: false,
        eventDate: "",
        eventName: "",
        eventTime: "",
        foodArrangment: "",
        guestSize: "",
        occasion: "",
      };
      state.createdID = action.payload.id;
      console.log(current(state.newPlan));
    },
    updateOccasion(state, action) {
      state.newPlan!.occasion = action.payload;
      console.log(current(state.newPlan));
    },
    updateGuest(state, action) {
      state.newPlan!.guestSize = action.payload;
      console.log(current(state.newPlan));
    },
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

export const {
  addToStteper,
  removeFromStteper,
  resetStteper,
  addPlan,
  updateGuest,
  resetPlan,
  updateOccasion,
} = planSlice.actions;
export default planSlice.reducer;

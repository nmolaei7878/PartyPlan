import { createSlice, current } from "@reduxjs/toolkit";

type InitialState = {
  plans: Array<Plan>;
  newPlan: Plan | undefined;
  createdID: string;
};

const p: Plan | undefined = undefined;
export type PlanKey = keyof typeof p;

const initialState: InitialState = {
  plans: [],
  newPlan: p,
  createdID: "",
};

const planSlice = createSlice({
  name: "plan",
  initialState,
  reducers: {
    resetPlan(state) {
      state.newPlan = undefined;
      state.createdID = "";
    },
    addPlan(state, action) {
      state.newPlan = {
        id: action.payload.id,
        alcohol: "",
        boardGame: "",
        budget: "",
        decorator: "",
        eInvite: "",
        eventDate: "",
        eventName: "",
        eventTime: "",
        foodArrangment: "",
        guestSize: "",
        occasion: "",
      };
      state.createdID = action.payload.id;
      // console.log(current(state.newPlan));
    },
    updateOccasion(state, action) {
      state.newPlan!.occasion = action.payload;
      // console.log(current(state.newPlan));
    },
    updateGuest(state, action) {
      state.newPlan!.guestSize = action.payload;
      // console.log(current(state.newPlan));
    },
    updateEvent(state, action) {
      state.newPlan!.eventName = action.payload.eventName;
      state.newPlan!.eventDate = action.payload.eventDate;
      state.newPlan!.eventTime = action.payload.eventTime;
      state.newPlan!.budget = action.payload.budget;
    },
    updateInvite(state, action) {
      state.newPlan!.eInvite = action.payload;
      // console.log(current(state.newPlan));
    },
    updateFood(state, action) {
      state.newPlan!.foodArrangment = action.payload;
      // console.log(current(state.newPlan));
    },
    updateAlcohol(state, action) {
      state.newPlan!.alcohol = action.payload;
      // console.log(current(state.newPlan));
    },
    updateDecorator(state, action) {
      state.newPlan!.decorator = action.payload;
      // console.log(current(state.newPlan));
    },
    updateBoradGame(state, action) {
      state.newPlan!.boardGame = action.payload;
      // console.log(current(state.newPlan));
    },
  },
});

export const {
  addPlan,
  updateInvite,
  updateFood,
  updateAlcohol,
  updateDecorator,
  updateBoradGame,
  updateGuest,
  resetPlan,
  updateEvent,
  updateOccasion,
} = planSlice.actions;
export default planSlice.reducer;

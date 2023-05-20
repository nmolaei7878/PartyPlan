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
    createPlan(state, action) {
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
    },
    updateOccasion(state, action) {
      state.newPlan!.occasion = action.payload;
    },
    updateGuest(state, action) {
      state.newPlan!.guestSize = action.payload;
    },
    updateEventName(state, action) {
      state.newPlan!.eventName = action.payload;
    },
    updateEventDate(state, action) {
      state.newPlan!.eventDate = action.payload;
    },
    updateEventTime(state, action) {
      state.newPlan!.eventTime = action.payload;
    },
    updateEventbudget(state, action) {
      state.newPlan!.budget = action.payload;
    },
    updateInvite(state, action) {
      state.newPlan!.eInvite = action.payload;
    },
    updateFood(state, action) {
      state.newPlan!.foodArrangment = action.payload;
    },
    updateAlcohol(state, action) {
      state.newPlan!.alcohol = action.payload;
    },
    updateDecorator(state, action) {
      state.newPlan!.decorator = action.payload;
    },
    updateBoradGame(state, action) {
      state.newPlan!.boardGame = action.payload;
    },
    addPlan(state) {
      state.plans.push(state.newPlan!);
    },
  },
});

export const {
  createPlan,
  updateInvite,
  updateFood,
  updateAlcohol,
  updateDecorator,
  updateBoradGame,
  updateGuest,
  resetPlan,
  updateEventDate,
  updateEventName,
  updateEventTime,
  updateEventbudget,
  updateOccasion,
  addPlan,
} = planSlice.actions;
export default planSlice.reducer;

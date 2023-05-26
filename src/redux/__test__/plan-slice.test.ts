import store from "../store";
import { createPlan, updateOccasion, addPlan } from "../slices/plan-slice";

test("create Plan test", () => {
  let state = store.getState().plan;
  expect(state.newPlan).toEqual(undefined);
  store.dispatch(createPlan("1"));
  state = store.getState().plan;
  expect(state.newPlan?.id).toEqual("1");
});

test("update Occasion test", () => {
  let state = store.getState().plan.newPlan;
  expect(state?.id).toEqual("1");
  store.dispatch(updateOccasion("other"));
  state = store.getState().plan.newPlan;
  expect(state?.occasion).toEqual("other");
});

test("add Plan test", () => {
  let state = store.getState().plan;
  expect(state?.plans).toEqual([]);
  expect(state?.plans).toHaveLength(0);
  store.dispatch(addPlan());
  state = store.getState().plan;
  expect(state?.plans).toHaveLength(1);
});

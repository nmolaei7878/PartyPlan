import { setupStore } from "../store";
import {
  createPlan,
  updateOccasion,
  updateFood,
  updateAlcohol,
  updateDecorator,
  updateGuest,
  resetPlan,
  updateEventName,
  addPlan,
} from "../slices/plan-slice";

const store = setupStore();
test("create Plan test", () => {
  let state = store.getState().plan;
  expect(state.newPlan).toEqual(undefined);
  store.dispatch(createPlan("1"));
  state = store.getState().plan;
  expect(state.newPlan?.id).toEqual("1");
});

test("update Plan Object test", () => {
  let state = store.getState().plan.newPlan;
  expect(state?.id).toEqual("1");
  store.dispatch(updateOccasion("other"));
  store.dispatch(updateAlcohol("no"));
  store.dispatch(updateDecorator("yes"));
  store.dispatch(updateEventName("BirthDay"));
  store.dispatch(updateFood("Potluck"));
  store.dispatch(updateGuest("large"));
  state = store.getState().plan.newPlan;
  expect(state?.occasion).toEqual("other");
  expect(state).toMatchInlineSnapshot(`
    Object {
      "alcohol": "no",
      "boardGame": "",
      "budget": "",
      "decorator": "yes",
      "eInvite": "",
      "eventDate": "",
      "eventName": "BirthDay",
      "eventTime": "",
      "foodArrangment": "Potluck",
      "guestSize": "large",
      "id": "1",
      "occasion": "other",
      "todos": Array [],
    }
  `);
});

test("add Plan test", () => {
  let state = store.getState().plan;
  expect(state?.plans).toEqual([]);
  expect(state?.plans).toHaveLength(0);
  store.dispatch(addPlan());
  state = store.getState().plan;
  expect(state?.plans).toHaveLength(1);
});

test("reset Plan test", () => {
  let state = store.getState().plan.newPlan;
  store.dispatch(resetPlan());
  state = store.getState().plan.newPlan;
  expect(state).toEqual(undefined);
});

import { setupStore } from "../store";
import { addToStteper, removeFromStteper } from "../slices/ui-slice";

const store = setupStore();

test("add To Stteper", () => {
  let state = store.getState().ui;
  expect(state.stteper).toEqual(12.5);
  store.dispatch(addToStteper());
  state = store.getState().ui;
  expect(state.stteper).toEqual(25);
});

test("remove From Stteper", () => {
  let state = store.getState().ui;
  store.dispatch(removeFromStteper());
  state = store.getState().ui;
  expect(state.stteper).toEqual(12.5);
});

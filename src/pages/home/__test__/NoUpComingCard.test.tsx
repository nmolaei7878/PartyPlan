import NoUpComingCard from "../components/NoUpComingCard";
import { renderWithProviders } from "../../../core/util/test-utils";
import { fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test("NoUpComingCard test", () => {
  renderWithProviders(<NoUpComingCard />);
  expect(screen.getByText(/no upcoming house party/i)).toBeInTheDocument();
  expect(screen.findAllByRole("button"));
});

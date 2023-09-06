import { render, screen } from "@testing-library/react";
import { Main } from ".";

test("should render <Main /> component", () => {
  render(<Main />);

  expect(screen.getByText("Nextjs boilerplate")).toBeInTheDocument();
});

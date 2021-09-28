import { render, screen } from "@testing-library/react";
import App from "../components/App";

test("renders title", () => {
  render(<App />);
  const linkElement = screen.getByText(/Compare your Air/i);
  expect(linkElement).toBeInTheDocument();
});

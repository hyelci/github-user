import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";

describe("Repository component", () => {
  it("should render repository", () => {
    const { getByText } = render(<Navbar />, { wrapper: BrowserRouter });
    expect(getByText("Home")).toBeInTheDocument();
  });
});

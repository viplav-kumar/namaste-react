import { render, screen } from "@testing-library/react";
import About from "../components/About";

describe("Testing About Us Page/Component", () => {
  it("Should render about us component", () => {
    render(<About />);
    const aboutUsHeading = screen.getByText("About Zingry");
    expect(aboutUsHeading).toBeInTheDocument();
  });

  it("Should render explore restaurants button", () => {
    render(<About />);
    const exploreResButton = screen.getByRole("button", {
      name: /Explore Restaurants/,
    });
    expect(exploreResButton).toBeInTheDocument();
  });
});

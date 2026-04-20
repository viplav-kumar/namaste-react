import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";

describe("Contact Us page/component test cases", () => {
  test("Render contact component", () => {
    // 1. Rendering Component
    render(<Contact />);
    // 2. Querying the DOM
    const header = screen.getByText("Contact Us");
    // 3. Asertion
    expect(header).toBeInTheDocument();
    //   console.log(header);
  });

  test("Expecting three input element", () => {
    // 1. Rendering Component
    render(<Contact />);
    // 2. Querying the DOM
    const inputs = screen.getAllByRole("textbox");
    // 3. Asertion
    expect(inputs.length).toBe(3);
  });

  test("Expecting submit button on contact page", () => {
    // Render the component
    render(<Contact />);
    // Querying the DOM
    const submitButton = screen.getByRole("button", { name: /Submit/ });
    // Assertion
    expect(submitButton).toBeInTheDocument();
  });

  it("Should expect find us on the map section", () => {
    render(<Contact />);
    const mapHeading = screen.getByRole("heading", {
      name: /Find Us on the Map/,
    });
    expect(mapHeading).toBeInTheDocument();
  });

  it("Should expect quick help section", () => {
    render(<Contact />);
    const quickHelpHeading = screen.getByRole("heading", {
      name: /Need Quick Help/,
    });
    expect(quickHelpHeading).toBeInTheDocument();
    const chatWithSupportButton = screen.getByRole("button", {
      name: /Chat with Support/,
    });
    expect(chatWithSupportButton).toBeInTheDocument();
  });
});

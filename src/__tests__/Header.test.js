import { fireEvent, render, screen } from "@testing-library/react";
import MyHeader from "../components/MyHeader";
import { Provider } from "react-redux";
import appStore from "../store/appStore";
import { BrowserRouter } from "react-router-dom";
import UserContext from "../utils/contexts/UserContext";
import { useState } from "react";

it("Should load header component with login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <MyHeader />
      </Provider>
    </BrowserRouter>,
  );
  const loginButton = screen.getByRole("button", { name: /Login/ });
  expect(loginButton).toBeInTheDocument();
});

it("Should render the header component with cart text", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <MyHeader />
      </Provider>
    </BrowserRouter>,
  );
  const cartText = screen.getByText(/Cart/);
  expect(cartText).toBeInTheDocument();
});

const Wrapper = ({ children }) => {
  const [userName, setUserName] = useState("Guest");

  return (
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      {children}
    </UserContext.Provider>
  );
};

it("Should change Login button to VK and then back to Login on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Wrapper>
          <MyHeader />
        </Wrapper>
      </Provider>
    </BrowserRouter>,
  );
  const loginButton = screen.getByRole("button", { name: /Login/ });
  expect(loginButton).toBeInTheDocument();
  fireEvent.click(loginButton);
  const loggenInUserText = screen.getByText(/VK/);
  expect(loggenInUserText).toBeInTheDocument();
  fireEvent.click(loggenInUserText);
  expect(loginButton).toBeInTheDocument();
});

import { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";
import GroceryMartShimmer from "./components/grocery/GroceryMartShimmer";
import MyFooter from "./components/MyFooter";
import MyHeader from "./components/MyHeader";
import RestaurantPage from "./components/restaurant/RestaurantPage";
import Cart from "./components/Cart";
import UserContext from "./utils/contexts/UserContext";
import ScrollToTop from "./utils/helpers/ScrollToTop";
import { Provider } from "react-redux";
import appStore from "./store/appStore";

const Grocery = lazy(() => import("./components/grocery/Grocery"));
const AppLayout = () => {
  const [userName, setUserName] = useState("Guest");
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName }}>
        <div className="h-full w-full font-(family-name: Segoe UI, Tahoma, Geneva, Verdana, sans-serif) pt-17">
          <MyHeader setUserName={setUserName} />
          <ScrollToTop />
          <Outlet />
          <MyFooter />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<GroceryMartShimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantPage />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

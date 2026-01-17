import ReactDOM from "react-dom/client";
import MyHeader from "./components/MyHeader";
import Body from "./components/Body";
import MyFooter from "./components/MyFooter";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantPage from "./components/restaurant/RestaurantPage";
import Grocery from "./components/grocery/Grocery";
import ScrollToTop from "./utils/ScrollToTop";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="res-app">
      <MyHeader />
      <ScrollToTop />
      <Outlet />
      <MyFooter />
    </div>
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
        element: <Grocery />,
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

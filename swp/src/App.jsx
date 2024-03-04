import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./page/home";
import Food from "./page/food";
import Login from "./page/login";
import Register from "./page/register";
import Dashboard from "./component/dashboard";
import Profile from "./page/profile";
import Package from "./page/package";
import Statistics from "./page/statistics";
import Report from "./page/report";
import Account from "./page/account";
import Booking from "./page/booking";
import BookingStep2 from "./page/booking/BookingStep2";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/food",
      element: <Food />,
    },
    {
      path: "/booking",
      element: <Booking />,
    },
    {
      path: "/booking2",
      element: <BookingStep2 />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "dashboard",
      element: <Dashboard />,
      children: [
        {
          path: "profile",
          element: <Profile />,
        },
        {
          path: "package",
          element: <Package />,
        },
        {
          path: "statistics",
          element: <Statistics />,
        },
        {
          path: "report",
          element: <Report />,
        },
        {
          path: "account",
          element: <Account />,
        },
      ],
    },
  ]);

  return (
    <main className="main">
      <RouterProvider router={router} />
    </main>
  );
}

export default App;

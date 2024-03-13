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
import StepProgress from "./page/booking";
import { ChakraProvider } from "@chakra-ui/react";
import Schedule from "./page/schedule";
import Policy from "./page/register/policy";
import SuccessPage from "./page/success/success";
import ChooseProfile from "./page/host";
import Wallet from "./page/wallet";
import Order from "./page/Order";
import HomeLogin from "./page/homeLogin";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/customer",
      element: <HomeLogin />,
    },
    {
      path: "/food",
      element: <Food />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/booking/:id",
      element: <StepProgress />,
    },
    {
      path: "/host",
      element: <ChooseProfile />,
    },
    {
      path: "/policy",
      element: <Policy />,
    },
    {
      path: "/success",
      element: <SuccessPage />,
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
          path: "schedule",
          element: <Schedule />,
        },
        {
          path: "report",
          element: <Report />,
        },
        {
          path: "account",
          element: <Account />,
        },
        {
          path: "wallet",
          element: <Wallet />,
        },
        {
          path: "order",
          element: <Order />,
        },
      ],
    },
  ]);

  return (
    <main className="main">
      <ChakraProvider>
        <RouterProvider router={router} />
      </ChakraProvider>
    </main>
  );
}

export default App;

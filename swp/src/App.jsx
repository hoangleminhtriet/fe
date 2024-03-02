import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
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
import Header from "./component/Header";
import Footer from "./component/Footer";
import Overview from "./component/Navbar/Overview";
import Contact from "./component/Navbar/Contact";
import Discount from "./component/Navbar/Discount";
import Service from "./component/Navbar/Service";
import Booking from "./page/booking";
import BookingStep2 from "./page/booking/BookingStep2";

function App() {
  const [showOverview, setShowOverview] = useState(false);
  const [showDiscount, setShowDiscount] = useState(false);
  const [showService, setShowService] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const hideAll = () => {
    setShowOverview(false);
    setShowDiscount(false);
    setShowService(false);
    setShowContact(false);
  };

  const toggleOverview = () => {
    if (showOverview) {
      hideAll();
    } else {
      hideAll();
      setShowOverview(true);
    }
  };

  const toggleDiscount = () => {
    if (showDiscount) {
      hideAll();
    } else {
      hideAll();
      setShowDiscount(true);
    }
  };

  const toggleService = () => {
    if (showService) {
      hideAll();
    } else {
      hideAll();
      setShowService(true);
    }
  };

  const toggleContact = () => {
    if (showContact) {
      hideAll();
    } else {
      hideAll();
      setShowContact(true);
    }
  };

  return (
    <main className="main">
      <Router>
        <Header
          toggleOverview={toggleOverview}
          toggleDiscount={toggleDiscount}
          toggleService={toggleService}
          toggleContact={toggleContact}
        />
        <div className="d-flex">
          {" "}
          {showOverview && <Overview />}
          {showDiscount && <Discount />}
          {showService && <Service />}
          {showContact && <Contact />}
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/food" element={<Food />} />
          <Route path="/login" element={<Login />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/booking2" element={<BookingStep2 />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="dashboard"
            element={
              <Dashboard>
                <Route path="profile" element={<Profile />} />
                <Route path="package" element={<Package />} />
                <Route path="statistics" element={<Statistics />} />
                <Route path="report" element={<Report />} />
                <Route path="account" element={<Account />} />
              </Dashboard>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>

        <Footer />
      </Router>
    </main>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./screen/Home";
import Header from "./components/Header/Header";
import Overview from "./components/Navbar/Overview";
import Discount from "./components/Navbar/Discount";
import Service from "./components/Navbar/Service";
import Contact from "./components/Navbar/Contact";

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
    <div className="main">
      <Header
        toggleOverview={toggleOverview}
        toggleDiscount={toggleDiscount}
        toggleService={toggleService}
        toggleContact={toggleContact}
      />
      {showOverview && <Overview />}
      {showDiscount && <Discount />}
      {showService && <Service />}
      {showContact && <Contact />}
      <Home />
      <Footer />
    </div>
  );
}

export default App;

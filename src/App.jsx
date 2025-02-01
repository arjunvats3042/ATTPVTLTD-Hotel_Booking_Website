import {Routes, Route} from "react-router-dom";
import Footer from "./components/Footer";
import HeroSection from "./components/Herosection";
import Navbar from "./components/Navbar";
import Rooms from "./components/Rooms";
import Booking from "./components/Booking";
import Services from "./components/Services";
import Contactus from "./components/Contactus";
import React from "react";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div id="home">
                  <HeroSection />
                </div>
                <div id="rooms">
                  <Rooms />
                </div>
                <div id="facilities">
                  <Services />
                </div>
                <div id="contact">
                  <Contactus />
                </div>
              </>
            }
          />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;

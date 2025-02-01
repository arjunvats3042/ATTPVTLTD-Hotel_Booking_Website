import {useEffect} from "react";
import "./App.css";
import Footer from "./components/Footer";
import HeroSection from "./components/Herosection";
import Navbar from "./components/Navbar";
import Rooms from "./components/Rooms";
import Booking from "./components/Booking";
import {Routes, Route} from "react-router-dom";
import Services from "./components/Services";

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
                <HeroSection />
                <Rooms />
                <Services />
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

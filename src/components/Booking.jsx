import React, {useState, useEffect} from "react";
import {useSearchParams, useNavigate} from "react-router-dom";
import FormButton from "./FormButton";

const roomPrices = {
  1: 100,
  2: 120,
  3: 150,
  4: 180,
  5: 200,
  6: 250,
  7: 300,
  8: 350,
};

const roomNames = {
  1: "Standard Room",
  2: "Deluxe Room",
  3: "Executive Suite",
  4: "Presidential Suite",
  5: "Luxury Suite",
  6: "Honeymoon Suite",
  7: "Royal Suite",
  8: "Penthouse Suite",
};

const Booking = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const roomNumber = searchParams.get("room");
  const roomImage = searchParams.get("image");

  const [rooms, setRooms] = useState(1);
  const [selectedRoomPrice, setSelectedRoomPrice] = useState(
    roomPrices[roomNumber]
  );
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [showAlert, setShowAlert] = useState("");

  useEffect(() => {
    setSelectedRoomPrice(roomPrices[roomNumber]);
  }, [roomNumber]);

  const handleRoomChange = (e) => {
    const newRoomCount = e.target.value;
    if (newRoomCount > 5) {
      setShowAlert("Max 5 rooms allowed. Contact us for more.");
    } else {
      setRooms(newRoomCount);
      setShowAlert("");
    }
  };

  const handleBooking = (e) => {
    e.preventDefault();
    const phoneRegex = /^\d{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!phoneRegex.test(phone)) {
      setShowAlert("Please enter a valid 10-digit phone number.");
      return;
    }

    if (!emailRegex.test(email)) {
      setShowAlert("Please enter a valid email address.");
      return;
    }

    if (new Date(checkOut) <= new Date(checkIn)) {
      setShowAlert("Check-out date must be after the check-in date.");
      return;
    }

    setShowAlert("Booking Confirmed! Enjoy your stay. Redirecting...");
    setTimeout(() => navigate("/"), 3000);
  };

  const totalAmount = rooms * selectedRoomPrice;

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="flex flex-col md:flex-row bg-black shadow-lg rounded-lg w-full max-w-6xl p-6">
        <div className="md:w-1/2 w-full mb-6 md:mb-0">
          <img
            src={roomImage}
            alt={`Room ${roomNumber}`}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <div className="md:w-1/2 w-full p-6 bg-black rounded-lg border border-white">
          <h3 className="text-3xl font-semibold text-center mb-6 text-gray-300">
            {roomNames[roomNumber]}
          </h3>
          <form onSubmit={handleBooking}>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                required
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-white"
              />
              <input
                type="tel"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-white"
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-white"
              />
              <input
                type="number"
                placeholder="Rooms"
                value={rooms}
                onChange={handleRoomChange}
                min="1"
                max="5"
                required
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-white"
              />
              <div className="w-full">
                <label className="block text-gray-300 mb-2" htmlFor="checkIn">
                  Check-in Date
                </label>
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  required
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-white"
                  id="checkIn"
                />
              </div>
              <div className="w-full">
                <label className="block text-gray-300 mb-2" htmlFor="checkOut">
                  Check-out Date
                </label>
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  required
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-white"
                  id="checkOut"
                />
              </div>
              <input
                type="text"
                value={`$${totalAmount}`}
                readOnly
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-white"
              />
            </div>
            <FormButton />
          </form>
        </div>
      </div>

      {showAlert && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gray-800 p-6 rounded-lg text-center shadow-lg w-96">
            <h3
              className={`text-xl ${
                showAlert.includes("Confirmed")
                  ? "text-green-500"
                  : "text-red-500"
              } mb-2`}
            >
              {showAlert.includes("Confirmed") ? "🎉 Success!" : "⚠️ Alert"}
            </h3>
            <p className="text-gray-300">{showAlert}</p>
            {!showAlert.includes("Confirmed") && (
              <button
                onClick={() => setShowAlert("")}
                className="mt-4 bg-red-600 text-white py-2 px-6 rounded-md hover:bg-red-700"
              >
                Close
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Booking;

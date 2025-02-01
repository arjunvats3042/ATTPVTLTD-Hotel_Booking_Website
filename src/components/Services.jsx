import React from "react";
import Servicecard from "./Servicecard";
import roomservice from "../serviceimg/room-service.png";
import roomservice2 from "../serviceimg/gabriel-alenius-lTrbjFd8Iwo-unsplash.jpg";
import transport from "../serviceimg/transport.png";
import transport2 from "../serviceimg/peter-kasprzyk-NZOgPLpL4Lk-unsplash.jpg";
import parking from "../serviceimg/parking (1).png";
import parking2 from "../serviceimg/john-matychuk-yvfp5YHWGsc-unsplash.jpg";
import dine from "../serviceimg/table.png";
import dine2 from "../serviceimg/louis-hansel-wVoP_Q2Bg_A-unsplash.jpg";
import wifi from "../serviceimg/secure-internet.png";
import wifi2 from "../serviceimg/paul-hanaoka-KRAk_61pgTo-unsplash.jpg";
import swimming from "../serviceimg/swimming.png";
import swimming2 from "../serviceimg/roberto-nickson-h1_ILkb9tLo-unsplash.jpg";

const Services = () => {
  return (
    <div id="facilities" className="bg-black py-2">
      <h1 className="text-center mb-10 top-4 text-white text-3xl sm:text-4xl lg:text-5xl font-semibold z-10">
        Our Services
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 max-w-6xl mx-auto">
        <Servicecard
          frontimg={roomservice}
          title="Room Service"
          description="Indulge in 24/7 room service, offering a wide range of gourmet meals and beverages delivered right to your door, ensuring comfort and convenience at any hour."
          backimg={roomservice2}
        />
        <Servicecard
          frontimg={transport}
          title="Pickup & Drop"
          description="Enjoy seamless transportation with our luxurious pickup and drop service, designed to cater to your every need, ensuring a smooth and stress-free journey."
          backimg={transport2}
        />
        <Servicecard
          frontimg={parking}
          title="Parking"
          description="Experience the utmost convenience with our secure and spacious parking facilities, providing peace of mind as you relax and enjoy your stay."
          backimg={parking2}
        />
        <Servicecard
          frontimg={dine}
          title="Dining"
          description="Savor exquisite dining options at our world-class restaurants, offering a variety of cuisines prepared by top chefs in a luxurious, elegant setting."
          backimg={dine2}
        />
        <Servicecard
          frontimg={wifi}
          title="Wi-Fi"
          description="Stay connected with our high-speed Wi-Fi, available throughout the hotel, ensuring you have access to everything you need, whether for business or leisure."
          backimg={wifi2}
        />
        <Servicecard
          frontimg={swimming}
          title="Swimming"
          description="Relax and rejuvenate in our pristine, heated swimming pool, surrounded by luxurious amenities, offering the perfect retreat for both leisure and fitness enthusiasts."
          backimg={swimming2}
        />
      </div>
    </div>
  );
};

export default Services;

import React, {useState, useEffect, useRef} from "react";
import {useNavigate} from "react-router-dom";
import room1 from "../roomsimg/room1.jpg";
import room2 from "../roomsimg/room2.jpg";
import room3 from "../roomsimg/room3.jpg";
import room4 from "../roomsimg/room4.jpg";
import room5 from "../roomsimg/room5.jpg";
import room6 from "../roomsimg/room6.jpg";
import room7 from "../roomsimg/room7.jpg";
import room8 from "../roomsimg/room8.jpg";

const rooms = [room1, room2, room3, room4, room5, room6, room7, room8];

const preloadImages = (images) => {
  images.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
};

const StyleWrapper = {
  trackContainer: {
    width: "90vw",
    overflow: "hidden",
    height: "90%",
  },
  track: {
    display: "flex",
    gap: "6vmin",
    position: "relative",
    transition: "transform 4s ease",
  },
  image: {
    width: "40vmin",
    height: "56vmin",
    objectFit: "cover",
    userSelect: "none",
    cursor: "pointer",
    borderRadius: "10px",
  },
};

const Rooms = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    preloadImages(rooms);
  }, []);

  const handleImageClick = (index, roomImage) => {
    navigate(`/booking?room=${index + 1}&image=${roomImage}`);
  };

  const handleWheel = (e) => {
    if (!sliderRef.current.contains(e.target)) {
      return;
    }

    e.preventDefault();

    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex;

      if (e.deltaY > 0) {
        nextIndex = prevIndex + 1;
      } else if (e.deltaY < 0) {
        nextIndex = prevIndex - 1;
      }

      if (nextIndex < 0) {
        nextIndex = 0;
      } else if (nextIndex >= rooms.length) {
        nextIndex = rooms.length - 1;
      }

      return nextIndex;
    });
  };

  useEffect(() => {
    window.addEventListener("wheel", handleWheel, {passive: false});

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div
      id="rooms"
      className="relative w-full bg-black overflow-hidden flex justify-center items-center pt-[5vh] sm:pt-[5vh] lg:pt-[12vh] h-[60vh] sm:h-[80vh] lg:h-[80vh]"
    >
      <h1 className="absolute top-4 text-white text-4xl">Rooms and Suites</h1>

      <div
        style={StyleWrapper.trackContainer}
        ref={sliderRef}
        className="flex justify-center"
      >
        <div
          ref={trackRef}
          style={{
            ...StyleWrapper.track,
            transform: `translateX(-${currentIndex * 40}vmin)`,
          }}
        >
          {rooms.map((room, index) => (
            <img
              key={index}
              src={room}
              alt={`Room ${index + 1}`}
              className="img"
              style={{
                ...StyleWrapper.image,
              }}
              draggable="false"
              onClick={() => handleImageClick(index, room)}
              loading="eager"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rooms;

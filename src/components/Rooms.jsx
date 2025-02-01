import React, {useRef, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import room1 from "../roomsimg/room1.jpg";
import room2 from "../roomsimg/room2.jpg";
import room3 from "../roomsimg/room3.jpg";
import room4 from "../roomsimg/room4.jpg";
import room5 from "../roomsimg/room5.jpg";
import room6 from "../roomsimg/room6.jpg";
import room7 from "../roomsimg/room7.jpg";
import room8 from "../roomsimg/room8.jpg";

const StyleWrapper = {
  container: {
    position: "relative",
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: "black",
  },
  trackContainer: {
    width: "100vw",
    overflow: "hidden",
    cursor: "grab",
  },
  track: {
    display: "flex",
    gap: "4vmin",
    position: "relative",
    whiteSpace: "nowrap",
    transition: "transform 0.1s ease-out",
  },
  image: {
    width: "40vmin",
    height: "56vmin",
    objectFit: "cover",
    transition: "object-position 0.3s ease",
    userSelect: "none",
  },
};

const Rooms = () => {
  const navigate = useNavigate();
  const trackRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const prevPercentage = useRef(0);
  const currentPercentage = useRef(0);
  const requestRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const updateTrackPosition = () => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translate(${currentPercentage.current}%, 0%)`;
      for (const image of trackRef.current.getElementsByClassName("img")) {
        image.style.objectPosition = `${
          100 + currentPercentage.current
        }% center`;
      }
    }
  };

  const handleMouseDown = (e) => {
    if (!isMobile) {
      isDragging.current = true;
      startX.current = e.clientX;
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;

    const mouseDelta = startX.current - e.clientX;
    const maxDelta = window.innerWidth / 2;
    let percentage = (mouseDelta / maxDelta) * -100;
    let nextPercentage = prevPercentage.current + percentage;

    nextPercentage = Math.max(
      nextPercentage,
      -(
        (trackRef.current.scrollWidth - trackRef.current.clientWidth) /
        trackRef.current.clientWidth
      ) * 100
    );
    nextPercentage = Math.min(nextPercentage, 0);

    currentPercentage.current = nextPercentage;
    requestRef.current = requestAnimationFrame(updateTrackPosition);
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    prevPercentage.current = currentPercentage.current;
    trackRef.current.style.cursor = "grab";
    cancelAnimationFrame(requestRef.current);
  };

  const handleWheel = (e) => {
    if (!isMobile) {
      e.preventDefault();

      let nextPercentage = prevPercentage.current + (e.deltaY > 0 ? -3 : 3);
      nextPercentage = Math.max(
        nextPercentage,
        -(
          (trackRef.current.scrollWidth - trackRef.current.clientWidth) /
          trackRef.current.clientWidth
        ) * 100
      );
      nextPercentage = Math.min(nextPercentage, 0);

      currentPercentage.current = nextPercentage;
      prevPercentage.current = nextPercentage;
      requestRef.current = requestAnimationFrame(updateTrackPosition);
    }
  };

  const handleImageClick = (index, roomImage) => {
    navigate(`/booking?room=${index + 1}&image=${roomImage}`);
  };

  useEffect(() => {
    if (!isMobile) {
      const trackContainer = trackRef.current.parentElement;
      const trackWidth = trackRef.current.scrollWidth;
      const containerWidth = trackContainer.clientWidth;
      const initialShift =
        -((trackWidth - containerWidth) / 2 / containerWidth) * 100;

      currentPercentage.current = initialShift;
      prevPercentage.current = initialShift;
      updateTrackPosition();

      trackContainer.addEventListener("wheel", handleWheel, {passive: false});
      trackContainer.addEventListener("mousedown", handleMouseDown);
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);

      return () => {
        trackContainer.removeEventListener("wheel", handleWheel);
        trackContainer.removeEventListener("mousedown", handleMouseDown);
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isMobile]);

  return (
    <div style={StyleWrapper.container}>
      <h1 className="absolute top-4 text-white text-3xl sm:text-4xl lg:text-5xl font-semibold z-10">
        Rooms and Suites
      </h1>

      {isMobile ? (
        <div className="w-full overflow-hidden">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
            {[room1, room2, room3, room4, room5, room6, room7, room8].map(
              (room, index) => (
                <img
                  key={index}
                  src={room}
                  alt={`Room ${index + 1}`}
                  className="w-full h-auto object-cover cursor-pointer rounded-lg"
                  draggable="false"
                  onClick={() => handleImageClick(index, room)}
                />
              )
            )}
          </div>
        </div>
      ) : (
        <div style={StyleWrapper.trackContainer}>
          <div ref={trackRef} style={StyleWrapper.track}>
            {[room1, room2, room3, room4, room5, room6, room7, room8].map(
              (room, index) => (
                <img
                  key={index}
                  src={room}
                  alt={`Room ${index + 1}`}
                  className="img"
                  style={{...StyleWrapper.image, cursor: "pointer"}}
                  draggable="false"
                  onClick={() => handleImageClick(index, room)}
                />
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Rooms;

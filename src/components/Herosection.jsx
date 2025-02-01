import {useState, useEffect} from "react";
import img1 from "../herosectionimg/hotel1.jpg";
import img2 from "../herosectionimg/hotel2.jpg";
import img3 from "../herosectionimg/hotel3.jpg";
import img4 from "../herosectionimg/hotel4.jpg";
import img5 from "../herosectionimg/hotel5.jpg";

const HeroSection = () => {
  const images = [img1, img3, img2, img4, img5];

  const [currentImage, setCurrentImage] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    // Preload images
    const imagePromises = images.map((src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
      });
    });

    Promise.all(imagePromises).then(() => {
      setImagesLoaded(true);
    });
  }, []);

  useEffect(() => {
    if (!imagesLoaded) return;

    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [imagesLoaded]);

  return (
    <section
      className="relative h-screen bg-cover bg-center bg-fixed transition-all duration-1000 ease-in-out"
      style={{
        backgroundImage: imagesLoaded ? `url(${images[currentImage]})` : "none",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-30"></div>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
        <h1
          className="text-7xl font-permanent-marker text-center"
          style={{
            textShadow: "15px 15px 10px black",
          }}
        >
          THE GRAND HORIZON HOTEL
        </h1>
        <p
          className="text-xl font-semibold mt-4"
          style={{
            textShadow: "5px 5px 5px black",
            borderBottom: "2px solid rgba(255, 255, 255, 0.5)",
            paddingBottom: "5px",
          }}
        >
          Experience Elegance, Embrace Comfort.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
